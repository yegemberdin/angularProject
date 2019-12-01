import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../User';
import {UserDataService} from '../../services/user-data.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {ForgotPasswordFormComponent} from '../forgot-password/forgot-password-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isForgot = false;
  private logForm: FormGroup;
  public user: User;


  constructor(
    private formBuilder: FormBuilder,
    private userDataService: UserDataService,
    private router: Router, private userService: UserService,
    private componentFactoryResolver: ComponentFactoryResolver) {
  }

  @ViewChild('container', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;

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
    this.userDataService.userDataSubject.next(this.username.value);
    this.userService.login(this.username.value, this.password.value).subscribe(response => {
      if (response) {
        this.router.navigateByUrl('/gallery');
      }
    });

  };

  forgotPassword() {
    this.isForgot = true;
    const factory = this.componentFactoryResolver.resolveComponentFactory(ForgotPasswordFormComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
}
