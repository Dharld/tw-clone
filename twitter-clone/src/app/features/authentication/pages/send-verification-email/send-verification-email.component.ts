import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-send-verification-email',
  templateUrl: './send-verification-email.component.html',
  styleUrls: ['./send-verification-email.component.scss'],
})
export class SendVerificationEmailComponent implements OnInit {
  emailToVerify!: string;
  constructor(private route: ActivatedRoute, public router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.emailToVerify = params['emailToVerify'];
    });
  }

  ngOnInit(): void {}
}
