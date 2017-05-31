import { RouterModule, Routes } from '@angular/router';

import { WcnauthGuardService } from '../../services/wcnauth-guard.service';

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
        component: VenturerComponent,
        // We'll use the canActivate API and pass in our AuthGuard. Now any time this route is hit, the AuthGuard will run first to make sure the user is logged in before activating and loading this route.
        canActivate: [WcnauthGuardService]
    },
    {
        path:'**',
        component: Http404Component
    }
];

export const wcnexusRoutes = RouterModule.forRoot(wcnRouting, { useHash: false });