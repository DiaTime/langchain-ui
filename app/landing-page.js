"use client";
import { Inter } from "next/font/google";
import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Image
} from "@chakra-ui/react";
import { TbBrandGithub, TbLink } from "react-icons/tb";
import { signIn } from "next-auth/react";
import UseCasePreview from "@/components/UseCasePreview";

const inter = Inter({ subsets: ["latin"] });

export default function LandingPage() {
  const backgroundColor = useColorModeValue("#131416", "#131416");
  const buttonColorScheme = useColorModeValue("blackAlpha", "whiteAlpha");
  const buttonBackgroundColor = useColorModeValue("black", "white");
  const fontColor = useColorModeValue("white", "white");

  return (
    <div style={{backgroundColor: "#171923"}}>
      <Flex
      height="100vh"
      className={inter.className}
      >
      <Container maxWidth="7xl">
        <HStack paddingY={6} justifyContent="space-between">
          <Text as="strong" color={fontColor} fontSize="lg">
            LangChain
            <Text
              as="span"
              bgGradient="linear(to-l, #20BDFF, #85D8CE)"
              backgroundClip="text"   
            >
              UI
            </Text>
          </Text>
          <HStack spacing={4}>
            <Link
              href="https://github.com/homanp/langchain-ui"
              color={fontColor}
            >
              Github
            </Link>
            <Link
              color={fontColor}
              href="https://github.com/homanp/langchain-ui/blob/main/.github/CONTRIBUTING.md"
            >
              Contribute
            </Link>
            <Link
              color={fontColor}
              href="https://github.com/homanp/langchain-ui#getting-started"
            >
              Docs
            </Link>
          </HStack>
        </HStack>
        <Stack
          alignItems="center"
          justifyContent="center"
          paddingY="200px"
          spacing={8}
        >
          <Heading
            fontSize="7xl"
            fontWeight={900}
            textAlign="center"
            bgGradient='linear(to-b, #FFFFFF, #87B992)'
            bgClip='text'
          >
            Powerful Chat AI <br></br> for your own use case{" "}
            <Text>
              — without dev effort
            </Text>
          </Heading>
          <Stack>
            <Button
              leftIcon={<Icon as={TbBrandGithub} />}
              colorScheme={buttonColorScheme}
              backgroundColor={buttonBackgroundColor}
              size="sm"
              onClick={() => signIn("github", { callbackUrl: "/app" })}
            >
              Sign in with Github
            </Button>
            <HStack spacing={1} alignItems="center" justifyContent="center">
              <Icon as={TbLink} fontSize="xs" color="gray.500" />
              <Link
                fontSize="xs"
                href="https://github.com/homanp/langchain-ui"
                target="_blank"
                color="gray.500"
              >
                Contribute on Github
              </Link>
            </HStack>
          </Stack>
        </Stack>        
      </Container>
    </Flex>
    <Container maxW='70%'>
          <HStack maxW='100%'>
            <VStack width="33.3%">
             <Text
              fontWeight="bold"
              fontSize="20px"
              color="#000000"
              textAlign="center"
              bgColor="green.300"
              borderRadius="20px"
              width="40px"
              height="40px"
              paddingTop="5px"
             >
              1
              </Text>
              <Text
                fontWeight="bold"
                fontSize="30px"
                color="#FFFFFF"
                textAlign="center"
              >
                Build
              </Text>
              <Text
                lineHeight="1.5"
                fontWeight="regular"
                fontSize="16px"
                color="whiteAlpha.900"
                width="237px"
                textAlign="center"
              >
                Choose LLM model, create prompt templates for your own use cases
              </Text>
              <Image 
                boxSize="285px"
                src="/build.svg" 
                alt='build prompt template'
                />
            </VStack>

            <VStack width="33.3%">
             <Text
              fontWeight="bold"
              fontSize="20px"
              color="#000000"
              textAlign="center"
              bgColor="green.300"
              borderRadius="20px"
              width="40px"
              height="40px"
              paddingTop="5px"
             >
              2
              </Text>
              <Text
                fontWeight="bold"
                fontSize="30px"
                color="#FFFFFF"
                textAlign="center"
              >
                Integrate
              </Text>
              <Text
                lineHeight="1.5"
                fontWeight="regular"
                fontSize="16px"
                color="whiteAlpha.900"
                width="237px"
                textAlign="center"
              >
                Bring your own data source, e.g. csv, pdf, figma... as well as powerful plugins
              </Text>
              <Image 
                boxSize="285px"
                src="/integrate.svg" 
                alt='bring data source to chat ai'
                />
            </VStack>

            <VStack width="33.3%">
             <Text
              fontWeight="bold"
              fontSize="20px"
              color="#000000"
              textAlign="center"
              bgColor="green.300"
              borderRadius="20px"
              width="40px"
              height="40px"
              paddingTop="5px"
             >
              3
              </Text>
              <Text
                fontWeight="bold"
                fontSize="30px"
                color="#FFFFFF"
                textAlign="center"
              >
                Start
              </Text>
              <Text
                lineHeight="1.5"
                fontWeight="regular"
                fontSize="16px"
                color="whiteAlpha.900"
                width="237px"
                textAlign="center"
              >
                That’s it, no deployment needed, start using your chat AI right away!
              </Text>
              <Image 
                boxSize="285px" 
                src="/chat.svg" 
                alt='start chat'
                />
            </VStack>
          </HStack>
          <UseCasePreview />
        </Container>
    </div>    
  );
}
