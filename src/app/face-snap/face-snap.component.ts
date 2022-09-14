import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {
  
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  ngOnInit() {
    this.title='Archibale';
    this.description='mon meilleur pote';
    this.createdDate= new Date();
    this.snaps=6;
    this.imageUrl= 'https://www.deco.fr/sites/default/files/styles/width_880/public/2019-11/shutterstock_1208958013.webp?itok=_qnEcMb6';

  }
  addOnSnaps(){
    this.snaps++;
  }
  

}
