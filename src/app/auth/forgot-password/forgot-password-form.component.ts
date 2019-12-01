import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent implements OnInit {
  formEmail: FormGroup;
  isSent = false;

  constructor() {
  }

  ngOnInit() {

    this.formEmail = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  get email() {
    return this.formEmail.get('email');
  }

  onSubmitEmail() {
    this.isSent = true;
  }

}
