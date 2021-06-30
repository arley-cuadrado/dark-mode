import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-cards',
  templateUrl: './overview-cards.component.html',
  styleUrls: ['./overview-cards.component.scss']
})
export class OverviewCardsComponent implements OnInit {

  public overviewsDatos: Array<any>;

  constructor() {

    this.overviewsDatos = [
      {
        idOver: 1,
        titleOverview: 'Page Views',
        name: 'assets/images/icon-facebook.svg',
        viewsOverview: 87,
        percentOverview: 3
      },
      {
        idOver: 1,
        titleOverview: 'Likes',
        imageOverview: 'assets/images/icon-facebook.svg',
        viewsOverview: 52,
        percentOverviewLost: 2
      },
      {
        idOver: 2,
        titleOverview: 'Retweets',
        imageOverview: 'assets/images/icon-twitter.svg',
        viewsOverview: 117,
        percentOverview: 303
      },
      {
        idOver: 2,
        titleOverview: 'Retweets',
        imageOverview: 'assets/images/icon-twitter.svg',
        viewsOverview: 117,
        percentOverview: 303
      },
      {
        idOver: 3,
        titleOverview: 'Likes',
        imageOverview: 'assets/images/icon-instagram.svg',
        viewsOverview: 5462,
        percentOverview: 2257
      },
      {
        idOver: 3,
        titleOverview: 'Profile Views',
        imageOverview: 'assets/images/icon-instagram.svg',
        viewsOverview: 52,
        percentOverview: 1375
      },
      {
        idOver: 4,
        titleOverview: 'Likes',
        imageOverview: 'assets/images/icon-youtube.svg',
        viewsOverview: 107,
        percentOverviewLost: 19
      },
      {
        idOver: 4,
        titleOverview: 'Total Views',
        imageOverview: 'assets/images/icon-youtube.svg',
        viewsOverview: 1407,
        percentOverviewLost: 12
      }
    ]

   }

  ngOnInit(): void {
    console.log(this.overviewsDatos);
  }

}
