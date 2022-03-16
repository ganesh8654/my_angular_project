import { Component,OnInit } from '@angular/core';
@Component({
    selector:'app-server',
    templateUrl:'./project.component.html',
    styleUrls:['./project.component.css']
    
    
  })
  export class ProjectComponent implements OnInit{
      allowNewServer=false;
      serverCreationStatus='server was not created';
      serverName='testServer'
       Constructor() { 
           setTimeout(() => {
               this.allowNewServer=true;
               
           },2000);

        }
         ngOnInit() {

         }
         onCreateServer(){
             this.serverCreationStatus='server was created name is'+this.serverName;
         }
         onUpdateServer(event:Event){
             this.serverName=(<HTMLInputElement>event.target).value;

         }
             
         }


  