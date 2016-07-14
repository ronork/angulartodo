import {Component, Output, EventEmitter} from 'angular2/core';


@Component({
    selector: 'search-bar',
    template: `<label>Search for a task</label><input #input type="text" (input)="update.emit(input.value)">`
})
export class SearchBar{
    @Output() update = new EventEmitter();

    ngOnInit() {
        this.update.emit('');
    }

}