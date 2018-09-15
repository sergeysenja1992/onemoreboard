import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthExpiredInterceptor} from './interceptor/auth-expired.interceptor'
import {AccountService} from './account/account.service'

const appRoutes: Routes = [
    { path: '', component: WelcomePageComponent},
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
        AccountService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [
                Injector
            ]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
