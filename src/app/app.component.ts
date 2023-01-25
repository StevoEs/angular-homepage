import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import {SwPush} from '@angular/service-worker';
import { CheckForUpdateService } from './services/check-for-update.service';
import { Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Homepage';
  updateAvailable = true;

  constructor( 
              private meta: Meta,
              private updates: SwUpdate,
              readonly swPush: SwPush,
              private checkForUpdateService: CheckForUpdateService) {
              
    this.updates.versionUpdates.subscribe((event) => {
    console.log('avaiable!');
    this.updateAvailable = true;
    });

    this.meta.addTags([
      { name: 'description', content: 'Meine erste Homepage die in dem Framework Angular von Google geschrieben wurde.' },
      { name: 'keywords', content: 'Studenski, Einkaufsliste, Angular, Lüneburg, Homepage' },
      { name: 'author', content: 'Stefan Studenski'},
      { name: 'generator', content: 'Angular'}
    ]); 

  }
}