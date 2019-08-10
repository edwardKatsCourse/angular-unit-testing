import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getContent(): Observable<any> {
    let observable = new Observable(subscriber => {
      subscriber.next("content");
      subscriber.complete();
    });

    return observable;
  }
}
