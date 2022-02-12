import axios from "axios"

class UsuarioService{

    async cadastrar(data){

      return axios({
        url: "http://192.168.100.40:3000/usuario/cadastrar",
        method: "POST",
        timeout: 5000,
        data: data,
        headers: {
            Accent: 'application/json'
        }
    }).then((response) => {
        return Promise.response(response)
    
    }).catch((error) => {
        return Promise.reject(error)
    })
    }
 }


    




