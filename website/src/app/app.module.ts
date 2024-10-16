import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Pages/user/user.component';
import { JobsComponent } from './Pages/jobs/jobs.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ExperienceComponent } from './Pages/experience/experience.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ToastComponent } from './Components/toast/toast.component';
import { PageFreelancerComponent } from './Components/page-freelancer/page-freelancer.component';
import { FeedbacksComponent } from './Components/feedbacks/feedbacks.component';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    JobsComponent,
    MenuComponent,
    ExperienceComponent,
    ContactComponent,
    ToastComponent,
    PageFreelancerComponent,
    FeedbacksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
