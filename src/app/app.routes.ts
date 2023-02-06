import { Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { DataAnalysisComponent } from './components/data-analysis/data-analysis.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { AngularComponent } from './components/tutorials/angular/angular.component';
import { TutorialComponent } from './components/tutorials/tutorial/tutorial.component';
import { PythonComponent } from './components/tutorials/python/python.component';
import { FeatureComponent } from './components/feature/feature.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const APP_ROUTES:Routes=[
    {
        path:'',
        component:HomeComponent,
        data: { animation: 'HomePage' }
    },
    {
        path:'blog',
        component:BlogComponent,
        data: { animation: 'BlogPage' }
    },
    {
        path:'data',
        component:DataAnalysisComponent,
        data: { animation: 'DataPage' }
    },
    {
        path:'info',
        component:InfoComponent,
        data: { animation: 'InfoPage' }
    },
    {
        path:'tutorial/angular',
        component:AngularComponent,
        data: { animation: 'AngularPage' }
    },
    {
        path:'tutorial/bash',
        component:TutorialComponent,
        data: { animation: 'TutorialPage' }
    },
    {
        path:'tutorial/python',
        component:PythonComponent,
        data: { animation: 'PythonPage' }
    },
    {
        path:'feature',
        component:FeatureComponent,
        data: { animation: 'FeaturePage' }
    },
    {
        path:'**',
        component:NotFoundComponent,
        data: { animation: '404Page' }
    },
];