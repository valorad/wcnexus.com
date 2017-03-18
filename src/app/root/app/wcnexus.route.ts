import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { Http404Component } from './http404/http404.component';
import { VenturerComponent } from './venturer/venturer.component';

const wcnRouting: Routes = [
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
        path:'venturer',
        component: VenturerComponent
    },
    {
        path:'**',
        component: Http404Component
    }
];

export const wcnexusRoutes = RouterModule.forRoot(wcnRouting, { useHash: true });