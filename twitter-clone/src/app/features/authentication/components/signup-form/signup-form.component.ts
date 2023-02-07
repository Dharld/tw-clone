import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { range } from 'src/app/core/utils/range';
import { isLeapYear } from 'src/app/core/utils/isLeap';
import { formatNumber } from 'src/app/core/utils/formatDate';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  // To populate the month
  month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  daysOfMonth = [
    '31',
    '28',
    '31',
    '30',
    '31',
    '30',
    '31',
    '31',
    '30',
    '31',
    '30',
    '31',
  ];
  days = range({ from: 1, to: 31 });
  years = range({
    from: 1903,
    to: new Date().getFullYear(),
  });

  // The selectedDays
  selectedMonth = '';
  selectedDay = '';
  selectedYear = '';

  //
  form: FormGroup;
  step = 1;

  //
  showSpinner = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.email, Validators.required]],
      birthDate: [
        '',
        Validators.pattern(
          /(?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])[-/.](?:19d{2}|20[01][0-9]|2020)\b/
        ),
      ],
      displayName: [''],
    });
  }

  ngOnInit(): void {}

  setBirthDate() {
    let selectedYear = +this.selectedYear;
    let numberOfDays = 31;
    if (isLeapYear(selectedYear)) this.daysOfMonth[1] = '29';
    if (this.selectedMonth != '') {
      let index = this.month.indexOf(this.selectedMonth);
      numberOfDays = +this.daysOfMonth[index];
    }
    this.days = range({ from: 1, to: numberOfDays });
    this.form.controls['birthDate'].setValue(
      `${formatNumber(
        this.month.indexOf(this.selectedMonth) + 1
      )}-${formatNumber(+this.selectedDay)}-${this.selectedYear}`
    );
  }

  nextStep() {
    this.step++;
  }

  previousStep() {
    this.step--;
  }

  submitForm() {
    this.showSpinner = true;
    const { email, password, birthDate, displayName } = this.form.value;
    this.auth
      .SignUp(email, password, {})
      .then((userCredentials) => {
        this.auth.SendVerificationMail();
        const user = {
          uid: userCredentials.user?.uid,
          email: email,
          birthDate,
          displayName,
          photoUrl: null,
          emailVerified: false,
        };
        this.auth.SetUserData(user);
        this.router.navigate(['/sendVerificationEmail'], {
          queryParams: { emailToVerify: email },
        });
      })
      .catch((err) => {
        console.log(err);
        this.showSpinner = false;
      })
      .finally(() => {
        this.showSpinner = false;
      });
  }
}
