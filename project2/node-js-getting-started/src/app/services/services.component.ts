import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Service } from './service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Service[];

  constructor(private serviceService: ServiceService) {
  }
  
  ngOnInit() {
    // this.services = this.serviceService.getServices();
  }

}
