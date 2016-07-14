var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var bootstrap_1 = require("angular2/bootstrap");
var core_1 = require('angular2/core');
var core_2 = require('angular2/core');
core_2.enableProdMode();
/* Components */
var my_input_1 = require('./components/my-input');
var todo_list_1 = require('./components/todo-list');
var status_selector_1 = require('./components/status-selector');
var search_bar_1 = require('./components/search-bar');
/* Services */
var todo_service_1 = require('./services/todo-service');
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [my_input_1.MyInput, todo_list_1.TodoList, status_selector_1.StatusSelector, search_bar_1.SearchBar],
            template: "\n  <div class=\"input-container\">\n    <my-input></my-input>\n  </div>\n  <div class=\"options-container\">\n  <div class=\"row \">\n    <div class=\"small-12 medium-10 large-8 medium-centered\">\n        <div class=\"small-12 medium-6 column\">\n            <status-selector (select)=\"status = $event\"></status-selector>\n        </div>\n        <div class=\"small-12 medium-6 column\">\n            <search-bar class=\"search-bar\" (update)=\"term = $event\" ></search-bar>\n        </div>\n    </div>\n  </div>\n  </div>\n\n  <todo-list [status]=\"status\" [term]=\"term\"></todo-list>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
bootstrap_1.bootstrap(App, [todo_service_1.TodoService]);
