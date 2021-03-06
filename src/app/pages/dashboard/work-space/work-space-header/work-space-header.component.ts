import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'da-work-space-header',
  templateUrl: './work-space-header.component.html',
  styleUrls: ['./work-space-header.component.scss'],
})
export class WorkSpaceHeaderComponent implements OnInit {
  imgSrc =
    'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg';

  userName: string;

  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('userinfo')) {
      this.userName = JSON.parse(localStorage.getItem('userinfo'))['account'];
    }
  }
}
