import { Router } from './router';
import { FormProvider } from './contexts/FormContext';
import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';



const App = () => {

  useEffect(() =>{
    axios.get("http://localhost:3000/usuario/listar")
   .then(() => {
     console.log("Tudo ok!")

   }).catch(() =>{
     console.log("Falha!")

   })
  
  }, [])
  
  return (

    <FormProvider>
          
      <Router />
      
    </FormProvider>
  );
  
}

export default App;