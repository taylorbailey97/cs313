import { Injectable } from '@angular/core';
import { Service } from './service.model';
import {Subject} from 'rxjs';

import {HttpHeaders, HttpClient, } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  services: Service[];

  constructor() { }

  // getServices() {
  //   this.http.get < {
  //     message: string,
  //     services: Service[]
  //   } > ('http://localhost:3000/services')
  //   .subscribe(
  //     (services) => {
  //       this.services = services.services;
  //     });
  //     return this.services.slice();
  // }
}
