import {Component} from 'angular2/core';
import {TodoService} from '../services/todo-service';
import {TodoModel} from '../models/todo-model';

@Component({
    selector: 'my-input',
    template: `
    <div class="row">
        <div class="small-12 medium-10 large-8 medium-centered column">
            <h1>Todo List</h1>
            <form (submit)="onSubmit(myInput)">
                <input class="enter-todo" #myInput type="text" [(ngModel)]="todoInput.title" placeholder="Enter a new task"/>
            </form>
        </div>
    </div>`
})
export class MyInput {

    todoInput:TodoModel = new TodoModel();

    constructor(public todoService:TodoService){

    }

    onSubmit(myInput) {
        this.todoService.addTodo(this.todoInput);
        myInput.value ='';
        myInput.focus();
        this.todoInput = new TodoModel();
    }
}
