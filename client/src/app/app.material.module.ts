import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
  ],
  exports: [
    MatCardModule, MatButtonModule, MatSidenavModule, MatMenuModule, MatInputModule,
    MatCheckboxModule, MatToolbarModule, MatGridListModule,
    MatDividerModule,

  ],
})
export class AppMaterialModule {
}
