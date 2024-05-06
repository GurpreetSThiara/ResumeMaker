import React, { useState } from 'react';
import { ChakraProvider, Container, Heading, Text, UnorderedList, ListItem, Divider, Button, Editable, EditablePreview, EditableInput } from '@chakra-ui/react';
import html2pdf from 'html2pdf.js';

const Resume = ({ personalInfo, summary, experience, education, projects, skills, certifications, achievements, references }) => {
  const [editablePersonalInfo, setEditablePersonalInfo] = useState(personalInfo);
  const [editableSummary, setEditableSummary] = useState(summary);
  const [editableExperience, setEditableExperience] = useState(experience);
  const [editableEducation, setEditableEducation] = useState(education);
  const [editableProjects, setEditableProjects] = useState(projects);
  const [editableSkills, setEditableSkills] = useState(skills);
  const [editableCertifications, setEditableCertifications] = useState(certifications);
  const [editableAchievements, setEditableAchievements] = useState(achievements);
  const [editableReferences, setEditableReferences] = useState(references);

  const downloadPDF = () => {
    const element = document.getElementById('resume-container');
    html2pdf().from(element).save();
  };

  return (
    <ChakraProvider>
      <Container maxW="container.md" py="8" id="resume-container">
        <Heading as="h1" mb="4">
          <Editable defaultValue={editablePersonalInfo.name} onChange={(value) => setEditablePersonalInfo({ ...editablePersonalInfo, name: value })}>
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Heading>
        <Text mb="4">
          <Editable defaultValue={editablePersonalInfo.address} onChange={(value) => setEditablePersonalInfo({ ...editablePersonalInfo, address: value })}>
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Text>
        <Text mb="4">
          <Editable defaultValue={editablePersonalInfo.email} onChange={(value) => setEditablePersonalInfo({ ...editablePersonalInfo, email: value })}>
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Text>
        <Text mb="4">
          <Editable defaultValue={editablePersonalInfo.phone} onChange={(value) => setEditablePersonalInfo({ ...editablePersonalInfo, phone: value })}>
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Text>
        <Text mb="4">
          <Editable defaultValue={editablePersonalInfo.linkedin} onChange={(value) => setEditablePersonalInfo({ ...editablePersonalInfo, linkedin: value })}>
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Text>

        <Divider my="6" />

        <Heading as="h2" mb="4">Summary</Heading>
        <Text mb="4">
          <Editable defaultValue={editableSummary} onChange={(value) => setEditableSummary(value)}>
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Text>

        <Divider my="6" />

        <Heading as="h2" mb="4">Experience</Heading>
        <UnorderedList mb="4">
          {editableExperience.map((exp, index) => (
            <ListItem key={index}>
              <Editable defaultValue={exp.position} onChange={(value) => {
                const updatedExperience = [...editableExperience];
                updatedExperience[index].position = value;
                setEditableExperience(updatedExperience);
              }}>
                <EditablePreview />
                <EditableInput />
              </Editable> at <Editable defaultValue={exp.company} onChange={(value) => {
                const updatedExperience = [...editableExperience];
                updatedExperience[index].company = value;
                setEditableExperience(updatedExperience);
              }}>
                <EditablePreview />
                <EditableInput />
              </Editable> ({exp.date})
            </ListItem>
          ))}
        </UnorderedList>

        {/* Remaining sections */}
        {/* ... */}

        <Button colorScheme="blue" onClick={downloadPDF}>Download PDF</Button>
      </Container>
    </ChakraProvider>
  );
};

export default Resume;
