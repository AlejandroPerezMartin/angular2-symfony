import { Routes } from '@angular/router';

import { IdeasComponent } from './ideas.component';
import { IdeaComponent } from './idea/idea.component';
import { IdeaListComponent } from './idea-list/idea-list.component';

export const IdeasRoutes: Routes = [
  {
		path: 'ideas',
		component: IdeasComponent,
		children: [
				{  path: '', redirectTo: 'list', pathMatch: 'full' },
				{  path: 'list', component: IdeaListComponent },
				{  path: 'idea', component: IdeaComponent }
		]
	}
];
