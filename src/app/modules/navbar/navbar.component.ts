import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  btnSwitch(){
    document.body.classList.toggle('dark');
    document.querySelector('#switch').classList.toggle('active');
  }

}
