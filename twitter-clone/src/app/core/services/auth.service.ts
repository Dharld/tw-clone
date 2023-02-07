import { Injectable } from '@angular/core';
import User from '../models/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router
  ) {
    this.afAuth.user.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.removeItem('user');
      }
    });
  }

  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['/home']);
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  SignUp(email: string, password: string, additionalData: any) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
    /* .then((result) => {
        // this.SendVerificationMail();
        const user = {
          uid: result.user?.uid,
          email: result.user?.email,
          ...additionalData,
        };
        this.SetUserData(user);
      }); */
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['home']);
    });
  }

  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider).then((result) => {
      this.SetUserData(result.user);
    });
  }
  SendVerificationMail() {
    return this.afAuth.currentUser.then((u) => u?.sendEmailVerification());
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoUrl: user.photoUrl ? user.photoUrl : null,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, { merge: true });
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      console.log('Logout');
      localStorage.removeItem('user');
    });
  }
}
