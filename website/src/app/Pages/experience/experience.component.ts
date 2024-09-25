import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {
  ngOnInit() {

  }
  public currentPage = 1;
  public currentInfo = 3;

  changeJob(value: number): void {
    this.currentPage = value;
  }

  changeInfo(value: number): void {
    this.currentInfo = value;
  }
}
