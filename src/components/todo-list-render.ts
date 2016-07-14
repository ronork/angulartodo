import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'todo-list-render',
    styles: [`
        .Completed {
            text-decoration: line-through;
        }
    `],
    template:`
                <div class="todo-container">
                    <input type="checkbox" (change)="toggle.emit(todo)">
                    <span [ngClass]="todo.status">{{todo.title}}</span>
                </div>

                `
})
export class TodoListRender {
    @Input() todo;
    @Output() toggle = new EventEmitter();

}