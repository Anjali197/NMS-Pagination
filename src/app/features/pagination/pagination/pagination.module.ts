import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionModule} from 'primeng/accordion';  
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginationRoutingModule } from './pagination-routing.module';
// import {ButtonModule} from 'primeng/button';





@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AccordionModule,
    InputTextModule,
    FormsModule,
    PaginationRoutingModule,
    // ButtonModule

  ]
})
export class PaginationModule { }
