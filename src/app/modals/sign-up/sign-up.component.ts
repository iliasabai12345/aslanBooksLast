import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {MatDialogRef} from "@angular/material/dialog";
import {Loader} from "../../shared/clases/loader";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  readonly loader = new Loader();

  constructor(public authService: AuthService,
              public dialogRef: MatDialogRef<SignUpComponent>,
              public afAuth: AngularFireAuth) {
  }

  /*  ngAfterViewInit(): void {
      const timeout = setTimeout(() => {
        // @ts-ignore
        window['recaptchaVerifier'] = new RecaptchaVerifier('recaptcha-container', {
          'size': 'invisible'
        }, this.auth);
        clearTimeout(timeout);
      }, 500);
    }*//*todo otp verification*/

  SignUp(email: string, password: string, name: string) {
    this.loader.on();
    this.authService.SignUp(email, password, name)
      .then(() => {
        this.loader.off();
        this.dialogRef.close();
      })
  }

  /*  sendOtp(): void {
      console.log('yusgh')
      this.loader.on();
      // @ts-ignore
      signInWithPhoneNumber(this.auth, '+77009965396', window['recaptchaVerifier'])
        .then((confirmationResult: ConfirmationResult) => {
          console.log(confirmationResult)
          // @ts-ignore
          window['confirmationResult'] = confirmationResult;
          const timeout = setTimeout(() => {
            document.getElementById('private-otp-field')?.focus();
            clearTimeout(timeout);
          }, 100);
        })
        .catch((error: any) => {
          console.log(error['code']);
          switch (error['code']) {
            case 'auth/invalid-phone-number':
              break;
            default:
              break;
          }
        })
        .finally(() => this.loader.off());
    }*//*TODO SEND OTP VERIFICATION*/
}
