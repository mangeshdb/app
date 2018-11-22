import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { HomePage } from '../home/home';

import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';

/**
 * Generated class for the EnquiryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enquiry',
  templateUrl: 'enquiry.html',
})
export class EnquiryPage {
	fullname='';
  mobile='';
  travel_date='';
  cabin='';
  return_date='';
  preferred_airline='';
  comment='';
  flexible='';
	responseTxt:any;

  constructor(public loadingController: LoadingController,public alertController: AlertController, public navCtrl: NavController, public navParams: NavParams, public emailComposer:EmailComposer, public network:NetworkEngineProvider ) {
  }

  send(){
  	    
 
         
       let sendmailcontroller  = this.loadingController.create({
           content : 'Sending your enquiry...'
       }); 
       sendmailcontroller.present();
       this.network.senddata(this.fullname,this.mobile,this.travel_date,this.cabin,this.return_date,this.preferred_airline,this.comment,this.flexible).then(data=>{
			  
        sendmailcontroller.dismiss();
        console.log(data);
        if(data==1)
        {
            this.navCtrl.pop();
            let addTodoAlert = this.alertController.create({
              title:"Success",
              message:"Your enquiry send successfully",
              buttons:[{text:"OK"}]
            })
            addTodoAlert.present();
        }

         

      //console.log(data);
			//this.responseTxt = ""+ JSON.stringify(data);
		})
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EnquiryPage');
  }

}
