import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import {SwPush} from '@angular/service-worker';
import { CheckForUpdateService } from './services/check-for-update.service';
import { Meta } from '@angular/platform-browser'; 
import { slideInAnimation } from './animations';

import { ChildrenOutletContexts, NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ],
})
export class AppComponent {
  title = 'Homepage';
  updateAvailable = true;
  name = 'ngx-highlightjs';
  public isLoading = false;

  //@HostBinding('@.disabled') Animationen deaktivieren
  //public animationsDisabled = false;

  constructor( 
              private meta: Meta,
              private updates: SwUpdate,
              readonly swPush: SwPush,
              private checkForUpdateService: CheckForUpdateService,
              private router: Router,
              private contexts: ChildrenOutletContexts )  {
              
    this.updates.versionUpdates.subscribe((event) => {
    console.log('avaiable!');
    this.updateAvailable = true;
    });

    this.meta.addTags([
      { name: 'description', content: 'Meine erste Homepage die in dem Framework Angular von Google geschrieben wurde.' },
      { name: 'keywords', content: 'Studenski, Einkaufsliste, Angular, Tutorial, Homepage' },
      { name: 'author', content: 'Stefan Studenski'},
      { name: 'generator', content: 'Angular'}
    ]); 
  }
 

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }


}



