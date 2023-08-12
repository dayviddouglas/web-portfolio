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
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg="#4F4F4F" w="30%" mt={190} ml={500} h={300}>
          <ModalHeader>Edite seu Projeto.</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome do Projeto</FormLabel>
              <Input
                ref={initialRef}
                type="text"
                defaultValue={nomeProjeto}
                onChange={(e) => setProjects({ nome: e.target.value })}
              />
            </FormControl>


            <FormControl mt={4}>
              <FormLabel>Orçamento</FormLabel>
              <Input
                type="number"
                defaultValue={orcamentoProjeto}
                onChange={(e) => setProjects({ orcamento: e.target.value })}
              />
            </FormControl>

            <FormControl mt={4}>
              <Text mb="8px"> Serviços</Text>
              <Textarea
                defaultValue={servicosProjeto}
                onChange={(e) => setProjects({ servicos: e.target.value })}
                size="sm"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Tipo do projeto</FormLabel>
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
