import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions, } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeatureComponent } from './components/feature/feature.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NotFoundComponent } from './components/not-found/not-found.component';


import { CheckForUpdateService } from './services/check-for-update.service';
import { TutorialComponent } from './components/tutorials/tutorial/tutorial.component';
import { InfoComponent } from './components/info/info.component';
import { BlogComponent } from './components/blog/blog.component';
import { AngularComponent } from './components/tutorials/angular/angular.component';
import { DataAnalysisComponent } from './components/data-analysis/data-analysis.component';
import { PythonComponent } from './components/tutorials/python/python.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FeatureComponent,
    NotFoundComponent,
    FooterComponent,
    HomeComponent,
    TutorialComponent,
    InfoComponent,
    BlogComponent,
    AngularComponent,
    DataAnalysisComponent,
    PythonComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HighlightModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true})
  ],
  providers: [
    CheckForUpdateService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions> {
        //lineNumbers: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        //lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          bash: () => import('highlight.js/lib/languages/bash'),
          xml: () => import('highlight.js/lib/languages/xml'),
          python: () => import('highlight.js/lib/languages/python')
    }}}
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
