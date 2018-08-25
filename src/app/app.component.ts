import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
	constructor() { 
	  	var config = {
		    apiKey: "AIzaSyDleEjyx-d-gNo7bSnXe4x6zHMLjts9dss",
		    authDomain: "mon-blog-angular-52674.firebaseapp.com",
		    databaseURL: "https://mon-blog-angular-52674.firebaseio.com",
		    projectId: "mon-blog-angular-52674",
		    storageBucket: "mon-blog-angular-52674.appspot.com",
		    messagingSenderId: "984135254992"
	  	};
	  	firebase.initializeApp(config);
	}

}
