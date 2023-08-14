/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { supabase } from "../../services/createCliente";
import { useEffect, useState } from "react";
import Cardproject from "../project/Cardproject";
import { Flex, Wrap, WrapItem, FormControl, FormLabel, Input,FormHelperText} from "@chakra-ui/react";
import { Link } from "react-router-dom";



const Projects = () => {

    const [projects, setProjects] = useState([{ id: 0, nome:"", orcamento:"",tipo_do_projeto:{descricao:""}, servicos:""}]);

   // Get all of projects.
  async function getProjects() {
    
const { data, error } = await supabase
.from('projeto')
.select(`
  id, 
  nome, 
  orcamento,
  tipo_do_projeto (
    descricao
  ),servicos
`)
    if(error){
      console.log(error.message)
    }
    setProjects(data)
  }
  useEffect(() => {
    getProjects();
  }, []);

  // Delete by ID
  async function deleteById(id){
    if(confirm("Deseja apagar este projeto?")){
      const { data , error} = await supabase.from("projeto").delete().eq('id', id)
      if(error){
       console.log(error.message);
      }
      getProjects();
    } 
    return;
    }
     

    

    return( 
        <div>

        <Flex justifyContent="space-around" wrap="wrap" gap={3}> 
         {projects.map((project) =>(
          <Cardproject key={project.id} idProjeto={project.id} nomeProjeto={project.nome} orcamentoProjeto={project.orcamento} servicosProjeto={project.servicos} categoriaProjeto={project.tipo_do_projeto.descricao}
           deleteById={deleteById}/>
         ))}
       </Flex> 
        </div>
        
        

    );
}
export default Projects;