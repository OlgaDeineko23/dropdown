import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HomeComponent } from './pages/home/home.component';
import {MovieService} from './services/movie.service';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
