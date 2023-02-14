import { Component} from '@angular/core';
//import { PythonAnywhereService } from '../../services/python-anywhere.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-data-analyse',
  template: `
  <div class="card text-center bg-dark">
    <div class="card-header">
      Server CPU auslastung!
    </div>
    <div class="card-body">
      <button (click)="getData()">Data</button>
      <!--<div *ngIf="cpuData">
        {{ cpuData }}
      </div>-->
    </div>
  </div>
  `
})




export class DataAnalysisComponent {
  constructor(private http: HttpClient) {}

  getData() {
    this.http.get('https://your-django-api.com/api/data').subscribe(data => {
      console.log(data);
    });
  }
}

