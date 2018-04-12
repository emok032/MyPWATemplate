import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';
import { MaterialUiModule } from '../ui/material-ui.module';

import { UiModule } from '../ui/ui.module';
import { FeedComponent } from './story/feed/feed.component';
import { DetailsComponent } from './story/details/details.component';
import { ItemComponent } from './story/item/item.component';

import { DataService } from '../services/data.service';

const routes: Routes = [
    { path: '', redirectTo: 'top', pathMatch: 'full' },
    { path: 'top', data: { feed: 'topstories' }, component: FeedComponent },
    { path: 'new', data: { feed: 'newstories' }, component: FeedComponent },
    { path: 'ask', data: { feed: 'askstories' }, component: FeedComponent },
    { path: 'show', data: { feed: 'showstories' }, component: FeedComponent },
    { path: 'jobs', data: { feed: 'jobstories' }, component: FeedComponent },

    { path: 'item/:id', component: DetailsComponent },
    // { path: 'user/:id', component: UserDetailComponent },
];

@NgModule({
    imports: [
        CommonModule,
        UiModule,
        RouterModule.forChild(routes),
        MaterialUiModule,
        AngularFireModule.initializeApp({ databaseURL: 'https://hacker-news.firebaseio.com' }),
        AngularFireDatabaseModule
    ],
    providers: [DataService],
    declarations: [
        FeedComponent,
        DetailsComponent,
        ItemComponent
    ]
})
export class ContentModule { }
