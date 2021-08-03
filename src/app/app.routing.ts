import {Routes} from '@angular/router';
import {IsDateGuard} from './guard/is-date.guard';

export const appRoutes: Routes = [
    {
        path: 'countdown',
        loadChildren: () => import('./main/countdown-component/countdown.module').then(m => m.CountdownModule),
    },
    {
        path: 'main',
        loadChildren: () => import('./main/main-component/main.module').then(m => m.MainModule),
        canActivateChild: [IsDateGuard]
    },
    {
        path: '',
        redirectTo: '/countdown',
        pathMatch: 'full',
    },
];
