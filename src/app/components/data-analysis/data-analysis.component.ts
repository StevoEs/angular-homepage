import { Component, OnInit } from '@angular/core';
import { PythonAnywhereService } from '../../services/python-anywhere.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-data-analyse',
  template: `
  <div class="card text-center bg-dark">
    <div class="card-header">
      Server CPU auslastung!
    </div>
    <div class="card-body">
      <div *ngIf="cpuData">
        {{ cpuData }}
      </div>
    </div>
  </div>
  `
})
export class DataAnalysisComponent  implements OnInit {
  cpuData: any;

  constructor(private pythonAnywhereService: PythonAnywhereService) {}

  ngOnInit() {
    this.pythonAnywhereService.getCpuData().subscribe(data => {
      this.cpuData = data;
    });
  }


}

