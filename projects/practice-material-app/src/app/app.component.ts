import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from 'projects/fist-material-sample-lib/src/lib/hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'practice-material-app';
  constructor(private helloWorldService: HelloWorldService){
    this.title = helloWorldService.message;
  }
  ngOnInit(){
    console.log('AppComponent loaded !!');
  }
}
