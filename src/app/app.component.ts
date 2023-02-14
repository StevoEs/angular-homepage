import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import {SwPush} from '@angular/service-worker';
import { CheckForUpdateService } from './services/check-for-update.service';
import { Meta } from '@angular/platform-browser'; 
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { slideInAnimation } from './animations';
import { ChildrenOutletContexts, NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';


declare const gtag: Function; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ],
})
export class AppComponent implements OnInit {
  title: string = 'Homepage';
  loadingDataImg: boolean = false;
  updateAvailable = true;
  name = 'ngx-highlightjs';
  public isLoading = false;
  

  constructor( 
              private meta: Meta,
              private updates: SwUpdate,
              readonly swPush: SwPush,
              private checkForUpdateService: CheckForUpdateService,
              private router: Router,
              private titleService: Title,
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

    router.events.subscribe(event => {
      this.navigationInterceptor(event);
    });

    /** START : Code to Track Page View using gtag.js */
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
       gtag('event', 'page_view', {
          page_path: event.urlAfterRedirects
       })
      })
    /** END : Code to Track Page View  using gtag.js */

    //Add dynamic title for selected pages - Start
      router.events.subscribe(event => {
        if(event instanceof NavigationEnd) {
          var title = this.getTitle(router.routerState, router.routerState.root).join(' > ');
          titleService.setTitle(title);
        }
      });
    //Add dynamic title for selected pages - End

  }


    ngOnInit() {
      window.scrollTo(0, 0);
    }

  // collect that title data properties from all child routes
  // there might be a better way but this worked for me
  getTitle(state, parent) {
    var data = [];
    if(parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if(state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  // Zeigt und verbirgt den Lade-Spinner während RouterEvent-Änderungen
  navigationInterceptor(event: any): void {

    //Wird ausgelöst, wenn die Navigation startet
      if (event instanceof NavigationStart) {
        this.loadingDataImg = true;
      }
    //Ausgelöst Wenn die Navigation endet
      if (event instanceof NavigationEnd) {
        this.loadingDataImg = false;
      }
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }



}

