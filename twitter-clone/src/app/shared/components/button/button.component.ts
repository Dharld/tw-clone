import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import User from 'src/app/core/models/user';

type ButtonType = 'google' | 'apple' | 'simple' | 'outline' | 'primary';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() type: ButtonType = 'simple';
  @Input() userData: any;
  @Input() submit: boolean = false;
  public user!: User;

  constructor(public afAuth: AngularFireAuth) {
    this.userData = JSON.parse(localStorage.getItem('user')!);
    if (this.userData) {
      this.user = {
        uid: this.userData.uid,
        email: this.userData.email,
        displayName: this.userData.displayName,
        photoUrl: this.userData.photoURL,
        emailVerified: this.userData.thisVerified,
      };
    }
  }

  ngOnInit(): void {}
}
