import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  // fetchData() {
  //   return this.http.get('https://project-manager-6c52a.firebaseio.com/.json').map(
  //     (res) => console.log(res)//res.json()
  //   );
  // }
}
