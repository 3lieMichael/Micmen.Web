import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  startDate = new Date("2016/01/01")
  today = new Date();
  experienceYears: number = this.today.getFullYear() - this.startDate.getFullYear();
  skills: Skill[] = [
    {name: "UI/UX", percent: "65%"},
    {name: "Web Design", percent: "70%"},
    {name: "Development", percent: "85%"},
    {name: "Branding", percent: "40%"}
  ]

  percent = "50%";

  constructor() { 
  }

  ngOnInit() {
  }

}

class Skill{
  name: string;
  percent: string;

}
