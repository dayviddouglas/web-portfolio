
 import { Box,VStack,FormControl,FormLabel,Input,Button,
   } from "@chakra-ui/react";
 import { useState } from "react";
import { Link } from "react-router-dom";





const Login = () => {


   const [login, setLogin] = useState([])
   const [password, setPassword] = useState([])


   const handleSubmitLogin = (e) => {
     e.preventDefault()
     console.log(login);
     console.log(password);
   }
    return(
    
                <Box ml={470} mt={100}>
                   <Box bg="#C0C0C0"border="2px solid #000" px={30} my={15}  >
                    <VStack>
                    <FormControl id="login" mt={20}>
                        <FormLabel>Login:</FormLabel>
                        <Input
                        type="text"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        placeholder="Digite seu login"
                        my={10}
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
                    <Button onClick={handleSubmitLogin} type="submit" 
                    fontSize={14} bg="black" 
                    color="white" my={10} p={5} 
                    cursor="pointer"
                     _hover={{ transition: 'transform 0.5s',transform:'scale(1.1)', color: '#FFBB33' }} 
                     borderRightRadius="1">
                        Entrar
                    </Button>
                    <Box fontSize={12} mb={8} _hover={{ transition: 'transform 0.5s', color: '#FFBB33',}}>
                    <Link to="/cadastrarUsuario"> Ainda não é cadastrado? </Link>
                    </Box>

                    </VStack>
            </Box> 

         </Box>      
        
    );

}

export default Login;