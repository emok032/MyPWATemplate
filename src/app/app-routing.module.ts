import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './content/story/feed/feed.component';
import { DetailsComponent } from './content/story/details/details.component';

const routes: Routes = [
    { path: '', redirectTo: 'hn/top', pathMatch: 'full' },
    { path: 'hn', loadChildren: './content/content.module#ContentModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
