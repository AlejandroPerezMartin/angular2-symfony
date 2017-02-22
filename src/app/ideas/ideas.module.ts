import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdlModule } from 'angular2-mdl';

import { RouterModule } from '@angular/router';
import { IdeasRoutes } from './ideas.routes';
import { AuthGuard } from '../_guards/auth.guard';

import { IdeaComponent } from './idea/idea.component';
import { IdeasComponent } from './ideas.component';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { NewIdeaComponent } from './new-idea/new-idea.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(IdeasRoutes),
    FormsModule,
    MdlModule
  ],
  exports: [],
  declarations: [
    IdeaComponent,
    IdeasComponent,
    IdeaListComponent,
    NewIdeaComponent
  ],
  providers: [ AuthGuard ]
})
export class IdeasModule { }
