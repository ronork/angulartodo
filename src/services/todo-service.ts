import {Injectable} from "angular2/core";
import {TodoModel} from "../models/todo-model";

@Injectable()
export class TodoService {
    todos =[]

    addTodo(todo:TodoModel){
        this.todos = [...this.todos,todo];
    }

    toggleTodo(todo:TodoModel){
        const status = todo.status == 'Started' ? 'Completed' : 'Started';
        const toggledTodo = Object.assign({},todo,{status : status});
        const index = this.todos.indexOf(todo);
        this.todos =[
            ...this.todos.slice(0,index),
            toggledTodo,
            ...this.todos.slice(index+1)
        ];
        console.log(this.todos);

    }
}