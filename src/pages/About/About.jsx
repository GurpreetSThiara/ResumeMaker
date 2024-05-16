import { Button, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Container maxW="container.lg" py="12">
    <Heading as="h1" size="xl" mb="6" color={'gray'}>
      Welcome to FRB Free Resume Builder: Crafting Your Path to Success
    </Heading>
    <Text fontSize="lg" mb="6">
      Are you ready to embark on your career journey with confidence and professionalism? Look no further than FRB Free Resume Builder, your go-to destination for creating impressive resumes that get you noticed by recruiters and employers. With our intuitive platform and powerful tools, you can craft professional resumes effortlessly and for free. Join the thousands of users who have already transformed their career prospects with FRB Free Resume Builder!
    </Text>
    <Heading as="h2" size="lg" mt="8" mb="4">
      Unlock Your Potential with FRB Free Resume Builder
    </Heading>
    <Text fontSize="md" mb="6">
      In today's competitive job market, a well-crafted resume is your ticket to success. At FRB Free Resume Builder, we're dedicated to providing you with the resources you need to stand out from the crowd. Whether you're a recent graduate, a seasoned professional, or someone looking to make a career change, our platform empowers you to create resumes that highlight your skills, experiences, and achievements effectively.
    </Text>
    <Heading as="h3" size="md" mt="8" mb="4">
      Why Choose FRB Free Resume Builder?
    </Heading>
    <Text fontSize="md" mb="6">
      <ol>
        <li><strong>Cost-Free Convenience:</strong> Say goodbye to expensive subscription fees and hidden charges. FRB Free Resume Builder is completely free to use, giving you unlimited access to our suite of resume-building tools without any financial burden.</li>
        <li><strong>User-Friendly Interface:</strong> We believe that creating a resume should be simple and straightforward. That's why we've designed our platform with an intuitive interface that guides you through the resume-building process step by step. Even if you're not tech-savvy, you can create professional resumes with ease.</li>
        <li><strong>SEO-Optimized Content:</strong> In today's digital age, optimizing your resume for search engines is essential. With FRB Free Resume Builder, you can rest assured that your resume will be SEO-friendly, ensuring that it ranks highly in online searches and attracts the attention of recruiters and employers.</li>
        <li><strong>Cutting-Edge Technology:</strong> Our platform is built using the latest technologies, including React, Vite, and Chakra UI, to deliver a seamless user experience with lightning-fast performance and sleek design. With FRB Free Resume Builder, you can create polished resumes that impress at first glance.</li>
        <li><strong>Tailored Customization:</strong> Your resume should reflect your unique personality and professional brand. That's why we offer a wide range of customization options, allowing you to choose from various templates, fonts, colors, and layouts to create a resume that speaks to who you are as a professional.</li>
        <li><strong>Privacy and Security:</strong> We understand the importance of safeguarding your personal information. That's why we prioritize privacy and security on our platform. Your data is never stored, and all communication is encrypted to ensure the highest level of protection.</li>
      </ol>
    </Text>
    <Button colorScheme="blue" size="lg" mt="8">Start Building Your Future Today!</Button>
  </Container>
  )
}

export default About
