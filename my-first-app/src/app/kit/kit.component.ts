import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  styles: [`
     
     .online{
       color:yellow;
     }
  
  `]
})
export class KitComponent implements OnInit {
    serverId:number=10;
    serverstatus:string='online';
    serverName='my server';
    
  
    
    
    
    

  constructor() {
    this.serverstatus=Math.random()>0.5 ? 'online':'offline';
   }
   getColor(){
     return this.serverstatus=== 'online'?'green':'red';
   } 
    
   
  
   
  ngOnInit(): void {
  }

}
