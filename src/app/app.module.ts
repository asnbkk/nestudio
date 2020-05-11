import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SvgComponent } from './components/svg/svg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectCardComponent,
    SvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
