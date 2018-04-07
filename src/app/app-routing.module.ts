import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './content/story/feed/feed.component';
import { DetailsComponent } from './content/story/details/details.component';

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
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
