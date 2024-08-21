import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
})
export class JobsComponent {
  // currentPage = 1;

  // changePage(pageNumber: number): void {
  //   this.currentPage = pageNumber;
  // }


  totalPages = 11; // ou o número total de páginas que você tiver
currentPage = 1;

changePage(pageNumber: number): void {
  if (pageNumber > 0 && pageNumber <= this.totalPages) {
    this.currentPage = pageNumber;
  }
}

}
