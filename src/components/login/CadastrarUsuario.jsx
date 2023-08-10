import { Box,VStack,FormControl,FormLabel,Input,Button
} from "@chakra-ui/react";
import { useState } from "react";


const CadastrarUsuario = () => {
 
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const handleSubmitCadastro = (e) => {
        e.preventDefault()
        console.log(nome);
        console.log(email);
        console.log(password);
        console.log(confirmPassword);
      }


    return (

    
        <Box ml={470} mt={50}>
        <Box bg="#C0C0C0"border="2px solid #000" px={40} my={15} >
         <VStack>
         <FormControl id="nome" mt={20}>
             <FormLabel>Nome Completo:</FormLabel>
             <Input
             type="text"
             value={nome}
             onChange={(e) => setNome(e.target.value)}
             placeholder="Digite seu nome"
             my={10}
             p={5} 
             />
         </FormControl>
         <FormControl id="email">
             <FormLabel>Email:</FormLabel>
             <Input
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder="Digite seu email..."
             mt={10}
             p={5}
             />
         </FormControl>

         <FormControl id="password">
             <FormLabel>Senha:</FormLabel>
             <Input
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             placeholder="Digite sua senha"
             mt={10}
             p={5}
             />
         </FormControl>

         <FormControl id="confirmPassword">
             <FormLabel> Confirme sua Senha:</FormLabel>
             <Input
             type="password"
             value={confirmPassword}
             onChange={(e) => setconfirmPassword(e.target.value)}
             placeholder="Confirme sua senha"
             mt={10}
             p={5}
             />
         </FormControl>
         <Button onClick={ handleSubmitCadastro} type="submit" fontSize={14} bg="black" color="white" my={10} p={5} cursor="pointer" _hover={{ transition: 'transform 0.5s',transform:'scale(1.1)', color: '#FFBB33' }} >
             Criar Conta
         </Button>

         </VStack>
 </Box> 

</Box>   
    );
}

export default CadastrarUsuario;