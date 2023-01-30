import { Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { FormComponent } from './components/form/form.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { FeatureComponent } from './components/feature/feature.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const APP_ROUTES:Routes=[
    {
    path:'',
    component:HomeComponent,
    data: { animation: 'HomePage' }
    },
    {
    path:'info',
    component:InfoComponent,
    data: { animation: 'InfoPage' }
    },
    {
    path:'form',
    component:FormComponent,
    data: { animation: 'FormPage' }
    },
    {
    path:'tutorial',
    component:TutorialComponent,
    data: { animation: 'TutorialPage' }
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