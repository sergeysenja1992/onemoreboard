import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyNavComponent} from './my-nav/my-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
    MatButtonModule,
    MatCardModule, MatDialogModule, MatFormFieldModule,
    MatGridListModule, MatHint,
    MatIconModule, MatInputModule,
    MatListModule,
    MatSidenavModule, MatSortModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';

import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {BoardsPageComponent} from './boards-page/boards-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthExpiredInterceptor} from './interceptor/auth-expired.interceptor'
import {AccountService} from './account/account.service'
import {ContextService} from './context/context.service'
import { BoardCreateDialogComponent } from './boards-page/board-create-dialog/board-create-dialog.component'
import {BoardsService} from './boards-page/boards.service'

const appRoutes: Routes = [
    { path: '', component: WelcomePageComponent},
    { path: 'welcome-page', component: WelcomePageComponent},
    { path: 'boards-page', component: BoardsPageComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        MyNavComponent,
        WelcomePageComponent,
        BoardsPageComponent,
        BoardsPageComponent,
        BoardCreateDialogComponent
    ],
    entryComponents: [
        BoardCreateDialogComponent
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
        MatSortModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule
    ],
    providers: [
        AccountService,
        BoardsService,
        ContextService,
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
