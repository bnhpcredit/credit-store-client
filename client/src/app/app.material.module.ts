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
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
  ],
  exports: [
    MatCardModule, MatButtonModule, MatSidenavModule, MatMenuModule, MatInputModule,
    MatCheckboxModule, MatToolbarModule, MatGridListModule,
    MatDividerModule, MatListModule, MatRadioModule,CdkStepperModule,MatStepperModule,
    MatIconModule, MatTooltipModule
  ],
})
export class AppMaterialModule {
}
