import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
// import { MatOptionModule } from '@angular/material/core';
// import {MatChipsModule} from '@angular/material/chips';
// import {MatIconModule} from '@angular/material/icon';
// import {MatListModule} from '@angular/material/list';
// import {MatProgressBarModule} from '@angular/material/progress-bar';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatSelectModule} from '@angular/material/select';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import {MatSliderModule} from '@angular/material/slider';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
// import {MatTabsModule} from '@angular/material/tabs';
// import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
  ],
  exports: [
    MatCardModule, MatButtonModule, MatSidenavModule, MatMenuModule, MatInputModule,
    MatCheckboxModule, MatToolbarModule, MatGridListModule
    // MatChipsModule, MatOptionModule, MatGridListModule,
    // MatProgressBarModule, MatSliderModule, MatSlideToggleModule,
    // MatDialogModule, MatSnackBarModule, MatSelectModule,
    // MatIconModule, MatRadioModule,
    // MatProgressSpinnerModule, MatTabsModule, MatListModule
  ],
})
export class AppMaterialModule {
}
