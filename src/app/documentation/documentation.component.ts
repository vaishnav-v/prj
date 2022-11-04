import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {MenuModel} from './menu-model'

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  items!: MenuItem[];
  constructor() { }

  ngOnInit(): void {  
    var model = new MenuModel()
    this.items = model.model
  }

}
