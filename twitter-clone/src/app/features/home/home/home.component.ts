import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  routes = [
    {
      iconPath: '/assets/icons/icons.svg#homeIcon',
      href: 'home',
      active: true,
    },
    {
      iconPath: '/assets/icons/icons.svg#exploreIcon',
      href: 'explore',
      active: false,
    },
    {
      iconPath: '/assets/icons/icons.svg#notificationIcon',
      href: 'notifications',
      active: false,
    },
    {
      iconPath: '/assets/icons/icons.svg#messageIcon',
      href: 'message',
      active: false,
    },
    {
      iconPath: '/assets/icons/icons.svg#bookmarkIcon',
      href: 'bookmark',
      active: false,
    },
    {
      iconPath: '/assets/icons/icons.svg#listIcon',
      href: 'list',
      active: false,
    },
    {
      iconPath: '/assets/icons/icons.svg#profileIcon',
      href: 'profile',
      active: false,
    },
    {
      iconPath: '/assets/icons/icons.svg#moreIcon',
      href: 'more',
      active: false,
    },
  ];

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    return this.authService.SignOut().then(() => {
      this.router.navigate(['flow/signin']);
    });
  }
}
