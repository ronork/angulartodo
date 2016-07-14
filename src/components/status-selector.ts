import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector:'status-selector',
    template: `
        <label>View tasks</label>
        <select #sel (change)="select.emit(sel.value)">
            <option *ngFor="#status of statuses" > {{status}}</option>
        </select>`
})
export class StatusSelector {
    @Output() select = new EventEmitter();
    statuses = ['Started','Completed'];
    ngOnInit(){
        this.select.emit(this.statuses[0]);
    }
}