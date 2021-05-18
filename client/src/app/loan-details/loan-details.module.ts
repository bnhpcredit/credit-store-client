import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoanDetailsComponent } from "./loan-details.component";
import { AppMaterialModule } from "../app.material.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [LoanDetailsComponent],
  exports: [LoanDetailsComponent],
  imports: [CommonModule, AppMaterialModule, ReactiveFormsModule],
})
export class LoanDetailsModule {}
