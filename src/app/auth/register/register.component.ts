import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDataService} from '../../user-data.service';
import {User} from '../../User';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private regForm: FormGroup;
  public user: User;


  constructor(private formBuilder: FormBuilder, private userDataService: UserDataService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      emailFormControl: ['', [
        Validators.required,
        Validators.email
      ]],
      usernameFormControl: ['', [
        Validators.required
      ]],
      passwordFormControl: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      confirmPassword: ['', [
        Validators.required
      ]]
    });
  }

  get email() {
    return this.regForm.get('emailFormControl');
  }

  get username() {
    return this.regForm.get('usernameFormControl');
  }

  get password() {
    return this.regForm.get('passwordFormControl');
  }

  get confirmPassword() {
    return this.regForm.get('confirmPassword');
  }

  onSubmit = () => {
    this.user = new User(this.email.value, this.username.value, this.password.value);
    console.log(this.user.username)
    this.userDataService.userDataSubject.next(this.user.username);
    this.userService.register(this.user).subscribe( response => {
      this.router.navigateByUrl('');
    }
  );
  }


}
