import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { CheckForUpdateService } from './services/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Homepage';
  updateAvailable = true;

  constructor(private updates: SwUpdate,
              private checkForUpdateService: CheckForUpdateService) {
    this.updates.available.subscribe((event) => {
    console.log('avaiable!');
    this.updateAvailable = true;
    });
  }
}