import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { CheckForUpdateService } from './services/update.service';
import { Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Homepage';
  updateAvailable = false;

  constructor( 
              private meta: Meta,
              private updates: SwUpdate,
              private checkForUpdateService: CheckForUpdateService) {
              
    this.updates.available.subscribe((event) => {
    console.log('avaiable!');
    this.updateAvailable = true;
    });

    this.meta.addTags([
      { name: 'description', content: 'Meine erste Homepage die in dem Framework Angular von Google geschrieben wurde.' },
      { name: 'keywords', content: 'Studenski, Einkaufsliste, Angular, Lüneburg, Bardowick' },
      { name: 'author', content: 'Stefan Studenski'},
      { name: 'generator', content: 'Angular'}
    ]); 

  }
}