import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'story-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

    private _feed: Observable<number[]>;
    items$: Observable<any[]>;

    constructor(private db: DataService, private route: ActivatedRoute) { }

    ngOnInit() {
        this._feed = this.route.data.switchMap(data => { // grabs the data already retreived in the app router
            return this.db.getFeed(data.feed);
        });

        this.items$ = this._feed.map(ids => ids.slice(0, 30)); // maps the ids into an array
    }

}
