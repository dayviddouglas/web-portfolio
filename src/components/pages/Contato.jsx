import {
    Box,
    Heading,
    Input,
    Textarea,
    Button,
    FormControl,
    FormLabel
  } from '@chakra-ui/react';


const Contato = ()=> {
    return(
        
        <Box p={8} maxWidth="600px" textAlign="left">
        <Heading as="h1" size="xl" my={15}>
          Entre em Contato
        </Heading>
          <FormControl isRequired>
            <FormLabel htmlFor="name">Seu Nome</FormLabel>
            <Input
              type="text"
              id="name"
              placeholder="Digite seu nome"
              size="lg"
              my={10}
              py={5}
              px={10}
              fontSize={15}
            />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel htmlFor="email"> E-mail</FormLabel>
            <Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              size="lg"
              my={10}
              py={5}
              px={10}
              fontSize={15}
            />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel htmlFor="message" mb={10}>Sua Mensagem</FormLabel>
            <Textarea
              id="message"
              placeholder="Digite sua mensagem aqui..."
              size="lg"
              rows={6}
              cols={50}
             
              fontSize={15}
            />
          </FormControl>
          <Button type="submit" bg="#222" color="#fff" py={10} px={15} mt={6} cursor="pointer" _hover={{ transition: 'transform 0.5s',transform:'scale(1.1)', color: '#FFBB33' }}>
            Enviar
          </Button>
        
      </Box>
    
    );
}

export default Contato;