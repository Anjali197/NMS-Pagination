import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationComponent } from './features/pagination/pagination/pagination.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import {PaginatorModule} from 'primeng/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TooltipModule } from 'primeng/tooltip';
import { TitleCasePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
     PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    HttpClientModule,
    PaginatorModule,
    BrowserAnimationsModule,
    TooltipModule,
    TitleCasePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
