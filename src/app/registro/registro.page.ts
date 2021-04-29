import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { CnegoService} from './../cnego.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  
})
export class RegistroPage implements OnInit {

  //form = {}
  todo = {}
  txt:any
  constructor(public cnegoService: CnegoService, public router: Router) { }


  ngOnInit() {
  }
  onSubmitTemplate(){
    console.log('ok')
  }
 
  logForm(form) {
    
    console.log(form.value)
    this.cnegoService.getCreateUser(form.value).then(datos =>  {
      this.txt = datos;
      console.log(this.txt);
    });
    return this.router.navigateByUrl('/tabs');
  }


}

