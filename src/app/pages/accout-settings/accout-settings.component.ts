import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/service.index';


@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  //para tener acceso a todo el dom uso el Inject
  constructor( public _ajustes: SettingsService,@Inject(DOCUMENT) private _document) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema :string, link : any){

    console.log(link);
  
    this.aplicarCheck(link);
    //this._ajustes.guardarAjustes();
    this._ajustes.aplicarTema(tema);

  }

  aplicarCheck(link : any){

    let selectores : any = this._document.getElementsByClassName('selector');

    //elimino de todos los componentes la propiedad working( pone el tilde cuando hago click)
    for(let ref of selectores){
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck(){
    let selectores : any = this._document.getElementsByClassName('selector');
    let tema= this._ajustes.ajustes.tema;

    for(let ref of selectores){
      if(ref.getAttribute('data-theme') === tema){
        ref.classList.add('working');
        break;
      }
    }

  }//fin colocarCheck

}
