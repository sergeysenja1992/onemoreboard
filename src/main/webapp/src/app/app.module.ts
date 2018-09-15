import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyNavComponent} from './my-nav/my-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
    MatButtonModule,
    MatCardModule, MatGridListModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule, MatTableModule,
    MatToolbarModule
} from '@angular/material';

import {ThirdPageComponent} from './third-page/third-page.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {BoardsPageComponent} from './boards-page/boards-page.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
    { path: 'welcome-page', component: WelcomePageComponent},
    { path: 'boards-page', component: BoardsPageComponent},
    { path: 'third-page', component: ThirdPageComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        MyNavComponent,
        WelcomePageComponent,
        BoardsPageComponent,
        ThirdPageComponent,
        BoardsPageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, {useHash: true}),
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatGridListModule,
        HttpClientModule,
        MatTableModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
