import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }
  
  @Input() usuariosFilho: any;

  usuarioSelecionado : any = null;


  usuarios = [
    { id: 1, nome: "Usuário 1", email: "user1@usuario.com" },
    { id: 2, nome: "Usuário 2", email: "user2@usuario.com" },
    { id: 3, nome: "Usuário 3", email: "user3@usuario.com" }
  ]

  onUsuarioEmitter(valor : string){
    console.log("Output properties " + valor);
  }

  onSelecionarClick(usuario : any){
    console.log(usuario)
    this.usuarioSelecionado = usuario;
  }

}
