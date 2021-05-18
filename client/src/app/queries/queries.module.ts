import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QueriesComponent } from "./queries.component";
import { AppMaterialModule } from "../app.material.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [QueriesComponent],
  exports: [QueriesComponent],
  imports: [CommonModule, AppMaterialModule, ReactiveFormsModule],
})
export class QueriesModule {}
