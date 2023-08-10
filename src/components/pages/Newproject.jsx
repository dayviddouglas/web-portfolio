/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
import styles from "./Newproject.module.css";
import { useState } from "react";
import { supabase } from "../../createCliente";

const Newproject = () =>{
  
    return (
      <div className={styles.newproject_container}>
       <h1>Criar Projeto</h1>
       <p> Crie seu projeto para depois adicionar os serviços.</p>
       <ProjectForm/>
      </div>
    );
  }

  
export default Newproject;