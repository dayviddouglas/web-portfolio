
import { Box, Text,Heading, Flex, Image} from '@chakra-ui/react'
import  foto_principal from "../../img/foto-Company.jpeg";

const Company = () => {
    return (
        
      <Flex>  
        <Box p={8} mt={30} textAlign="left">
        <Heading as="h1" mb={4} > 
        Portfólio
        </Heading>
          <Box mt={20}>
            <Text fontSize={16} mb={4}>
            Bem-vindo ao Portfólio!
            </Text>
            <Text fontSize={16} mb={4}>
            Esse site foi criado por Dayvid Douglas Campelo de Lima,
            </Text>
            <Text fontSize={16} mb={4} >
            com intuito facilitar gerenciamento de seus projetos pessoais,
            </Text>
            <Text fontSize={16} mb={4} >
            sendo assim viu uma oportunidade de auxiliar outras pessoas no ramo desenvolvimento de software,
            </Text>
            <Text fontSize={16} mb={4} >
            Aqui,você pode gerenciar seus projetos de forma eficiente.
            </Text>
            <Text fontSize={16} mb={4} >
            Tudo o que precisa fazer é criar seu perfil e começar a construir seu portfólio.
            </Text>
          </Box>
        </Box>
        <Image src={foto_principal} 
        alt='foto'
        w="25%" h="350" mt={30} ml={200}/>
      </Flex> 
      
        
    );
}

export default Company;