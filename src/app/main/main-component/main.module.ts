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
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {YouTubePlayerModule} from '@angular/youtube-player';

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
        VgBufferingModule,
        MatButtonModule,
        MatIconModule,
        NgScrollbarModule,
        YouTubePlayerModule
    ],
    providers: [],
})
export class MainModule {
}
