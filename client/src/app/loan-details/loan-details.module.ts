import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanDetailsComponent } from './loan-details.component';



@NgModule({
    declarations: [LoanDetailsComponent],
    exports: [
        LoanDetailsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LoanDetailsModule { }
