import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { IdeasRoutes } from './ideas.routes';
import { AuthGuard } from '../_guards/auth.guard';

import { IdeasComponent } from './ideas.component';
import { IdeaComponent } from './idea/idea.component';
import { IdeaListComponent } from './idea-list/idea-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(IdeasRoutes)
  ],
  exports: [ IdeaComponent ],
  declarations: [
    IdeasComponent,
    IdeaComponent,
    IdeaListComponent
  ],
  providers: [ AuthGuard ]
})
export class IdeasModule { }
