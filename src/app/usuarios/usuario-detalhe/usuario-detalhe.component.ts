import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})

export class UsuarioDetalheComponent implements OnInit {

  constructor() { }

  @Input() usuariosFilho: any;
  @Output() usuarioSelecionado = new EventEmitter<string>();
  @Output() usuarioSalvarEmitter = new EventEmitter<any>();

  ngOnInit(): void {
  }

  salvarUsuario(nome: string, email: string){

    let obj = {
      id: this.usuariosFilho.id,
      nome: nome,
      email: email
    }
    this.usuarioSalvarEmitter.next(obj)
  }

}
