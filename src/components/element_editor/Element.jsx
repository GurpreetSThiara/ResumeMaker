import React, { useMemo } from 'react';
import './Element.css';

const Element = React.memo(({ element, onSelect, selected, renderElements }) => {
  const lineStyles = useMemo(() => (element.styles ), [element.styles]);
  const boxStyles = useMemo(() => ({ ...element.styles }), [element.styles]);

  const handleClick = (e, id) => {
    e.stopPropagation();
    onSelect(id);
  };

  return (
    <>
      {element.type === 'line' && (
        <hr 
          style={lineStyles}
          onClick={(e) => handleClick(e, element.id)}
        />
      )}
      {element.type === 'text' && (
        <p 
          style={element.styles}
          onClick={(e) => handleClick(e, element.id)}
        >
          {element.content || 'Edit text'}
        </p>
      )}
      {element.type === 'box' && (
        <div 
          style={boxStyles}
          onClick={(e) => handleClick(e, element.id)}
        >
          {element.content || 'Edit content'}
          {renderElements(element.children)}
        </div>
      )}
    </>
  );
});

export default Element;
