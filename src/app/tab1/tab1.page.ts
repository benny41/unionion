import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CnegoService} from './../cnego.service';
import { RegistroPage } from '../registro/registro.page';
import { EcuentaPage } from '../ecuenta/ecuenta.page';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  txt:any
  todo={}
  httpClient: any;
  constructor(private browser: InAppBrowser, public cnegoService: CnegoService, public router: Router, public navCtrl: NavController) { }

  openURL(){
    //this.browser.create('https://www.unidesarrollo.com.mx/principal','_self','location=no,zoom=no')
    this.cnegoService.getCneg().then(data =>  {
      this.txt = data;
      console.log(this.txt);
    });
  }

  openURLtest(){
    //this.browser.create('https://www.unidesarrollo.com.mx/principal','_self','location=no,zoom=no')
    this.cnegoService.getNego().then(data =>  {
      this.txt = data;
      console.log(this.txt);
    });
  }

  openREG(){
    
    return this.router.navigateByUrl('/registro');
    
  }

  login(form) {

    console.log(form.value);
    this.cnegoService.getAuthUser(form.value).then(datos =>  {
      this.txt = datos;
      console.log(this.txt);
    });
    }

    
  }