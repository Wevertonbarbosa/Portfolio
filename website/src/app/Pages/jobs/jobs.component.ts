import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
})
export class JobsComponent {
  totalPages = 11;
  currentPage = 1;

  changePage(pageNumber: number): void {
    if (pageNumber > 0 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
    }
  }
}
