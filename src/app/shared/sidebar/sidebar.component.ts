import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  lista:string[]=["hola","que","tal","estas"];

  // tslint:disable-next-line: variable-name
  constructor(public _sidebar: SidebarService) { }

  ngOnInit() {
  }

}
