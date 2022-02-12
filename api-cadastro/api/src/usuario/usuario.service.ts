import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { Injectable,  Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Usuario } from "./usuario.entity";
import { ResultadoDto } from './dto/resultado.dto';

@Injectable()
export class UsuarioService{
    constructor(
        @Inject('USUARIO_REPOSITORY')
        private usuarioRepository: Repository<Usuario>,
    ){}
    async listar(): Promise<Usuario[]> {
        return this.usuarioRepository.find();
    }


    async cadastrar(data: UsuarioCadastrarDto): Promise<ResultadoDto>{
        let usuario = new Usuario()
         usuario.name = data.name
         usuario.level = data.level
         usuario.email = data.email
         usuario.github = data.github
         this.usuarioRepository.save(usuario)
         .then((result)=>{
             return <ResultadoDto>{
                 status: true,
                 mensagem: "Usuario cadastrado com sucesso!"
             }

         })
         .catch((error) =>{
            return <ResultadoDto>{
                status: false,
                mensagem: "Houve um erro ao cadastrar o usuário!"
            }

         })
         return <ResultadoDto>{
            status:false,
             mensagem: "Cadastrado"
    }
}
}