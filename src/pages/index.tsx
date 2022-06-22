import { Flex, Icon, Text, Image as ChakraImage } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { useWindowSize } from "../utils/useWindowSize";

import { BiChevronDown } from "react-icons/bi";

export default function Index() {
  const size = useWindowSize();

  const [language, setLanguage] = useState<"English" | "Português">(
    "Português"
  );

  function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Flex
        w="100%"
        bg="rgba(0, 0, 0, 0.2)"
        position="fixed"
        justify="space-between"
        zIndex="2"
        p="5"
        align="center"
      >
        <Flex
          backgroundImage="/logo.png"
          backgroundSize="cover"
          width={size.width > 1000 ? 270 : 150}
          height={size.width > 1000 ? 61 : 35}
          backgroundRepeat="no-repeat"
        />
        <Flex flexDir={size.width > 700 ? "row" : "column"}>
          <Flex
            flexDir="column"
            onClick={() => {
              if (isOpen) {
                setIsOpen(false);
              } else {
                setIsOpen(true);
              }
            }}
            top={size.width < 1000 && "5"}
            position="absolute"
            right={size.width > 1000 ? "44" : "4"}
            cursor="pointer"
            style={{
              height: isOpen ? 85 : 40,
            }}
            borderRadius="15"
            bg={isOpen ? "#D8D8D8" : "#898989"}
          >
            <Flex
              cursor="pointer"
              style={{
                height: 40,
              }}
              px="6"
              bg="#898989"
              borderRadius="15"
              justify="center"
              align="center"
            >
              <Text color="#FFF" fontFamily="Space Grotesk">
                {language}
              </Text>
              <Text ml="2" color="#FFF">
                {language === "English" ? "🇺🇸" : "🇧🇷"}
              </Text>
            </Flex>
            {isOpen && (
              <Flex
                _hover={{
                  opacity: 0.8,
                }}
                onClick={() => {
                  if (language === "English") {
                    setLanguage("Português");
                    setIsOpen(false);
                  } else {
                    setLanguage("English");
                    setIsOpen(false);
                  }
                }}
                cursor="pointer"
                style={{
                  height: 40,
                }}
                px="6"
                borderRadius="15"
                justify="center"
                align="center"
              >
                <Text fontFamily="Space Grotesk" color="#333">
                  {language === "English" ? "Português" : "English"}
                </Text>
                <Text ml="2" color="#FFF">
                  {language === "Português" ? "🇺🇸" : "🇧🇷"}
                </Text>
              </Flex>
            )}
          </Flex>
          {size.width > 800 && (
            <Flex
              ml="2"
              style={{
                height: 40,
              }}
              cursor="pointer"
              borderRadius="15"
              bg="#082FF0"
              px="6"
              justify="center"
              align="center"
            >
              <Text fontFamily="Space Grotesk" color="#FFF">
                Fale conosco
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    );
  }

  function Functions() {
    return (
      <Flex
        flexDir="column"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="right"
        backgroundImage="/insideIndustry1.png"
        justify="space-between"
        w="100vw"
        h="100vh"
      >
        <Flex />
        <Flex
          h="100vh"
          justify="center"
          mb={size.width < 500 ? "12vh" : "7vh"}
          flexDir="column"
          zIndex="1"
          p={size.width > 1000 ? "10" : "5"}
        >
          <Text
            fontFamily="Space Grotesk"
            fontSize={
              size.width > 1000 ? "5xl" : size.width > 700 ? "3xl" : "xl"
            }
          >
            Funcionalidades e indicadores
          </Text>
          <Text
            fontFamily="Space Grotesk"
            maxW={size.width > 1000 && (size.width / 10) * 7}
            fontSize={
              size.width > 1000 ? "5xl" : size.width > 700 ? "3xl" : "xl"
            }
          >
            que vão além das expectativas
          </Text>
          <Flex>
            <Text
              fontFamily="Space Grotesk"
              fontSize={
                size.width > 1000 ? "2xl" : size.width > 700 ? "xl" : "sm"
              }
            >
              Tudo o que sua
            </Text>
            <Text
              ml={size.width > 700 ? "1.5" : "1"}
              fontFamily="Space Grotesk"
              fontWeight="bold"
              fontSize={
                size.width > 1000 ? "2xl" : size.width > 700 ? "xl" : "sm"
              }
            >
              empresa
            </Text>
            <Text
              ml={size.width > 700 ? "1.5" : "1"}
              fontFamily="Space Grotesk"
              fontSize={
                size.width > 1000 ? "2xl" : size.width > 700 ? "xl" : "sm"
              }
            >
              precisa e muito mais.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  function Board() {
    return (
      <Flex
        flexDir="column"
        objectFit="cover"
        backgroundPosition="right"
        backgroundImage="/board1.png"
        justify="space-between"
        w="100%"
        h="100vh"
      >
        <Flex
          mt="10vh"
          h="100vh"
          justify="flex-end"
          align="center"
          flexDir="column"
          zIndex="1"
          p="5"
        >
          <Flex>
            <Text
              fontFamily="Space Grotesk"
              fontSize={size.width > 700 ? "3xl" : "md"}
            >
              Sistema que potencializa
            </Text>
            <Text
              ml={size.width > 700 ? "2" : "1"}
              fontFamily="Space Grotesk"
              fontWeight="bold"
              fontSize={size.width > 700 ? "3xl" : "md"}
            >
              grandes empresas
            </Text>
          </Flex>
          <Flex
            mb="20"
            maxW={800}
            backgroundSize="contain"
            backgroundImage="/cases.png"
            backgroundRepeat="no-repeat"
            h="50%"
            w="100%"
            mt={size.width > 700 ? "20" : "10"}
          />
        </Flex>
      </Flex>
    );
  }

  function Indicators() {
    return (
      <Flex
        flexDir="column"
        backgroundPosition="right"
        backgroundImage="/indicator1.png"
        w="100%"
        justify="center"
        align="center"
      >
        <Flex
          maxW={1000}
          mx="auto"
          flexDir="column"
          w="100vw"
          justify="center"
          align="center"
        >
          <Text
            mt="12"
            w="100%"
            textAlign="center"
            fontFamily="Space Grotesk"
            fontWeight="bold"
            fontSize={size.width > 700 ? "3xl" : "2xl"}
          >
            Indicadores personalizados para sua necessidade
          </Text>
          <Flex
            mt="20"
            mb="10"
            flexDir={size.width > 1000 ? "row" : "column"}
            w="100%"
            justify="space-between"
          >
            <Flex flexDir="column" align="center" minW={300}>
              <Text
                color="#FFF"
                ml={size.width > 1000 && -81}
                fontSize="xl"
                fontFamily="Space Grotesk"
              >
                Status de Equipamento
              </Text>
              <ChakraImage
                mt="5"
                src="/indicatorWidget1.png"
                h={"auto"}
                w={size.width > 1000 ? 400 : "60%"}
              />
            </Flex>
            <Flex
              flexDir="column"
              align="center"
              minW={300}
              mt={size.width < 1000 && "10"}
            >
              <Text color="#FFF" fontSize="xl" fontFamily="Space Grotesk">
                Produtos em fila
              </Text>
              <ChakraImage
                mt="5"
                src="/indicatorWidget2.png"
                h={"auto"}
                w={size.width > 1000 ? 400 : "60%"}
              />
            </Flex>
            <Flex
              flexDir="column"
              align="center"
              minW={300}
              mt={size.width < 1000 && "10"}
            >
              <Text color="#FFF" fontSize="xl" fontFamily="Space Grotesk">
                Efetividade do Equipamento
              </Text>
              <ChakraImage
                mt="5"
                src="/indicatorWidget3.png"
                h={"auto"}
                w={size.width > 1000 ? 400 : "60%"}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  function PlugPlay() {
    return (
      <Flex
        w="100%"
        h={size.width > 1000 ? "100vh" : size.width > 700 ? "60vh" : "40vh"}
      >
        <Flex
          mx="auto"
          w="100%"
          h={size.width > 1000 ? "100vh" : "40vh"}
          flexDir={size.width < 1000 ? "column" : "row"}
        >
          <Flex
            zIndex="2"
            flexDir="column"
            mx={size.width > 1000 ? "10" : "5"}
            h="100%"
            justify="center"
            py="auto"
          >
            <Text
              fontFamily="Space Grotesk"
              color="#FFF"
              fontSize={
                size.width > 1000 ? "6xl" : size.width > 700 ? "6xl" : "4xl"
              }
              w="100%"
              textAlign={size.width > 1000 ? "left" : "left"}
              fontWeight="bold"
            >
              Interface de
            </Text>
            <Text
              color="#FFF"
              fontSize={
                size.width > 1000 ? "6xl" : size.width > 700 ? "6xl" : "4xl"
              }
              w="100%"
              textAlign={size.width > 1000 ? "left" : "left"}
              fontWeight="bold"
              fontFamily="Space Grotesk"
            >
              fácil utilização
            </Text>
            <Text
              fontFamily="Space Grotesk"
              mt="2"
              color="#FFF"
              fontSize={
                size.width > 1000 ? "xl" : size.width > 700 ? "lg" : "md"
              }
              w={size.width > 700 ? "45%" : "70%"}
              textAlign={size.width > 1000 ? "left" : "left"}
            >
              Tenha acesso a módulos com indicadores que irão elevar ainda mais
              a produtividade de sua empresa.{" "}
            </Text>
          </Flex>
          <Flex
            backgroundImage="/caseTablet.png"
            backgroundSize="cover"
            position="absolute"
            h={size.width > 1000 ? "100vh" : size.width > 700 ? "60vh" : "40vh"}
            w="100%"
          />
        </Flex>
      </Flex>
    );
  }

  function Collect() {
    return (
      <Flex
        w="100%"
        maxW={1000}
        mx="auto"
        flexDir={size.width > 1000 ? "row" : "column"}
        justify="space-between"
        py="20"
      >
        <Flex
          flexDir="column"
          w={size.width > 1000 ? "99%" : "100%"}
          pl={size.width < 1000 && "5"}
        >
          <Text
            fontFamily="Space Grotesk"
            fontSize={
              size.width > 1000 ? "5xl" : size.width > 700 ? "5xl" : "4xl"
            }
          >
            Coleta de dados
          </Text>
          <Text
            fontFamily="Space Grotesk"
            fontSize={
              size.width > 1000 ? "5xl" : size.width > 700 ? "5xl" : "4xl"
            }
          >
            de baixo custo.
          </Text>
          <Flex flexDir="column">
            <Text
              fontFamily="Space Grotesk"
              mt="10"
              fontSize={
                size.width > 1000 ? "xl" : size.width > 700 ? "lg" : "lg"
              }
            >
              Captação de dados utilizando Iot e Tablets.
            </Text>
            <Text
              fontFamily="Space Grotesk"
              mt="2"
              fontSize={
                size.width > 1000 ? "xl" : size.width > 700 ? "lg" : "lg"
              }
            >
              Com nosso modo Offline, é possível fazer a coleta sem acesso à
              rede.
            </Text>
            <Text
              fontFamily="Space Grotesk"
              mt="2"
              fontSize={
                size.width > 1000 ? "xl" : size.width > 700 ? "lg" : "lg"
              }
            >
              Utilizamos o sistema TrustFactory para integridade dos dados.
            </Text>
          </Flex>
        </Flex>
        <Flex
          backgroundImage="/tablet2.png"
          backgroundPosition="cover"
          w="100%"
          mx="auto"
          mt={size.width < 1000 && "10"}
          backgroundRepeat="no-repeat"
          h="39vh"
        />
      </Flex>
    );
  }

  function IlimitedFunctions() {
    return (
      <Flex flexDir="column" bg="#1E1E1F" py="20" pl={size.width < 1000 && "5"}>
        <Flex flexDir="column" w="100%" maxW={1000} mx="auto">
          <Text
            fontFamily="Space Grotesk"
            color="#FFF"
            fontSize={
              size.width > 1000 ? "6xl" : size.width > 700 ? "6xl" : "4xl"
            }
            w="100%"
            textAlign={size.width > 1000 ? "left" : "left"}
          >
            Funcionalidades para usar de
          </Text>
          <Text
            fontFamily="Space Grotesk"
            color="#FFF"
            fontWeight="bold"
            fontSize={
              size.width > 1000 ? "6xl" : size.width > 700 ? "6xl" : "4xl"
            }
            w="100%"
            textAlign={size.width > 1000 ? "left" : "left"}
          >
            forma ilimitada
          </Text>
        </Flex>
        <Flex
          flexDir={size.width > 1000 ? "row" : "column"}
          justify="space-between"
          w="100%"
          maxW={1000}
          mx="auto"
          mt="20"
        >
          <Flex flexDir="column">
            <Text
              fontFamily="Space Grotesk"
              color="#FFF"
              fontSize={
                size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
              }
              w="100%"
              textAlign={size.width > 1000 ? "left" : "left"}
              fontWeight="bold"
            >
              Gestão de Performance
            </Text>
            <Flex flexDir="column" mt="5" pl="2" borderLeft="5px solid blue">
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                OEE
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Setup
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Manutenção
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Pareto
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Linha do tempo
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Mão de obra
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Indicadores personalizados
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Relatório
              </Text>
            </Flex>
            <Text
              mt="10"
              color="#FFF"
              fontSize={
                size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
              }
              w="100%"
              textAlign={size.width > 1000 ? "left" : "left"}
              fontWeight="bold"
              fontFamily="Space Grotesk"
            >
              Gestão de Fluxo
            </Text>
            <Flex flexDir="column" mt="5" pl="2" borderLeft="5px solid blue">
              <Text
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Posição de lotes
              </Text>
              <Text
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
                fontFamily="Space Grotesk"
              >
                Status em tempo real
              </Text>
              <Text
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
                fontFamily="Space Grotesk"
              >
                Progresso
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Tempo de espera
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Desvio de rota
              </Text>
              <Text
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                fontFamily="Space Grotesk"
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Visualização em lista
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Detalhamento de lote
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Follow me
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                WIP
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Lead Time
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                FIFO
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Gargalo
              </Text>
            </Flex>
          </Flex>
          <Flex flexDir="column" mt={size.width < 1000 && "10"}>
            <Text
              color="#FFF"
              fontSize={
                size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
              }
              w="100%"
              textAlign={size.width > 1000 ? "left" : "left"}
              fontWeight="bold"
              fontFamily="Space Grotesk"
            >
              Gestão de Ritmo
            </Text>
            <Flex flexDir="column" mt="5" pl="2" borderLeft="5px solid blue">
              <Text
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
                fontFamily="Space Grotesk"
              >
                Estoque
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Ritmo
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Heat map
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Progresso
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Previsibilidade
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Lead time
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Upload
              </Text>
            </Flex>
            <Text
              mt="10"
              color="#FFF"
              fontSize={
                size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
              }
              w="100%"
              textAlign={size.width > 1000 ? "left" : "left"}
              fontWeight="bold"
              fontFamily="Space Grotesk"
            >
              Gestão à vista
            </Text>
            <Flex flexDir="column" mt="5" pl="2" borderLeft="5px solid blue">
              <Text
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
                fontFamily="Space Grotesk"
              >
                Painel de fluxo
              </Text>
              <Text
                color="#FFF"
                fontFamily="Space Grotesk"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Painel customizado
              </Text>
              <Text
                color="#FFF"
                fontFamily="Space Grotesk"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Painel de manutenção
              </Text>
              <Text
                color="#FFF"
                fontFamily="Space Grotesk"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Linha do tempo
              </Text>
              <Text
                color="#FFF"
                fontFamily="Space Grotesk"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Notificação
              </Text>
            </Flex>
            <Text
              mt="10"
              color="#FFF"
              fontFamily="Space Grotesk"
              fontSize={
                size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
              }
              w="100%"
              textAlign={size.width > 1000 ? "left" : "left"}
              fontWeight="bold"
            >
              Segurança
            </Text>
            <Flex flexDir="column" mt="5" pl="2" borderLeft="5px solid blue">
              <Text
                color="#FFF"
                fontFamily="Space Grotesk"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Audit trail
              </Text>
              <Text
                color="#FFF"
                fontFamily="Space Grotesk"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Gestão de permissão
              </Text>
              <Text
                fontFamily="Space Grotesk"
                color="#FFF"
                fontSize={
                  size.width > 1000 ? "4xl" : size.width > 700 ? "3xl" : "2xl"
                }
                w="100%"
                textAlign={size.width > 1000 ? "left" : "left"}
              >
                Registro de usuário
              </Text>
            </Flex>
            <Text
              fontFamily="Space Grotesk"
              mt={size.width > 1000 ? "auto" : "10"}
              color="#FFF"
              fontWeight="bold"
              fontSize={
                size.width > 1000 ? "3xl" : size.width > 700 ? "3xl" : "xl"
              }
              w="100%"
              textAlign="left"
            >
              & outras funcionalidades que virão!
            </Text>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  function Integrations() {
    return (
      <Flex
        flexDir="column"
        backgroundImage="/integration.png"
        w="100%"
        backgroundSize="cover"
        justify="space-between"
        h="100vh"
        px="10"
        py="20"
      >
        <Flex flexDir="column">
          <Text
            mt="10"
            fontFamily="Space Grotesk"
            fontSize={
              size.width > 1000 ? "5xl" : size.width > 700 ? "5xl" : "4xl"
            }
          >
            Temos integração com vários sistemas de inteligência de negócios,
          </Text>
          <Flex align="center">
            <Text
              fontFamily="Space Grotesk"
              fontWeight="bold"
              fontSize={
                size.width > 1000 ? "5xl" : size.width > 700 ? "5xl" : "3xl"
              }
            >
              APIs, ERPs
            </Text>
            <Text
              fontFamily="Space Grotesk"
              ml="2"
              fontSize={
                size.width > 1000 ? "5xl" : size.width > 700 ? "5xl" : "3xl"
              }
            >
              e outros
            </Text>
          </Flex>
        </Flex>
        <Text
          fontFamily="Space Grotesk"
          fontSize={size.width > 1000 ? "3xl" : size.width > 700 ? "2xl" : "xl"}
        >
          Desempenho ainda mais eficiente com as integrações.
        </Text>
      </Flex>
    );
  }

  function Cargo() {
    return (
      <Flex
        flexDir="column"
        backgroundImage="/cargo1.png"
        backgroundPosition="center"
        w="100%"
        justify="center"
        align="center"
        px={size.width > 1000 ? "10" : "5"}
        h="100vh"
      >
        <Text
          fontFamily="Space Grotesk"
          w="100%"
          textAlign="center"
          fontWeight="bold"
          fontSize={
            size.width > 1000 ? "5xl" : size.width > 700 ? "5xl" : "2xl"
          }
        >
          Esteja um passo à frente.
        </Text>
      </Flex>
    );
  }

  return (
    <Flex flexDir="column" w="100%">
      <Header />
      <Functions />
      <Board />
      {/* ficou feio pra porra */}
      {/* <Indicators /> */}
      <PlugPlay />
      <Collect />
      <IlimitedFunctions />
      <Integrations />
      <Cargo />
    </Flex>
  );
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
