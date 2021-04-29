import { Component, OnInit } from '@angular/core';
import { CnegoService} from './../cnego.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecuenta',
  templateUrl: './ecuenta.page.html',
  styleUrls: ['./ecuenta.page.scss'],
})
export class EcuentaPage implements OnInit {

  constructor(public cnegoService: CnegoService, public router: Router) { }
  txt:any
  ngOnInit() {
    this.cnegoService.getEdos().then(data =>  {
      this.txt = data;
      console.log(this.txt);
    });
  }

  openLog(){
    return this.router.navigateByUrl('/tabs');
  }

}
