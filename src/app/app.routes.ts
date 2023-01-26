import { Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { FormComponent } from './components/form/form.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { FeatureComponent } from './components/feature/feature.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const APP_ROUTES:Routes=[
    {
    path:'',
    component:HomeComponent
    },
    {
    path:'card',
    component:CardComponent
    },
    {
    path:'form',
    component:FormComponent
    },
    {
    path:'tutorial',
    component:TutorialComponent
    },
    {
    path:'feature',
    component:FeatureComponent
    },
    {
    path:'**',
    component:NotFoundComponent
    },
];