import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect, useState } from 'react';



export const FormStep4 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

      
    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
    }, []);

   
    return (
        
        <Theme >
            <C.Container >
          
                <h1>Excelente {state.name}, contamos com você!</h1>
                <p>Muito obrigado! Boa sorte e esperamos te ver em breve!</p>

                <hr/>


                
            </C.Container>
        </Theme>
            );
        }

 


