/* eslint-disable react/prop-types */
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Box,
  Text,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { supabase } from "../../services/createCliente";
import { useState } from "react";

function EditarProjeto({
  idProjeto,
  nomeProjeto,
  orcamentoProjeto,
  servicosProjeto,
  categoriaProjeto,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);

  const finalRef = React.useRef(null);


  const [projects, setProjects] = useState({
    id: 0,
    nome: "",
    orcamento: "",
    servicos: "",
    categoria: "",
  });

  async function updateById(id) {
    try{
      const { error } = await supabase
      .from("projeto")
      .update({
        nome: projects.nome,
        orcamento: projects.orcamento,
        servicos: projects.servicos
      })
      .eq("id", id);
    if (error) {
      console.log(error.message);
       } else {
        console.log("Atualização realizada com sucesso!");
      }
    }catch (error){
     console.log(error)
    }
    
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    updateById(idProjeto);
    onClose();
    
  };

  return (
    <Box>
      <Button onClick={onOpen}ariant='solid' bg="#87CEEB" p={10}  cursor="pointer" borderRadius={5} 
                _hover={{ transition: 'transform 0.5s', color: 'white' }}>Editar</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        
        <ModalContent bg="#FFF0F5" w="30%"  mt={190} ml={500} h="30%">
          <Flex>
          <ModalHeader mt={10} ml={10} mb={10} mr={290}>Edite seu Projeto.</ModalHeader>
          <ModalCloseButton w={15} h={15} p={10} m={5} cursor="pointer"/>
          </Flex>
          
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel my={10} fontWeight="bold" as="h4">Nome do Projeto</FormLabel>
              <Input w={250} px={5} py={8}
                ref={initialRef}
                type="text"
                defaultValue={nomeProjeto}
                onChange={(e) => setProjects({ nome: e.target.value })}
              />
            </FormControl>


            <FormControl mt={4}>
              <FormLabel my={10} fontWeight="bold" as="h4">Orçamento</FormLabel>
              <Input w={250} px={5} py={8}
                type="number"
                defaultValue={orcamentoProjeto}
                onChange={(e) => setProjects({ orcamento: e.target.value })}
              />
            </FormControl>

            <FormControl mt={4}>
              <Text my={10} fontWeight="bold" as="h4"> Serviços</Text>
              <Textarea
                defaultValue={servicosProjeto}
                onChange={(e) => setProjects({ servicos: e.target.value })}
                size="sm"
                cols={34}
                rows={7}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel my={10} fontWeight="bold" as="h4">Tipo do projeto</FormLabel>
              <Input
                type="text"
                defaultValue={categoriaProjeto}
                onChange={(e) => setProjects({ categoria: e.target.value })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
        
      </Modal>
    </Box>
  );
}
export default EditarProjeto;
