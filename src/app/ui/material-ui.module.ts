import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatIconModule, MatTabsModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        MatMenuModule,
        MatIconModule,
        MatTabsModule,
        NgbModule
    ],
    exports: [
        MatMenuModule,
        MatIconModule,
        MatTabsModule,
        NgbModule
    ],
    declarations: [
    ]
})
export class MaterialUiModule { }
