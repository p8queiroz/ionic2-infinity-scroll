import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RssService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RssService {

      data: any;
      private http:Http;
      
      constructor(http: Http) {
        console.log('Hello RssService Provider');
        this.http = http;
        this.load();
      }

      load() {

        if (this.data) {
        
          return Promise.resolve(this.data);
        }

      
        return new Promise(resolve => {
          
          this.http.get('https://randomuser.me/api/?results=20')
            .map(res => res.json())
            .subscribe(data => {
              this.data = data;
              resolve(this.data);
              console.log(this.data);
            });
            
        });
      }

  
    

}
