import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import '@capacitor-community/http'
import { Plugins } from '@capacitor/core' 

@Injectable({
  providedIn: 'root'
})
export class CnegoService {

  constructor(public httpClient: HttpClient) { }

  
  getCneg(){
    return new Promise(resolve => {
      var headers = new Headers();
      this.httpClient.get('https://unidesarrollo.com.mx/api/cnego').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getEdos(){
    return new Promise(resolve => {
      var headers = new Headers();
      this.httpClient.get('https://unidesarrollo.com.mx/api/edos?id=190').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getCreateUser(data){
    /*const headers = new HttpHeaders({
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Headers":"Content-Type",
      "Access-Control-Allow-Methods":"GET,POST,PUT, OPTIONS",
      "Content-Type":"application/json"
      });*/
    const options = {
      headers: {
       'Content-Type': 'application/json'
     }
   };
   console.log('aca van los headers');
   //console.log(options);
   //console.log(headers);
    return new Promise(resolve => {
      //this.httpClient.post('dome',data,)
      this.httpClient.post('https://localhost/unides/public/api/apireguser',data,options).subscribe(datos => {
        resolve(datos);
      }, err => {
        console.log(err);
      });
    });
  }

  getAuthUser(data){
    const options = {
      headers: {
       'Content-Type': 'application/json'
     }
    };
    console.log(JSON.stringify(data))
 return new Promise(resolve => {
    this.httpClient.post('https://unidesarrollo.com.mx/api/loguser',data,options).subscribe(datos => {
      console.log(data['_body']);
    }, err => {
      console.log(err);
    });
  });
}

  getNego(){
    return new Promise(resolve => {
      this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  /*saveRegister(dataToSend){
    var url = "";
  }*/
  doPost = async () => {
    const { Http } = Plugins;
    
    
    const ret = await Http.request({
      method: 'POST',
      url: 'https://unidesarrollo.com.mx/api/apireguser',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        name: 'bar',
        email: 'bar@gmail.com',
        password: 'bar'
      }
    