import { Component, EventEmitter, OnInit, Output ,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  // child to parent
  
  @Output() isToggle =new EventEmitter()
  // parent ot child
  @Input() childStr:string=""

  isOpen:boolean=true

  constructor () {}

  ngOnInit(): void {
    
  }
  toggle(){
      this.isOpen=!this.isOpen
      // console.log(this.childStr)
      this.isToggle.emit(this.isOpen)
  }

}
