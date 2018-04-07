import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { Routes, RouterModule } from '@angular/router';

import { UiModule } from '../ui/ui.module';
import { FeedComponent } from '../components/story/feed/feed.component';
import { DetailsComponent } from '../components/story/details/details.component';
import { ItemComponent } from '../components/story/item/item.component';

import { DataService } from '../services/data.service';

@NgModule({
    imports: [
        CommonModule,
        UiModule,
        RouterModule,
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
