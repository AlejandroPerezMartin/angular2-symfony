import { Component, OnInit, ViewChild } from '@angular/core';
import { IdeasService } from '../../_services/ideas.service';
import { NewIdeaComponent} from '../new-idea/new-idea.component';
import { Idea } from '../../_models/idea.model';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})
export class IdeaListComponent implements OnInit {

  private ideas: Idea[] = [];

  @ViewChild('newIdeaDialog') newIdeaDialog: NewIdeaComponent;

  private loading: boolean = false;

  constructor(private ideasService: IdeasService) { }

  ngOnInit() {
    this.loading = true;
    this.ideasService.getIdeas().subscribe(
      ideas => {
        this.loading = false;
        this.ideas = ideas;
      });
  }

  openNewDialog() {
    this.newIdeaDialog.show();
  }

  onIdeaAdded(ev) {
    console.log(ev);
  }

}
