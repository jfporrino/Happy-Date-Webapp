import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {RouterModule, Routes} from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CommonModule} from '@angular/common';
import {IvyCarouselModule} from 'angular-responsive-carousel';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
    }
];

@NgModule({
    declarations: [
        MainComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatProgressSpinnerModule,
        IvyCarouselModule,
    ],
    providers: [],
})
export class MainModule {
}
