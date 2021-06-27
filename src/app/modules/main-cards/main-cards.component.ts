import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-main-cards',
  templateUrl: './main-cards.component.html',
  styleUrls: ['./main-cards.component.scss']
})
export class MainCardsComponent implements OnInit {

  public datos: Array<any>;

  constructor() {
    
    this.datos =[
      {
        id: 1,
        socialimg: 'assets/images/icon-facebook.svg',
        name: '@nathanf',
        followers: 1223,
        won: 450,
        lost: 0,
        overviewTitle: 'Overview Titulo',
        overviewImage: '',
        overviewNumber: 6576,
        overviewWon: 200,
        overviewLost: 0
      },
      {
        id: 2,
        socialimg: 'assets/images/icon-twitter.svg',
        name: '@nathanf',
        followers: 4453,
        won: 50,
        lost: 0,
        overviewTitle: 'Overview Titulo',
        overviewImage: '',
        overviewNumber: 676,
        overviewWon: 500,
        overviewLost: 0
      },
      {
        id: 2,
        socialimg: 'assets/images/icon-instagram.svg',
        name: '@nathanf',
        followers: 4453,
        won: 0,
        lost: 150,
        overviewTitle: 'Overview Titulo',
        overviewImage: '',
        overviewNumber: 76,
        overviewWon: 0,
        overviewLost: 15
      },
      {
        id: 2,
        socialimg: 'assets/images/icon-youtube.svg',
        name: 'T@nathanf',
        followers: 53,
        won: 0,
        lost: 10,
        overviewTitle: 'Overview Titulo',
        overviewImage: '',
        overviewNumber: 761,
        overviewWon: 0,
        overviewLost: 150
      }
    ]  
    
  } 

  ngOnInit(): void {
    console.log(this.datos)
  }

}
