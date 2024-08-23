import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  public currentPage = 1;
  public currentInfo = 1;

  changeJob(value: number): void {
    this.currentPage = value;
  }

  changeInfo(value:number):void{
    this.currentInfo = value
  }
}
