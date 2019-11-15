import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

export const appRoutes: Routes = [
    { path: 'home-page', component: HomePageComponent }
    // { path: 'hero/:id',      component: HeroDetailComponent },
    // {
    //   path: 'heroes',
    //   component: HeroListComponent,
    //   data: { title: 'Heroes List' }
    // },
    // { path: '',
    //   redirectTo: '/heroes',
    //   pathMatch: 'full'
    // },
    // { path: '**', component: PageNotFoundComponent }
  ];