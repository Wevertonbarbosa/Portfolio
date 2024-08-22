import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  currentPage = 1;

  changeJob(value: number): void {
    this.currentPage = value;
  }
}
