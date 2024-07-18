import React, { useState, useEffect } from 'react';
import './editor.css';
import ElementEditor from '../../components/element_editor/ElementEditor';
import Element from '../../components/element_editor/Element';
import { Box } from '@chakra-ui/react';

const Editor = () => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  useEffect(() => {
    if (historyIndex === -1) {
      setHistory([elements]);
      setHistoryIndex(0);
    } else {
      const updatedHistory = history.slice(0, historyIndex + 1);
      setHistory([...updatedHistory, elements]);
      setHistoryIndex(updatedHistory.length);
    }
  }, [elements]);

  const addElement = (type, parentId = null) => {
    const newElement = { id: Date.now(), type, content: '', styles: {}, children: [] };
    if (parentId) {
      const updateElements = (els) => els.map(el => {
        if (el.id === parentId) {
          return { ...el, children: [...el.children, newElement] };
        }
        if (el.children) {
          return { ...el, children: updateElements(el.children) }; // Recursively update nested elements
        }
        return el;
      });
      setElements(updateElements(elements));
    } else {
      setElements([...elements, newElement]);
    }
  };

  const updateElement = (id, updates) => {
    const updateElements = (els) => els.map(el => {
      if (el.id === id) {
        return { ...el, ...updates };
      }
      if (el.children) {
        return { ...el, children: updateElements(el.children) }; // Recursively update nested elements
      }
      return el;
    });
    setElements(updateElements(elements));
  };

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setElements(history[historyIndex - 1]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setElements(history[historyIndex + 1]);
    }
  };

  const findElementById = (els, id) => {
    for (let el of els) {
      if (el.id === id) {
        return el;
      }
      if (el.children.length > 0) {
        const found = findElementById(el.children, id);
        if (found) return found;
      }
    }
    return null;
  };

  const renderElements = (els) => els.map(el => (
    <Element
      key={el.id}
      element={el}
      onSelect={() => setSelectedElement(el.id)}
      selected={selectedElement === el.id}
      renderElements={renderElements} // Pass renderElements function to handle nested elements
    />
  ));

  const selectedEl = findElementById(elements, selectedElement);

  return (
    <Box className="editor-container">
      <div className="toolbar toolbar-dark-mode">
        <button onClick={() => addElement('line')}>Add Line</button>
        <button onClick={() => addElement('text')}>Add Text</button>
        <button onClick={() => addElement('box')}>Add Box</button>
        <button onClick={undo} disabled={historyIndex <= 0}>Undo</button>
        <button onClick={redo} disabled={historyIndex >= history.length - 1}>Redo</button>
      </div>
      <Box className="canvas" w={selectedElement?'60%':''} overflow={'auto'} border={selectedElement?'1px solid':''}>
        {renderElements(elements)}
      </Box>
      {selectedElement && selectedEl && (
        <ElementEditor
          selectedElement={selectedEl}
          updateElement={updateElement}
          addElement={addElement}
        />
      )}
    </Box>
  );
};

export default Editor;
