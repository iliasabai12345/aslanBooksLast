import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {User} from "../interfaces/user.interface";
import {doc, Firestore, getDoc} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private fireStore: Firestore
  ) {

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
  SignIn(email: string | any, password: string | any) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result: any) => this.SetUserData(result.user).then())
    /*.catch((error) => {
      window.alert(error.message);
    });*/
  }

  // Sign up with email/password
  SignUp(email: string, password: string, name: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result: any) => this.SetUserData(result?.user, name).then())
  }

  // Reset Forgot password
    ForgotPassword(passwordResetEmail: string) {
      return this.afAuth
        .sendPasswordResetEmail(passwordResetEmail)
        .then(() => {
          window.alert('Password reset email sent, check your inbox.');
        })
        .catch((error: any) => {
          window.alert(error);
        });
    }

  // Auth logic to run auth providers
  SetUserData(user: any, name?: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    if (name) userData.displayName = name;
    return userRef.set(userData, {
      merge: true,
    }).then(() => this.setUserInformation(user.uid))
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.clear();
    });
  }

  async setUserInformation(id: string) {
    const test = await getDoc(doc(this.fireStore, '/users/', id))
    const currentUser: any = await test.data();
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
  }
}
