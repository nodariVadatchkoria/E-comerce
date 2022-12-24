import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPermissionsDirective } from './directives/auth-permissions.directive';



@NgModule({
  declarations: [
    AuthPermissionsDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthPermissionsDirective
  ]
})
export class SharedModule { }
