import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from '../ui/material-ui.module';
import { MatIconModule, MatMenuModule } from '@angular/material';

import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialUiModule
    ],
    exports: [
        MaterialUiModule,
        MenuComponent,
        TabsComponent
    ],
    declarations: [
        MenuComponent,
        TabsComponent
    ]
})
export class NavigationModule { }
