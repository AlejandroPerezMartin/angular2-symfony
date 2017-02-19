import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { IdeasRoutes } from './ideas.routes';

import { IdeasComponent } from './ideas.component';
import { IdeaComponent } from './idea/idea.component';
import { IdeaListComponent } from './idea-list/idea-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(IdeasRoutes),
    IdeaComponent,
    IdeaListComponent
  ],
  declarations: [
    IdeasComponent,
    IdeaComponent,
    IdeaListComponent
  ]
})
export class IdeasModule { }
