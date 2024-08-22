import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './Pages/user/user.component';
import { JobsComponent } from './Pages/jobs/jobs.component';
import { ExperienceComponent } from './Pages/experience/experience.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'experience', component: ExperienceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
