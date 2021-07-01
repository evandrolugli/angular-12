import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})

export class UsuarioListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  
  @Input() usuariosFilho: any;

  users = [
    { id: 1, nome: "Usuário 1", email: "user1@usuario.com", cpf: "123456789uy" },
    { id: 2, nome: "Usuário 2", email: "user2@usuario.com", cpf: "12345678911" },
    { id: 3, nome: "Usuário 3", email: "user3@usuario.com", cpf: "12345678912" }
  ]

  onUsuarioEmitter(valor : string){
    console.log("Output properties " + valor);
  }

  usuarioSelecionado : any = null;
  
  selecionarUsuario(usuario : any){
    console.log(usuario)
    this.usuarioSelecionado = usuario;
  }

  onUsuarioSalvarEmitter( usuarioFilho : any ){
       //achar o usuário que foi alterado e substituir no array
       for (let i = 0; i < this.users.length; i++){
        if (this.users[i].id == usuarioFilho.id){
          this.users[i] = usuarioFilho;
        }
      } 
  }
}
