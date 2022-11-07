import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';


import { AddContentRoutingModule } from './add-content-routing.module';
import { AddContentComponent } from './add-content.component';


@NgModule({
  declarations: [
    AddContentComponent
  ],
  imports: [
    CommonModule,
    AddContentRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule
  ]
})
export class AddContentModule { }
