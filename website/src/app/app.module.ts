import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    JobsComponent,
    MenuComponent,
    ExperienceComponent,
    ContactComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
