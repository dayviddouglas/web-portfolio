/* eslint-disable react/prop-types */
import { useDisclosure,
Button,Modal,ModalOverlay,ModalContent, ModalHeader,ModalCloseButton, ModalBody, FormControl,FormLabel,Input,ModalFooter, Box, Text, Textarea} from "@chakra-ui/react";
import React from "react";
import { supabase } from "../../services/createCliente";
import { useState,useEffect } from "react";

function EditarProjeto({ idProjeto}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [value, setValue] = useState('')
  const [projects, setProjects] = useState({})

// Update by ID
async function updateById (id){
  const {data, error} = await supabase.from ("projeto").select("*").eq("id", id)
  if(error){
    console.log(error.message)
  }
   setProjects(data)
   console.log(projects)
} 

    useEffect( ()=> {
      updateById(idProjeto)},[]) 

  

  const handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }

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
        <ModalContent bg="#4F4F4F" w="30%"  mt={190}  ml={500} h={300}>
          <ModalHeader>Edite seu Projeto.</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome do Projeto</FormLabel>
              <Input ref={initialRef} type="text" defaultValue={projects.nome} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Orçamento</FormLabel>
              <Input type="number" defaultValue={value} />
            </FormControl>

            <FormControl mt={4}>
            <Text mb='8px'> Serviços</Text>
            <Textarea
                 defaultValue={value}
                  onChange={handleInputChange}
                  size='sm'
                  />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Tipo do projeto</FormLabel>
              <Input type="text" defaultValue={value} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
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
