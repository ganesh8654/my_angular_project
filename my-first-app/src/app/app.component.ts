import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
   h1{
     color:blue;
   }
   
  `] 

  }
)
export class AppComponent {
  title = 'my-first-app';
  serverId:number=15;
  serverstatus:string='online';
  serverName='test server';
  serverConnectionStatus='server was not created';
  
  serverCreated=false;
  
  servers=['server1','server2'];
 
  
  


  getserverstatus(){
    return this.serverstatus
  }
  allownewserver=false;
  constructor(){
    setTimeout(()=>{
      this.allownewserver=true;
    },2000)
  }
  onCreateServer(){
    this.serverCreated=true;
    this.serverConnectionStatus='server was created! Name is' + this.serverName;
    this.servers.push(this.serverName);
  
    
  }
  onUpdateServerName(event:Event){
     this.serverName=(<HTMLInputElement>event.target).value;
  }
  
  

  ngOnInit(): void {
  }
    

  
  
 

  
}
