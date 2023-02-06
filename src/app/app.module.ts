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
    ButtonModule,InputTextModule,DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
