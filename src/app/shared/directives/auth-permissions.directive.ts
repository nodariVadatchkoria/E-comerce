  import {AfterViewInit, Directive, ElementRef, TemplateRef, ViewContainerRef} from '@angular/core';
  import {AuthService} from "../../core/services ";

@Directive({
  selector: '[appAuthPermissions]'
})
export class AuthPermissionsDirective implements AfterViewInit{

  constructor(
    private authService: AuthService,
    private template: TemplateRef<any>,
    private container: ViewContainerRef,
  ) { }
  ngAfterViewInit(): void {
    if (!this.authService.token) {
      this.container.clear()
    } else {
        this.container.createEmbeddedView(this.template);
    }
  }
}
