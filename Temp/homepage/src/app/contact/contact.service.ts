import { Injectable, EventEmitter } from '@angular/core';
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient ) {

  }
}