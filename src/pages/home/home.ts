import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnquiryPage } from '../enquiry/enquiry';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public enquiryPage = EnquiryPage;
  constructor(public navCtrl: NavController) {

  }

}
