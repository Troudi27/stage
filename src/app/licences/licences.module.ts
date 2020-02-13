import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenceListingComponent } from './components/licence-listing/licence-listing.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LicenceService } from './services/licence.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  declarations: [LicenceListingComponent],
  exports: [LicenceListingComponent],
  providers: [LicenceService]
})
export class LicencesModule { }
