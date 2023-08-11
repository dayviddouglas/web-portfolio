/* eslint-disable react/prop-types */
 
 import {Card, CardBody, Stack, Heading, Text,CardFooter, Button} from '@chakra-ui/react';



 
 const Cardproject = ({ id, nome, orcamento, categoria,deleteById, updateById}) => {
   return(
    <div>
            
             <Card maxW={300} maxH={300} border="2px solid black" py={20} px={15} mt={20} mx={20}
            
            >

            <Stack> 
                <CardBody >
                <Heading as="h4"> Nome: {nome}</Heading>

                <Text py='2'>
                    Orçamento: R$ {orcamento} 
                </Text>
                <Text py='2'>
                Categoria: {categoria}
                </Text>

                </CardBody>

                <CardFooter>

                <Button variant='solid' bg="#00BFFF" p={10} mr={5} cursor="pointer" 
                _hover={{ transition: 'transform 0.5s', color: 'white' }} onClick={()=> updateById(id)}>
                    Editar
                </Button>
                
                <Button variant='solid' bg="#B22222" p={10}  cursor="pointer" 
                _hover={{ transition: 'transform 0.5s', color: 'white' }} onClick={()=> deleteById(id)}>
                    Apagar
                </Button>
                </CardFooter>
            </Stack>
            </Card>
            
</div>  
);
 }



 export default  Cardproject;