import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueriesComponent } from '../queries/queries.component';
import { AppMaterialModule } from '../app.material.module';



@NgModule({
    declarations: [QueriesComponent],
    exports: [
        QueriesComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule
    ]
})
export class QueriesModule { }
