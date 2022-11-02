import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    DocumentationComponent,
    NavbarLeftComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    PrimeNgModule
  ]
})
export class DocumentationModule { }
