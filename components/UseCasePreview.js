import { Box, VStack, HStack, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const useCases = [
  {
    title: "Use Case 1",
    description: "This is the detailed description for Use Case 1.",
  },
  {
    title: "Use Case 2",
    description: "This is the detailed description for Use Case 2.",
  },
  {
    title: "Use Case 3",
    description: "This is the detailed description for Use Case 3.",
  },
];

const UseCasePreview = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleUseCaseClick = (index) => {
    console.log("Button clicked");
    setSelectedIndex(index);
  };

  const test = () => {
    alert("yooo");
  }

  return (
    <HStack spacing={4} alignItems="flex-start">
      <VStack spacing={2}>
        {useCases.map((useCase, index) => (          
            <Button
                key={index}
                onClick={test}
                variant={selectedIndex === index ? "solid" : "outline"}
          >
            {useCase.title}
          </Button>
        ))}
      </VStack>
      <Box>
        <Text fontWeight="bold">{useCases[selectedIndex].title}</Text>
        <Text>{useCases[selectedIndex].description}</Text>
      </Box>
    </HStack>
  );
};

export default UseCasePreview;
