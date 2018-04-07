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

@NgModule({
    imports: [
        CommonModule,
        UiModule,
        RouterModule,
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
