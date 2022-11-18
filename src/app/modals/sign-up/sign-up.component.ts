import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {MatDialogRef} from "@angular/material/dialog";
import {Loader} from "../../shared/clases/loader";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  readonly loader = new Loader();

  constructor(public authService: AuthService,
              private userService:UserService,
              public dialogRef: MatDialogRef<SignUpComponent>,
              public afAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
    console.log(this.userService.getUser())
    this.authService.SendVerificationMail().then(res => console.log(res));
  }

  SignUp(email: string, password: string, name: string) {
    this.loader.on();
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result: any) => {
        this.authService.SetUserData(result.user, name)
          .then(() => this.dialogRef.close())
          .then(() => this.loader.off())
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
