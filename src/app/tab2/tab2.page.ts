import { Component } from '@angular/core';
import { CnegoService} from './../cnego.service';
import { from } from 'rxjs';
import { OnInit } from "@angular/core";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  txt:any  
  constructor( public cnegoService: CnegoService ) {}

  async ngOnInit() {
    //this.http.get<any>("https://rickandmortyapi.com/api/character/")
    this.cnegoService.getCneg().then(data =>  {
      this.txt = data;
      console.log(this.txt);
    });
  }

}
