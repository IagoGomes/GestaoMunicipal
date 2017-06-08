import { Component, ViewChild } from '@angular/core';
import { Nav, IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Horario } from '../horario/horario';

//import { ContentPage } from '../content/content';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
	@ViewChild(Nav) nav: Nav;
	//contentPage  = ContentPage;


	users: Array<any>;
	account: {username: string, password: string} = {
		username:'joaosantos',
		password: '123456'
	};
	idUser: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, 
		public toastCtrl: ToastController, public http: Http,
		 public loadingCtrl: LoadingController) {
  	}

	doLogin(){

		//console.log(this.account.username);
		//console.log(this.account.password);		
		this.http.get('http://localhost/Educar/php/newDatabase/index.php/Login/db/?username='+this.account.username+'&password='+this.account.password)
		.map(res => res.json())
		.subscribe(data => 	this.navCtrl.setRoot(Horario,
			{username: this.account.username,
			 idFuncionario: data.idFuncionario}));
			// this.navCtrl.push(Horario,
			// {username: this.account.username,
			//  teste: data}));
	}

}
