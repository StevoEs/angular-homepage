import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { AjaxComponent } from './ajax/ajax.component';
import { FeatureComponent } from './feature/feature.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
    path:'ajax',
    component:AjaxComponent
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