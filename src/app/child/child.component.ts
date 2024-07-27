import { Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

   @Output() addadmin= new EventEmitter<string>();
  @Input() placeholderText=''; 
 noadmin: number=0;
  
 

  nouser:number=1;
  aname: string = '';
 
  createAdmin(name:string){
if(name.length>0){
  this.addadmin.emit(name);
  this.noadmin=this.noadmin+1;
}



   
  
 
  }

}
