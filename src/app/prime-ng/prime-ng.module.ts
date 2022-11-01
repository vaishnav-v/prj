import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule} from 'primeng/menu';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const PrimeNgModules = 
[ 
  ButtonModule,PanelMenuModule,BrowserModule,BrowserAnimationsModule,MenuModule
]

@NgModule({
  imports: [PrimeNgModules],
  exports:[PrimeNgModules]
})
export class PrimeNgModule { }
