import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFigureComponent } from './figures/create-figure/create-figure.component';
import { FigureDetailsComponent } from './figures/figure-details/figure-details.component';
import { FigureListComponent } from './figures/figurelist/figure-list.component';
import { UpdateFigureComponent } from './figures/update-figure/update-figure.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {CoordinateListComponent} from "./coordinates/coordinate-list/coordinate-list.component";
import {CoordinateDetailsComponent} from "./coordinates/coordinate-details/coordinate-details.component";
import {UpdateCoordinateComponent} from "./coordinates/update-coordinate/update-coordinate.component";
import {CreateCoordinateComponent} from "./coordinates/create-coordinate/create-coordinate.component";

@NgModule({
  declarations: [
    AppComponent,
    CreateFigureComponent,
    FigureDetailsComponent,
    FigureListComponent,
    UpdateFigureComponent,
    CoordinateListComponent,
    CoordinateDetailsComponent,
    UpdateCoordinateComponent,
    CreateCoordinateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
