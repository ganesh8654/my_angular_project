import { Component } from "@angular/core";
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
    
  })
   export class servercomponent{
       serverid:number=1;
       serverStatus:string="offline";

       getServerStatus (){
           return this.serverStatus;
       }
    
   }