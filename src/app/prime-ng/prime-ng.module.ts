import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {PanelMenuModule} from 'primeng/panelmenu';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const PrimeNgModules = 
[ 
  ButtonModule,PanelMenuModule,BrowserModule,BrowserAnimationsModule
]

@NgModule({
  imports: [PrimeNgModules],
  exports:[PrimeNgModules]
})
export class PrimeNgModule { }
