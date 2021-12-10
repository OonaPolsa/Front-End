import {ValueTransformer} from '@angular/compiler/src/util';
import {Injectable, NgZone} from '@angular/core';
//import { AngularFireAuth } from "firebase/app";
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe((user: any) => {
      if (user != null) this.userEmail.next(user.email);
    });
  }

  login(email: any, password: any) {

    console.log("" + email + password);
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        //email.next(value: T);
        console.log("" + email + password);
        this.userEmail.next(email);
        this.router.navigate(['maintenance']);

      })
      .catch((error: any) => {
        console.log(error.message);
        console.log("error ilmoitus: " + email + password);
      })
  }

  logOut() {
    return this.afAuth.signOut().then(() => {
      this.userEmail = new BehaviorSubject<string>('');
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

  checkLogedInUser() {
    console.log(this.userEmail + 'tämä tieto tulee palvelun check Logged in user-metodista')
    //palauttaa kirjautuneen käyttäjän sähköpostin
    return this.userEmail;

  }

  getLoggedInUser(): any {
    //funktiota kutsutaan canActivate()-funktiossa
    return this.afAuth.authState;
  }

}
