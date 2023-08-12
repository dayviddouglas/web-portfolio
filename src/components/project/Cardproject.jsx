/* eslint-disable react/prop-types */
 
 import {Card, CardBody, Stack, Heading, Text,CardFooter, Button,} from '@chakra-ui/react';
import EditarProjeto from './EditarProjeto';




 
 const Cardproject = ({ idProjeto, nomeProjeto, orcamentoProjeto, servicosProjeto, categoriaProjeto,deleteById}) => {
   
    return(
    <div>
            
             <Card minW={200} minH={200} maxW={400} maxH={400} border="2px solid black" py={20} px={15} mt={20} mx={20}
            
            >

            <Stack> 
                <CardBody >
                <Heading as="h4"> Nome: {nomeProjeto}</Heading>

                <Text py='2' my={5} fontWeight="bold">
                    Orçamento: R$ {orcamentoProjeto}.
                </Text>

                <Text p={10} border="1px solid #778899" textAlign="left"  borderRadius={5} my={5}>
                    Serviços: {servicosProjeto} 
                </Text>
                <Text py='2' fontWeight="bold">
                Categoria: {categoriaProjeto}.
                </Text>

                </CardBody>

                <CardFooter>

                <EditarProjeto idProjeto={idProjeto} 
                nomeProjeto={nomeProjeto} 
                orcamentoProjeto={orcamentoProjeto} 
                servicosProjeto={servicosProjeto}
                categoriaProjeto={categoriaProjeto}
                />
                
                <Button variant='solid' bg="#B22222" p={10}  cursor="pointer" borderRadius={5} 
                _hover={{ transition: 'transform 0.5s', color: 'white' }} onClick={()=> deleteById(idProjeto)}>
                    Apagar
                </Button>
                </CardFooter>
            </Stack>  
            </Card>  
                               
</div>  
  
);
 }



 export default  Cardproject;