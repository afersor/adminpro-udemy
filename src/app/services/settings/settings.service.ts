import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes :Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) { 
    this.cargarAjustes();
  }

  guardarAjustes(){ 
    console.log('Guardado en el local Storage');
    //JSON.stringfy convierte el objeto en string
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    
  }

  cargarAjustes(){
    //preguntar si existe en el localStorage
    if(localStorage.getItem('ajustes')){
      //json.parse convierte el string a tipo ajustes
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log('Cargado del localStorage');

      this.aplicarTema(this.ajustes.tema);
    }else{
      console.log('Usando valore por defecto');
      this.aplicarTema(this.ajustes.tema);
    }
  }//fin cargarAjustes

  aplicarTema(tema : string){

    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href',url);
    
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();

  }//fin aplicarTema
}

interface Ajustes{
  temaUrl: string;
  tema: string;
}
