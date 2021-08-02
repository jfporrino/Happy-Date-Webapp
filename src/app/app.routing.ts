import {Routes} from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'countdown',
        loadChildren: () => import('./main/countdown-component/countdown.module').then(m => m.CountdownModule),
    },
    {
        path: '',
        redirectTo: '/countdown',
        pathMatch: 'full',
    },
];
