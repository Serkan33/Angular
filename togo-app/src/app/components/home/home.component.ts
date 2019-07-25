import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data={
    todo:[],
    test:[],
    done:[]
  }

  constructor() {
    this.setData();
   }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        Object.keys(this.data).forEach(key=>{
                          localStorage.setItem(key,JSON.stringify(this.data[key]))
                         });
                       
    }
    console.log(event)
  }

  addTodo(pTodo){
   this.data.todo.push(pTodo.value);
    pTodo.value="";
    localStorage.setItem("todo",JSON.stringify(this.data.todo))
  }

  setData(){
    console.log(this.data);
    Object.keys(this.data).forEach(key=>{
     if(!localStorage.getItem(key)){
       localStorage.setItem(key,JSON.stringify(this.data[key]))
     }
     else{
       this.data[key]=JSON.parse(localStorage.getItem(key));
     }
    });
  }

}
