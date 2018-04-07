import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'story-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    @Input() itemId; // declares the 'id' being passed to this directive as itemId
    item$: Observable<any>;

    constructor(private db: DataService) { }

    ngOnInit() {
        this.item$ = this.db.getItem(this.itemId); // fetches the object associated with itemId
    }

}
