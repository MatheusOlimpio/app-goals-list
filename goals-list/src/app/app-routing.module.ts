import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalAddComponent } from './goal-add/goal-add.component';
import { GoalEditComponent } from './goal-edit/goal-edit.component';
import { GoalListComponent } from './goal-list/goal-list.component';

const routes: Routes = [
  { path: 'goals/create', component: GoalAddComponent },
  { path: 'goals/:id', component: GoalEditComponent },
  { path: 'goals', component: GoalListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
