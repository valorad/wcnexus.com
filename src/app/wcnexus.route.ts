import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { Http404Component } from './http404/http404.component';

const wcnRoute: Routes = [
    {
        path:'',
        pathMatch: 'full',
        redirectTo: '/index', 
    },
    {
        path:'index',
        component: IndexComponent
    },
    {
        path:'**',
        component: Http404Component
    }
];

export const wcnexusRoutes = RouterModule.forRoot(wcnRoute, { useHash: true });