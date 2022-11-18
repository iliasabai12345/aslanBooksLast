import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Router} from "@angular/router";
import {FirebaseApp} from "@angular/fire/app";
import {User} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone,// NgZone service to remove outside scope warning,
    public firebase: FirebaseApp
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user: User | any) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        this.SetUserData(result.user).then();
        this.afAuth.authState.subscribe((user: User | any) => {
          if (user) {
            this.router.navigate(['dashboard']).then(() => {
              console.log(user);
            });
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  SignUp(email: string, password: string, name: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result: any) => {
        this.SetUserData(result.user, name).then();
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verification when new user sign up
    SendVerificationMail() {
      return this.afAuth.currentUser
        .then((u: any) => u.sendEmailVerification())
        .then((res) => {
          console.log(res)
        });
    }

  /*  // Reset Forgot password
    ForgotPassword(passwordResetEmail: string) {
      return this.afAuth
        .sendPasswordResetEmail(passwordResetEmail)
        .then(() => {
          window.alert('Password reset email sent, check your inbox.');
        })
        .catch((error: any) => {
          window.alert(error);
        });
    }*/

  // Returns true when user is looked in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false;
  }

  // Sign in with Google
  /*  GoogleAuth() {
      // @ts-ignore
      return this.AuthLogin(new afAuth.GoogleAuthProvider()).then((res: any) => {
        this.router.navigate(['dashboard']).then();
      });
    }*/


  // Auth logic to run auth providers
  /*  AuthLogin(provider: any) {
      return this.afAuth
        .signInWithPopup(provider)
        .then((result: any) => {
          this.router.navigate(['dashboard']).then();
          this.SetUserData(result.user).then();
        })
        .catch((error: any) => {
          window.alert(error);
        });
    }*/

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any, name?: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: name || null,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']).then();
    });
  }
}
