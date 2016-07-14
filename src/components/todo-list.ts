import {Component, Input} from 'angular2/core';
import {TodoService} from '../services/todo-service';
import {TodoListRender} from '../components/todo-list-render';
import {SearchPipe} from '../pipes/search-pipe';
import {SearchStarted} from '../pipes/search-started';


@Component({
    selector:'todo-list',
    pipes:[SearchPipe,SearchStarted],
    directives :[TodoListRender],
    template:`
    <div class="row">
       <div  class="small-12 medium-6 large-4 column end"
                        *ngFor="#todo of todoService.todos
                                | started : status
                                | search : term"
                    >
          <todo-list-render class="todo-render" [todo]="todo" (toggle)="todoService.toggleTodo($event)"></todo-list-render>
       </div>
    </div>
    `
})
export class TodoList {

    @Input() status;
    @Input() term;

    constructor(public todoService:TodoService){}

}