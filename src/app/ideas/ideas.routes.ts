import { Routes } from '@angular/router';

import { IdeasComponent } from './ideas.component';
import { IdeaComponent } from './idea/idea.component';
import { IdeaListComponent } from './idea-list/idea-list.component';

import { AuthGuard } from '../_guards/auth.guard';

export const IdeasRoutes: Routes = [
  {
    path: 'ideas',
    component: IdeasComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
        {  path: '', redirectTo: 'list', pathMatch: 'full' },
        {  path: 'list', component: IdeaListComponent },
        {  path: 'idea', component: IdeaComponent }
		]
	}
];
