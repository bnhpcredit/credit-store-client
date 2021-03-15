import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueriesComponent } from '../queries/queries.component';



@NgModule({
    declarations: [QueriesComponent],
    exports: [
        QueriesComponent
    ],
    imports: [
        CommonModule
    ]
})
export class QueriesModule { }
