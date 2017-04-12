import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RssService } from '../../providers/rss-service'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RssService]
})


export class HomePage {

  public people:any = [];
  private start:number=0;

  
  constructor(public navCtrl: NavController, public RssService:RssService) {

    this.loadItems();
       
  }



 loadItems(){

    this.RssService.load()
    .then(data => {

      for (let user of data.results) {
                  this.people.push(user)
        }

      //console.log("this.people: " + this.people);

    });
  }

  doInfinite(infiniteScroll) {
    
    setTimeout(() => {
        //console.log('1.Async operation has started');
        this.loadItems();
        //console.log('2.Async operation has ended');

        infiniteScroll.complete();

      }, 1000);    
  }

}
