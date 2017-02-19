import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../../_services/ideas.service';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})
export class IdeaListComponent implements OnInit {

  constructor(private ideasService: IdeasService) { }

  ngOnInit() {
    this.ideasService.getIdeas().subscribe(res => console.log(res));
  }

}
