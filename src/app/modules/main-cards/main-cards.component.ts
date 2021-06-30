import { Component, OnInit } from '@angular/core';
import { Socialmedia } from '../../models/socialmedia';
//import { ModalComponent } from '../modal/modal.component'; 

@Component({
  selector: 'app-main-cards',
  templateUrl: './main-cards.component.html',
  styleUrls: ['./main-cards.component.scss']
})
export class MainCardsComponent implements OnInit {

  public datos: Array<Socialmedia>;

  public modalClass: boolean = false;

  constructor() { //private _popup: Popup

    this.datos =[
      new Socialmedia (1, 'assets/images/icon-facebook.svg', '@nathanf' , 1987, 12, 0 , 'hsl(195, 100%, 50%)'),
      new Socialmedia (2, 'assets/images/icon-twitter.svg', '@nathanf', 1044 , 12, 0 , 'hsl(195, 100%, 50%)'),
      new Socialmedia (3, 'assets/images/icon-instagram.svg', '@realnathanf' , 11.000, 12, 0 , 'hsl(195, 100%, 50%)'),
      new Socialmedia (4, 'assets/images/icon-youtube.svg', '@nathanf', 8239, 0, 114 , 'hsl(195, 100%, 50%)')
    ] 

  } 

  ngOnInit(): void {
    console.log(this.datos);
  }
 

  modalOn(){
    this.modalClass = !this.modalClass;
    
  }

  modalOff(){
    this.modalClass = !this.modalClass;
  }
  
  
  


}
