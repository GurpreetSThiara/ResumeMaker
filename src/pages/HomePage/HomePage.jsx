// import { Box, Flex, Image } from '@chakra-ui/react'
// import React from 'react'
// import { useNavigate } from 'react-router'


// const HomePage = () => {
//     const paths = ['src/assets/modres.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png']
//     const navigate = useNavigate()
//   return (
//     <Flex justifyContent={{sm:'center',md:'start'}} p={'16px'} flexWrap={'wrap'} gap={'2rem'} w={'full'} h={'full'} >
//         {paths.map((item , index)=>{
//             return <Box   boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"  cursor={'pointer'} onClick={()=>navigate('/modern/create')} w={'200px'} h={'300px'} key={index}>
//                   <Image borderRadius="8px"  objectFit={'contain'} h={'full'} w={'full'} src={item}/>
//             </Box>
//         })}


      
//     </Flex>
//   )
// }

// export default HomePage
import React from 'react';
import {
  Flex,
  Heading,
  Text,
  Button,
  Box,

  Stack,
  Image,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import { FaBars, FaCheckCircle } from 'react-icons/fa';
import bgImage from './../../assets/top-view-agendas-succlent-plant.jpg';
import IntroModal from '../../components/IntroSlider';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import GoogleAd from '../../components/ads/GoogleAd';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const Navbar = ({ toggleMenu }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        width="100%"
        zIndex="999"
        position="re"
        top="0"
        bg="blue.900"
        color="white"
      >
        <Flex align="center" mr={5}>
          <Image src="/resugen-logo.png" alt="ResuGen Logo" width="100px" />
        </Flex>
        <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
          <FaBars />
        </Box>
        <Box
          display={{ base: isMenuOpen ? 'block' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            align="center"
          >
            <Link href="#" color="white" fontSize="lg">Home</Link>
            <Link href="#" color="white" fontSize="lg">About</Link>
            <Link href="#" color="white" fontSize="lg">Services</Link>
            <Link href="#" color="white" fontSize="lg">Contact</Link>
          </Stack>
        </Box>
      </Flex>
    );
  };
  
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh"
      padding="0"
      bg={'black'}
    >
        
        {/* <IntroModal/> */}
      <HeroSection />
   
      <StatisticsSection />
      
      <PricingSection />
      <Box id="faq">
      <FAQSection />
      </Box>
      <BlogSection />
      <SupportSection />
      <Footer />
    </Flex>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Box position="relative" textAlign="center" mb="12" p={'0px'} w={'98vw'}>

      {/* Background image */}
     

      {/* Content */}
      <Box zIndex="10" position="relative" >
        <Image src="/resugen-logo.png" alt="ResuGen Logo" width="200px" mx="auto" />
        <Heading color={'gray'} as="h1" size="2xl" mt="4" mb="2">
          Your Free Online Resume Builder
        </Heading>
        <Text as={'h2'} fontSize="xl" mb="4">
          Create professional resumes effortlessly!
        </Text>
        <Button onClick={()=>navigate('/templates')} colorScheme="blue" size="lg" mb="4">
          Get Started
        </Button>
        <Text as={'h3'} fontSize="lg">
         No Need to SignUP{" "}
          <Link color="blue.500" to="/templates">
            JUST GO OVER THERE
          </Link>
        </Text>
      </Box>
      <Box
        position="absolute"
     
        m={'0px'}
       w={'100%'}
        h={'100vh'}
        opacity={'1'}
        overflow={'hidden'}
        zIndex="-1"
     
 
       
        backgroundSize=""
    
        
      >
        <Image zIndex={"0"}  src={bgImage} h={'full'} w={'full'} objectFit={'cover'}/>
      </Box>
    </Box>
  );
};

const FeaturesSection = () => {
  return (
    <Stack spacing="8" mt="12" width="100%" maxWidth="800px" textAlign="center">
      <Heading as="h2" size="xl" mb="4">Why Choose ResuGen?</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8">
        <FeatureItem icon={<FaCheckCircle />} text="Free, Unlimited Usage" />
        <FeatureItem icon={<FaCheckCircle />} text="User-Friendly Interface" />
        <FeatureItem icon={<FaCheckCircle />} text="SEO-Optimized for Visibility" />
        <FeatureItem icon={<FaCheckCircle />} text="Professional Templates" />
        <FeatureItem icon={<FaCheckCircle />} text="Instant Download in PDF Format" />
        <FeatureItem icon={<FaCheckCircle />} text="Privacy and Security Guaranteed" />
      </SimpleGrid>
    </Stack>
  );
};

const FeatureItem = ({ icon, text }) => {
  return (
    <Flex align="center" justify="center">
      <Box as={icon} color="green.500" fontSize="xl" mr="2" />
      <Text>{text}</Text>
    </Flex>
  );
};

const StatisticsSection = () => {
  return (
    <Box mt="12" textAlign="center">
      <Heading as="h2" size="xl" mb="4">Our Statistics</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8">
        <StatisticCard value="100K+" label="Resumes Created" />
        <StatisticCard value="95%" label="Satisfied Users" />
        <StatisticCard value="50+" label="Templates Available" />
      </SimpleGrid>
    </Box>
  );
};

const StatisticCard = ({ value, label }) => {
  return (
    <Box p="6" borderWidth="1px" borderRadius="lg">
      <Heading as="h3" size="lg" mb="4">{value}</Heading>
      <Text fontSize="xl">{label}</Text>
    </Box>
  );
};

