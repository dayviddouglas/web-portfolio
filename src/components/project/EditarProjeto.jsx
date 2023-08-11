/* eslint-disable react/prop-types */
import { FormControl,FormLabel, Input, FormHelperText} from "@chakra-ui/react";
import { useState } from "react";

const EditarProjeto = ({ idProject, nomeProject, orcamentoProject, categoriaProject}) =>{

    const{project, setProject} = useState({id:idProject, nome:nomeProject , orcamento:orcamentoProject, id_tipo:categoriaProject })

    return (
  <FormControl>
  <FormLabel> Nome do Projeto</FormLabel>
  <Input type='text' id={idProject} value={nomeProject} onChange={(e)=>setProject(e.target.value)} />
  <FormHelperText> We ll never share your email.</FormHelperText>
</FormControl>

  

    );
}
export default EditarProjeto;