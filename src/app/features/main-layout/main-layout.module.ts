import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from "./main-layout.component";
import { HeaderComponent } from './components/header.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
    MainLayoutComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],

})
export class MainLayoutModule { }
