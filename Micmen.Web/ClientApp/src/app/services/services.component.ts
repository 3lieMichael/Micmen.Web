import { Component, OnInit } from '@angular/core';
import { UiServiceModel } from 'src/models/ui.service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
 
  services: UiServiceModel[] = [
    {name: "UI/Ux", description: "test descripting to be added", icon: "icon icon-laptop"},
    {name: "Web Design", description: "test descripting to be added", icon: "icon icon-aperture"},
    {name: "Development", description: "test descripting to be added", icon: "icon icon-layers"},
    {name: "Branding", description: "test descripting to be added", icon: "icon icon-megaphone"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
