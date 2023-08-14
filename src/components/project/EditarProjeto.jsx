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
  });

  async function updateById(id) {
    try {
      const { error } = await supabase
        .from("projeto")
        .update({
          nome: projects.nome,
          orcamento: projects.orcamento,
          servicos: projects.servicos,
        })
        .eq("id", id);
      if (error) {
        console.log(error.message);
      } else {
        console.log("Atualização realizada com sucesso!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateById(idProjeto)
      .then(() => {
        onClose();
        reloadPage();
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <Box>
      <Button
        onClick={onOpen}
        ariant="solid"
        bg="#87CEEB"
        p={10}
        cursor="pointer"
        borderRadius={5}
        _hover={{ transition: "transform 0.5s", color: "white" }}
      >
        Editar
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg="#FFF0F5" w="30%" mt={100} ml={500} h="30%">
         
            <Box float="right">
            <ModalCloseButton w={15} h={15} p={10} ml={360} cursor="pointer" border="1px solid white " />
              <ModalHeader as="h4" textAlign="center" bg="#C0C0C0" py={10}>
                Edite seu Projeto:
              </ModalHeader>
              
            </Box>
          

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel my={10} fontWeight="bold" as="h4">
                Nome do Projeto
              </FormLabel>
              <Input
                w={250}
                px={5}
                py={8}
                ref={initialRef}
                type="text"
                defaultValue={nomeProjeto}
                onChange={(e) => setProjects({ nome: e.target.value })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel my={10} fontWeight="bold" as="h4">
                Orçamento
              </FormLabel>
              <Input
                w={250}
                px={5}
                py={8}
                type="text"
                defaultValue={orcamentoProjeto}
                onChange={(e) => {
                  let value = e.target.value;
                  value = value.replace(/\D/g, "");
                  value = value.replace(/(\d+)(\d{2})$/, "$1,$2");
                  e.target.value = value
                  setProjects({ ...projects, orcamento: Number(e.target.value.replace(",", "."))});
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <Text my={10} fontWeight="bold" as="h4">
                Serviços
              </Text>
              <Textarea
                defaultValue={servicosProjeto}
                onChange={(e) => setProjects({ servicos: e.target.value })}
                size="sm"
                cols={34}
                rows={7}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel my={10} fontWeight="bold" as="h4">
                Tipo do projeto
              </FormLabel>
              <Text>{categoriaProjeto}</Text>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              ariant="solid"
              bg="#87CEEB"
              p={4}
              cursor="pointer"
              borderRadius={5}
              _hover={{ transition: "transform 0.5s", color: "white" }}
              mr={8}
              onClick={handleSubmit}
            >
              Salvar
            </Button>
            <Button
              onClick={onClose}
              ariant="solid"
              bg="#B22222"
              p={4}
              cursor="pointer"
              borderRadius={5}
              _hover={{ transition: "transform 0.5s", color: "white" }}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
export default EditarProjeto;
