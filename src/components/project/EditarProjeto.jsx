/* eslint-disable react/prop-types */
 import { FormControl,FormLabel, Input, FormHelperText} from "@chakra-ui/react";
import { useState } from "react";



const EditarProjeto = ({ idProject, nomeProject, orcamentoProject, servicosProject, categoriaProject}) =>{

    const{project, setProject} = useState({id:idProject, nome:nomeProject , orcamento:orcamentoProject, servicos:servicosProject, id_tipo:categoriaProject })
   

    return (

  <FormControl>
  <FormLabel> Nome do Projeto</FormLabel>
  <Input type='text' id={idProject} value={nomeProject}/>
  <FormHelperText> We ll never share your email.</FormHelperText>
</FormControl>


  

    );
}
export default EditarProjeto; 