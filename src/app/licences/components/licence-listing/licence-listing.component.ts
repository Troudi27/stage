import { Component, OnInit } from '@angular/core';
import { LicenceService } from '../../services/licence.service';

@Component({
  selector: 'app-licence-listing',
  templateUrl: './licence-listing.component.html',
  styleUrls: ['./licence-listing.component.scss']
})
export class LicenceListingComponent implements OnInit {

  constructor(private licenceService: LicenceService) { }

  ngOnInit() {
    this.licenceService
    .getLicences()
    .subscribe(data => {
      console.log(data);
    },
    err => {
      console.error(err);
    }
    );
  }

}
