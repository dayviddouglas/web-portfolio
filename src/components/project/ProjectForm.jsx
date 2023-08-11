

import { useState } from "react";
import { useEffect } from "react";
import styles from "./ProjectForm.module.css";
import { supabase } from "../../services/createCliente";


const ProjectForm = () => {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState([{
    nome: "",
    orcamento: "",
    id_tipo: 0,
    servicos: "",
  }]);

  // Make a post for create a new project.
  const createProject = async (project) => {
    const { data, error } = await supabase
      .from("projeto")
      .insert([{
        nome:project.nome,
        orcamento:project.orcamento,
        id_tipo:project.id_tipo,
        servicos:project.servicos, 
      }])
    if (error) {
      console.log(error);
    }
    return(data)
  };

  const handleSubmit = () => {
    createProject(project).then((data)=>console.log(data)).catch((err)=>console.log(err.message))
  };

  // Get all of the types of projects.
  async function getCategories() {
    const { data, error } = await supabase.from("tipo_do_projeto").select("*");
    if(error){
      console.log(error.message)
    }
    setCategories(data);
  }
  useEffect(() => {
    getCategories();
  }, []);
  

  return (
    <form onSubmit={(e) =>{
        e.preventDefault();
        handleSubmit();
        } } className={styles.form}>
    
      <div className={styles.form_control}>
        <label htmlFor="input_nome">Nome do Projeto:</label>
        <input
          type="text"
          name="input_nome"
          id="input_nome"
          placeholder="Insira o nome do projeto"
          onChange={(e) => {
            setProject({ ...project, nome: e.target.value });
          }}
        />
      </div>

      

      <div className={styles.form_control}>
        <label htmlFor="input_orcamento">Orçamento do Projeto:</label>
        <input
          type="number"
          step="0.001"
          name="input_orcamento_projeto"
          id="input_orcamento_projeto"
          placeholder="Insira o orçamento total."
          onChange={(e) => {
            setProject({ ...project, orcamento: e.target.value });
          }}
        />
      </div>

      <div className={styles.form_control}>
        <label htmlFor="input_servicos">Serviços:</label>
        <textarea name="input_servicos"
          id="input_servicos"
          placeholder="Insira os serviços que irão ser realizados..."
          cols={20}
          rows={7}
          onChange={(e) => {
            setProject({ ...project, servicos: e.target.value });
          }}>
          
       </textarea>
      </div>

      <div className={styles.select_control}>
            <label htmlFor= "input_select"> Tipo do Projeto: </label>
            <select name="input_select" id="input_select" onChange= {(e)=>{
               setProject({...project, id_tipo: e.target.value})}}> 
            <option selected>Selecione uma opção</option>
            {categories.map((option)=>(
              <option value={option.id} key={option.id}>{option.descricao}</option>  
            ))}
            </select>
        </div>

   

      <button className={styles.submit_btn} type="submit"> Criar Projeto </button>
    </form>
  );
};

export default ProjectForm;
