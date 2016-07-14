import {bootstrap} from "angular2/bootstrap";
import {Component} from 'angular2/core';
import {enableProdMode} from 'angular2/core';
enableProdMode();

/* Components */
import {MyInput} from './components/my-input';
import {TodoList} from './components/todo-list';
import {StatusSelector} from './components/status-selector';
import {SearchBar} from './components/search-bar';

/* Services */
import {TodoService} from './services/todo-service';

@Component({
  selector: 'app',
  directives:[MyInput,TodoList,StatusSelector,SearchBar],
  template: `
  <div class="input-container">
    <my-input></my-input>
  </div>
  <div class="options-container">
  <div class="row ">
    <div class="small-12 medium-10 large-8 medium-centered">
        <div class="small-12 medium-6 column">
            <status-selector (select)="status = $event"></status-selector>
        </div>
        <div class="small-12 medium-6 column">
            <search-bar class="search-bar" (update)="term = $event" ></search-bar>
        </div>
    </div>
  </div>
  </div>

  <todo-list [status]="status" [term]="term"></todo-list>
  `
})
class App {

}

bootstrap(App,[TodoService]);