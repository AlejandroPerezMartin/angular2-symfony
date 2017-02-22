import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { IdeasService } from '../../_services/ideas.service';
import { Idea } from '../../_models/idea.model';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.scss']
})
export class NewIdeaComponent implements OnInit {

  @ViewChild('newIdeaDialog') newIdeaDialog;

  @Output() ideaAdded = new EventEmitter();

  private idea: Idea = new Idea();
  private errors: string;
  private loading: boolean = false;

  constructor(private ideasService: IdeasService) { }

  ngOnInit() {
  }

  createIdea() {
    this.loading = true;

    this.ideasService.addIdea(this.idea)
      .subscribe(newIdea => {
        this.newIdeaDialog.close();
        this.resetFormFields();
        this.ideaAdded.emit(newIdea);
        this.loading = false;
      }, err => {
        this.errors = err.message;
        this.loading = false;
      });
  }

  show() {
    this.newIdeaDialog.show();
  }

  onDialogHide() {
    this.errors = null;
    this.resetFormFields();
  }

  resetFormFields() {
    this.idea = new Idea();
  }

}
