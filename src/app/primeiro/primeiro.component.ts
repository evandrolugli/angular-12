import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})

export class PrimeiroComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  
  //nome = "Grande Porte";

  // mostrarMensagem(){
  //   alert("Minha mensagem");
  // }

  minhaClasse = "btn-success";

  alteraString(){
    //this.minhaClasse = "btn-danger"
    if (this.minhaClasse == "btn-danger"){
      this.minhaClasse = "btn-success";
    }else{
      this.minhaClasse = "btn-danger";
    }
  }

}
