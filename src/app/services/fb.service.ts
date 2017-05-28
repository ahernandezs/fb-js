import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FBService {

 constructor(private http: Http) { }

 login(): Observable<Array<any>> {
  return this.http.get("./assets/usuario.json")
    .map((res: Response) => {
      return res.json();
    });
 }

}
