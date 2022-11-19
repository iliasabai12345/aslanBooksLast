import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Loader} from "../../shared/clases/loader";
import {AuthService} from "../../shared/services/auth.service";
import {UserService} from "../../shared/services/user.service";
import {MatDialogRef} from "@angular/material/dialog";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  readonly loader = new Loader();

  constructor(public authService: AuthService,
              public dialogRef: MatDialogRef<SignInComponent>,
              public afAuth: AngularFireAuth) {
  }

  signIn() {
    this.loader.on();
    this.authService.SignIn(this.form.controls.email.getRawValue(), this.form.controls.password.getRawValue())
      .then(() => this.dialogRef.close())
      .finally(() => this.loader.off())
  }
}
