import { Router } from './router';
import { FormProvider } from './contexts/FormContext'; 
import { useFetch } from './hooks/useFetch';


type Cadastro ={
  name: string;
  level: string;
  email: string;
  github: string;
  description: string;
}


function App(){
const {data: cadastro, isFetching}= 
useFetch<Cadastro[]>('http://localhost:3000/usuario/listar');
 
 
 return (

    <FormProvider>
       <Router />
      <ul>
        { isFetching && <p> Carregando...</p>}
        {cadastro?.map(cadastro =>{
          return(
            <li key={cadastro.name}>
            <strong>{cadastro.level}</strong>
            <strong>{cadastro.email}</strong>
            <strong>{cadastro.github}</strong>
            <p>(cadastro.description)</p>
      
            </li>
          )
        })}
      </ul>

    </FormProvider>
  );
  
}

export default App;