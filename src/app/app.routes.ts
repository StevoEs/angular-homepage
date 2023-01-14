import { Routes } from "@angular/router";
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { FeatureComponent } from './feature/feature.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES:Routes=[
    {
    //Standartroute: Umleitung auf '/Home' (noch /card)
    path:'',
    redirectTo:'/main',
    pathMatch:'full'
    },
    {
    path:'main',
    component:MainComponent
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
    path:'feature',
    component:FeatureComponent
    },
    {
    path:'**',
    component:NotFoundComponent
    },
];