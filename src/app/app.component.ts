import { Component } from '@angular/core';
import { trigger, transition,query,style, group, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('router', [
      transition('0 <=> 1, 2 <=> 4 , 0 <=> 2, 0 <=> 3 , 1 <=> 3',[
       group([
        query(':enter', [
          style({
            transform:'translateX(100%)'
          }),
          animate(500, style({
            transform: 'translateX(0)'
          }) )
        ]),
        query(':leave', [
          style({
            transform:'translateX(0)'
          }),
          animate(500, style({
            transform: 'translateX(-100%)'
          }) )
        ])
       ])
      ])
    ])
  ]
})
export class AppComponent {
}
