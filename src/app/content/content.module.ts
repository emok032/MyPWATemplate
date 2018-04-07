import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { Routes, RouterModule } from '@angular/router';

import { UiModule } from '../ui/ui.module';
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
    declarations: []
})
export class ContentModule { }
