import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/@core/data/userData';
import { UserDataService } from 'src/app/@core/mock/user-data.service';
import { WorkGroupService } from 'src/app/@core/mock/work-group.service';

@Component({
  selector: 'da-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.scss'],
})
export class UserCenterComponent implements OnInit {
  user: User = {};

  busy: Subscription;

  spaceBusy: Subscription;

  source = [
    { title: '个人页' },
    {
      title: '个人中心',
      link: '/pages/user/center',
    },
  ];

  activeTab = 'first';

  tabs = [
    {
      id: 'first',
      label: 'Articles'
    },
    {
      id: 'second',
      label: 'Project'
    }
  ]

  articles = [];

  projects = []

  workGroups = [];

  constructor(private userDataService: UserDataService, private workGroupService: WorkGroupService) {}

  ngOnInit() {
    this.busy = this.userDataService.getUser().subscribe((res) => {
      this.user = res;
    });
    this.workGroupService.getWorkGroups().subscribe((group) => {
      this.workGroups = group;
    });
    this.getListData();
  }

  getListData () {
    switch (this.activeTab) {
      case 'first':
        this.getArticles();
        return;
      case 'second':
        this.getProjects();
        return
    }
  }

  getArticles () {
    this.spaceBusy = this.userDataService.getArticles().subscribe(res => {
      this.articles = res;
    })
  }

  getProjects () {
    this.spaceBusy = this.userDataService.getProjects().subscribe(res => {
      this.projects = res;
    })
  }

  activeTabChange (e) {
    this.getListData();
  }

  actionHandler (key, item) {
    if (item[key + 'Attached']) {
      item[key] -= 1;
    } else {
      item[key] += 1;
    }
    item[key + 'Attached'] = !item[key + 'Attached'];
  }
}
