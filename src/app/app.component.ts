import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title : any = 'meu-projeto-angular';
  
  empresa : string = 'BRQ';
  salario : number = 1000;

  mostrarMensagem(){
    let msg = 'Minha mensagem!!!'
    return msg;
  }

  meuClique(){
    console.log("oi");
    this.title = "oi";
  }

  onKeyUp(valorDigitado : string ){
    console.log("onkeyup");
  }
}
