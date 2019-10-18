import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../User';
import {UserDataService} from '../../user-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private logForm: FormGroup;
  public user: User;


  constructor(private formBuilder: FormBuilder, private userDataService: UserDataService, private router: Router) {
  }

  ngOnInit() {
    this.logForm = this.formBuilder.group({
      emailFormControl: ['', []],
      usernameFormControl: ['', [
        Validators.required
      ]],
      passwordFormControl: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });
  }

  get email() {
    return this.logForm.get('emailFormControl');
  }

  get username() {
    return this.logForm.get('usernameFormControl');
  }

  get password() {
    return this.logForm.get('passwordFormControl');
  }


  onLogin = () => {
    this.user = new User(this.email.value, this.username.value, this.password.value);
    this.userDataService.setUserData(this.user);
    this.router.navigateByUrl('/gallery');
  };
}