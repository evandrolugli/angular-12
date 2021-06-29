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
  
  //@Output() pedido = new EventEmitter();


  ngOnInit(): void {
  }
}
