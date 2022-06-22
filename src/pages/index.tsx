import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useWindowSize } from "../utils/useWindowSize";

export default function Index() {
  const size = useWindowSize();

  function Header() {
    return (
      <Flex w="100%" justify="space-between" zIndex="2" p="5" align="center">
        <Image
          src="/logo.png"
          style={{
            width: size.width > 1000 ? 300 : 150,
            height: size.width > 1000 ? 77 : 77 / 2 + 5,
          }}
        />
        <Flex flexDir={size.width > 700 ? "row" : "column"}>
          <Flex
            style={{
              height: 40,
            }}
            borderRadius="15"
            bg="#898989"
            px="10"
            justify="center"
            align="center"
          >
            <Text color="#FFF">Português</Text>
          </Flex>
          {size.width > 800 && (
            <Flex
              ml="2"
              style={{
                height: 40,
              }}
              borderRadius="15"
              bg="#082FF0"
              px="10"
              justify="center"
              align="center"
            >
              <Text color="#FFF">Fale conosco</Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    );
  }

  function Functions() {
    return (
      <Flex flexDir="column" justify="space-between" w="100%" h="100vh">
        <Image
          objectFit="cover"
          objectPosition="right"
          w="100%"
          h="100vh"
          src="/insideIndustry1.png"
          position="absolute"
        />
        <Header />
        <Flex
          mb="7vh"
          flexDir="column"
          zIndex="1"
          p="5"
        >
          <Text
            fontFamily="Space Grotesk"
            fontSize={size.width > 1000 ? "5xl" : "3xl"}
          >
            Funcionalidades e indicadores
          </Text>
          <Text
            fontFamily="Space Grotesk"
            maxW={size.width > 1000 && (size.width / 10) * 7}
            fontSize={size.width > 1000 ? "5xl" : "3xl"}
          >
            que vão além das expectativas
          </Text>
          <Flex>
            <Text
              fontFamily="Space Grotesk"
              fontSize={size.width > 1000 ? "2xl" : "xl"}
            >
              Tudo o que sua
            </Text>
            <Text
              ml="1.5"
              fontFamily="Space Grotesk"
              fontWeight="bold"
              fontSize={size.width > 1000 ? "2xl" : "xl"}
            >
              empresa
            </Text>
            <Text
              ml="1.5"
              fontFamily="Space Grotesk"
              fontSize={size.width > 1000 ? "2xl" : "xl"}
            >
              precisa e muito mais.
            </Text>
          </Flex>
          {size.width < 800 && (
            <Flex
              mt="4"
              style={{
                height: 50,
                width: 300,
              }}
              borderRadius="15"
              bg="#082FF0"
              px="10"
              justify="center"
              align="center"
            >
              <Text color="#FFF">Fale conosco</Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex w="100%">
      <Functions />
    </Flex>
  );
}
