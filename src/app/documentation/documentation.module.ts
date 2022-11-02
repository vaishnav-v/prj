import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';


@NgModule({
  declarations: [
    DocumentationComponent,
    NavbarLeftComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule
  ]
})
export class DocumentationModule { }
