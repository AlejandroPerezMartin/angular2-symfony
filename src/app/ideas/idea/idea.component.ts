import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Idea } from '../../_models/idea.model';
import { IdeasService } from '../../_services/ideas.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {

  @Input() idea: Idea;

  constructor(private ideasService: IdeasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.ideasService.getIdea(id).subscribe(
          idea => {
            this.idea = idea;
          },
          err => this.redirectToList()
        );
      } else {
        this.redirectToList();
      }
    });
  }

  save() {
    this.ideasService.updateIdea(this.idea).subscribe(() => this.redirectToList());
  }

  delete() {
    this.ideasService.deleteIdea(this.idea.id).subscribe(() => this.redirectToList());
  }

  redirectToList() {
    this.router.navigate(['/ideas', 'list']);
  }

}
