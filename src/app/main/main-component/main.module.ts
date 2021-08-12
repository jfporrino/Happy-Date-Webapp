import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {RouterModule, Routes} from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CommonModule} from '@angular/common';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

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
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule
    ],
    providers: [],
})
export class MainModule {
}
