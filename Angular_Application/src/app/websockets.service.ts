import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as Rx from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {

  private subject:any = Rx.Subject<MessageEvent>;

  constructor() { }

}
