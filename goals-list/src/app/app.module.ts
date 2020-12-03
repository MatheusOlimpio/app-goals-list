import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalAddComponent } from './goal-add/goal-add.component';
import { GoalEditComponent } from './goal-edit/goal-edit.component';
import { GoalListComponent } from './goal-list/goal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalAddComponent,
    GoalEditComponent,
    GoalListComponent
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
