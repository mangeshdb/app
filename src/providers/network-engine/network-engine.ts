import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NetworkEngineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkEngineProvider {

  constructor(public http: HttpClient) {
    //console.log('Hello NetworkEngineProvider Provider');
  }


  	senddata(n,m,td,cb,rd,pa,c,f) : Promise<any>
	{
		let url = "https://gaffis.in/ionic_services/ionic_web_services.php";
		let param ={name:n,mobile:m,travel_date:td,cabin:cb,return_date:rd,preferred_airline:pa,comment:c,flexible:f};

		 
		let request = this.http.post(url,param);
		return request.toPromise();
	}



}
