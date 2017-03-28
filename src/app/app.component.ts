import { Component, OnInit } from '@angular/core';
import { NewProjectComponent } from './new-project/new-project.component';
import { DataService } from './data.service';
declare var firebase: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Project Manager';
  projects = [];

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.fbGetData();
  }
  fbGetData() {

    firebase.database().ref('/projects/').on('child_added', (snapshot) => {
      this.projects.push(snapshot.val())
    })
  }


}
