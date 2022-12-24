import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services ";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  // checkPasswords(password: string, confirmPassword: string) {
  //   return (formGroup: FormGroup) => {
  //     const password = formGroup.controls[password];
  //     const confirmPassword = formGroup.controls[confirmPassword];
  //     if (confirmPassword.errors && !confirmPassword.errors.passwordMismatch) {
  //       return;
  //     }
  //     if (password.value !== confirmPassword.value) {
  //       confirmPassword.setErrors({passwordMismatch: true});
  //     } else {
  //       confirmPassword.setErrors(null);
  //     }
  //   }
  // }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return

      this.authService.register(this.form.value).subscribe(res => {
        this.router.navigate(['/auth/login']);
      } )
    }
}
