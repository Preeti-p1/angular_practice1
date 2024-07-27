import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  adduser:string="preeti"

  adminList:string[]=[]

  onAddAdmin(aname:string){
this.adminList.push(aname);

  }
  DelectAdmin(){
    this.adminList.splice(this.adminList.length-1);
  
   
  }
  deleteItems(index:number){
    this.adminList.splice(index,1)
   
 
  
  }
}
