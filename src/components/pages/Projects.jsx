/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { supabase } from "../../services/createCliente";
import { useEffect, useState } from "react";
import Cardproject from "../project/Cardproject";
import { Flex, Wrap, WrapItem} from "@chakra-ui/react";
import EditarProjeto from "../project/EditarProjeto";
import { Link } from "react-router-dom";



const Projects = () => {

    const [projects, setProjects] = useState([{ id: 0, nome:"", orcamento:"", id_tipo:0}]);

   // Get all of projects.
  async function getProjects() {
    const { data, error } = await supabase.from("projeto").select("*");
    if(error){
      console.log(error.message)
    }
    setProjects(data);
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
    // Update by ID
    async function updateById (id){
      const {data, error} = await supabase.from ("projeto").select("*").eq("id", id)
      if(error){
        console.log(error.message)
      }
       setProjects(data)
       

    } 
   

    

    return( 
        <div>

        <Flex justifyContent="space-around" wrap="wrap" gap={3}> 
         {projects.map((project) =>(
          <Cardproject key={project.id} id={project.id} nome={project.nome} orcamento={project.orcamento} categoria={project.id_tipo}
           deleteById={deleteById} updateById={updateById} data={projects}/>
         ))}
       </Flex> 
        </div>
        
        

    );
}
export default Projects;