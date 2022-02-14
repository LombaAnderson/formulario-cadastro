import { Router } from './router';
import { FormProvider } from './contexts/FormContext';
import React, {Component, useEffect, useState} from 'react';
import { appendFile } from 'fs';
import axios from 'axios';

type Repository ={
  name: string;
  level: string;
  email: string;
  github: string;
}


const App = () => {
 const[repositores, setRepositories] = useState<Repository[]>([])
  
 useEffect(() =>{
   fetch('http://localhost:3000/api')
   .then(response=>response.json())
   .then(data=>{
     setRepositories(data);
   })
 }, [])
 
 
 return (

    <FormProvider>
       <Router />
      <ul>
        {repositores.map(rep =>{
          return(
            <li key={rep.name}>
            <strong>{rep.level}</strong>
            <strong>{rep.email}</strong>
            <strong>{rep.github}</strong>
            <p>(repo.description)</p>
      
            </li>
          )
        })}
      </ul>

    </FormProvider>
  );
  
}

export default App;