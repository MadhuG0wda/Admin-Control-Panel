import { Component, OnInit } from '@angular/core';

declare function openNavForDashboard(): any;
declare function closeNavForDashboard(): any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }
 
  openNav(){
    openNavForDashboard();
  }
  closeNav() {
    closeNavForDashboard();
  }
}
