import { Routes } from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { FeatureComponent } from './feature/feature.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES:Routes=[
    {
    //Standartroute: Umleitung auf '/Home' (noch /card)
    path:'',
    redirectTo:'card',
    pathMatch:'full'
    },
    {
    path:'card',
    component:CardComponent
    },
    {
        path:'main',
        component:MainComponent
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
        path:'footer',
        component:FooterComponent
    },
    {
        path:'**',
        component:NotFoundComponent
    },
]