import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defualt',
  templateUrl: './defualt.component.html',
  styleUrls: ['./defualt.component.css']
})
export class DefualtComponent implements OnInit {
    
  toggle:boolean =true
  str="degault component"

  constructor () {}

  ngOnInit(): void {
    
  }
  isToggle(event:any){
    this.toggle=event
    // resizing figure
    setTimeout(() => {
      window.dispatchEvent (
       new Event ('resize')
      )
     },300);
  }
}