const TestimonialsSection = () => {
  return (
    <Box mt="12" textAlign="center">
      <Heading as="h2" size="xl" mb="4">What Our Users Say</Heading>
      <Text fontSize="lg" mb="4">ResuGen helped me land my dream job! Creating a professional resume has never been easier.</Text>
      <Text fontSize="lg" fontWeight="bold">- John Doe, Software Engineer</Text>
    </Box>
  );
};
const PricingSection = () => {
  return (
    <Box mt="12" textAlign="center">
      <Heading as="h2" size="xl" mb="4">Our Pricing Plans</Heading>
      <Text fontSize="lg" mb="4">Hooray! No Pricing Plans Here - Everything's Free!</Text>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing="8">
        <FunnyEmptyBox message="Nothing to Pay!" />
        <FunnyEmptyBox message="Absolutely Zero Dollars!" />
        <FunnyEmptyBox message="Free as a Bird!" />
        <FunnyEmptyBox message="Cost: Happiness!" />
      </SimpleGrid>
    </Box>
  );
};

const FunnyEmptyBox = ({ message }) => {
  let description = "";
  switch (message) {
    case "Nothing to Pay!":
      description = "You heard it right, it's all on the house!";
      break;
    case "Absolutely Zero Dollars!":
      description = "The best things in life are free, including our service!";
      break;
    case "Free as a Bird!":
      description = "Fly high with our free pricing!";
      break;
    case "Cost: Happiness!":
      description = "Payment accepted in smiles and good vibes only!";
      break;
    default:
      description = "No hidden fees, no tricks, just pure awesomeness!";
  }

  return (
    <Box p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Heading as="h3" size="lg" mb="4">{message}</Heading>
      <Text>{description}</Text>
    </Box>
  );
};

// const PricingSection = () => {
//   return (
//     <Box mt="12" textAlign="center">
//       <Heading as="h2" size="xl" mb="4">Our Pricing Plans</Heading>
//       <SimpleGrid columns={{ base: 1, md: 4 }} spacing="8">
//         <PricingCard title="Basic" price="$0" features={["1 Resume Template", "Limited Access"]} />
//         <PricingCard title="Standard" price="$9.99/mo" features={["Unlimited Templates", "Full Access"]} />
//         <PricingCard title="Pro" price="$19.99/mo" features={["Priority Support", "Customization Options"]} />
//         <PricingCard title="Enterprise" price="Contact Us" features={["Custom Solutions", "Dedicated Account Manager"]} />
//       </SimpleGrid>
//     </Box>
//   );
// };

// const PricingCard = ({ title, price, features }) => {
//   return (
//     <Box p="6" borderWidth="1px" borderRadius="lg">
//       <Heading as="h3" size="lg" mb="4">{title}</Heading>
//       <Text fontSize="xl" fontWeight="bold" mb="4">{price}</Text>
//       <Stack spacing="2">
//         {features.map((feature, index) => (
//           <Text key={index}>{feature}</Text>
//         ))}
//       </Stack>
//       <Button colorScheme="blue" mt="4">Choose Plan</Button>
//     </Box>
//   );
// };

const FAQSection = () => {
  return (
    <Box mt="12" textAlign="center">
      <Heading as="h2" size="xl" mb="4">Frequently Asked Questions</Heading>
      <Stack spacing="4">
        <FAQItem question="How do I create a resume?" answer="Simply sign up, choose a template, and fill in your information." />
        <FAQItem question="Can I download my resume?" answer="Yes, you can download your resume in PDF format." />
        <FAQItem question="Is my information secure?" answer="Yes, we prioritize the security and privacy of your data." />
      </Stack>
    </Box>
  );
};

const FAQItem = ({ question, answer }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p="4">
      <Text fontSize="lg" fontWeight="bold" mb="2">{question}</Text>
      <Text>{answer}</Text>
    </Box>
  );
};

const BlogSection = () => {
  return (
    <Box mt="12" textAlign="center">
      <Heading as="h2" size="xl" mb="4">Latest from Our Blog</Heading>
      <Stack spacing="8" direction={{ base: "column", md: "row" }} justify="center">
        <BlogCard title="10 Tips for Writing a Winning Resume" />
        <GoogleAd/>
        {/* <BlogCard title="The Importance of Tailoring Your Resume" /> */}
        <BlogCard title="How to Ace...How to Ace Your Job Intecvdvrview" />
      </Stack>
    </Box>
  );
};

const BlogCard = ({ title }) => {
  return (
    <Box p="6" borderWidth="1px" borderRadius="lg" width={{ base: "100%", md: "300px" }}>
      <Heading as="h3" size="lg" mb="4">{title}</Heading>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula nulla et turpis consequat, ac...</Text>
      <Button colorScheme="blue" mt="4">Read More</Button>
    </Box>
  );
};

const SupportSection = () => {
  return (
    <Box mt="12" textAlign="center">
      <Heading as="h2" size="xl" mb="4">Customer Support</Heading>
      <Text fontSize="lg" mb="4">Need help or have questions? Our support team is here to assist you!</Text>
      <Button colorScheme="blue" size="lg" mb="4">Contact Support</Button>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box mt="12" textAlign="center">
      <Divider mb="8" />
      <Text>&copy; 2024 ResuGen. All rights reserved.</Text>
      <Text>
        Made with ❤️ by <Link color="blue.500" href="https://yourwebsite.com">Your Company</Link>
      </Text>
    </Box>
  );
};

export default HomePage;

