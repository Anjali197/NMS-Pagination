import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionModule} from 'primeng/accordion';  
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginationRoutingModule } from './pagination-routing.module';






@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AccordionModule,
    InputTextModule,
    FormsModule,
    PaginationRoutingModule,
   

  ]
})
export class PaginationModule { }
