import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  databases?: string[];

  constructor(private databaseService: DatabaseService) {}

  getDatabases() {
    this.databaseService.getDatabases().subscribe(databases => {
      this.databases = databases;
    });
  }
}