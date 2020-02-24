import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Goods } from 'src/app/interface/Goods.interface';
import { GoodService } from 'src/app/Services/good.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('image') image: ElementRef

  constructor(private goodSer: GoodService, private route: Router) { }

  ngOnInit(): void {
  }

  addNewGood(form: NgForm){
    let name = (<Goods>form.value).name,
        price = (<Goods>form.value).price,
        image = (<HTMLInputElement>this.image.nativeElement).files[0]
        this.goodSer.addNewGood(name,price,image).then(() => this.route.navigate(['/Home']))
  }

}
