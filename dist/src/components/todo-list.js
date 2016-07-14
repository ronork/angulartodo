var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var todo_service_1 = require('../services/todo-service');
var todo_list_render_1 = require('../components/todo-list-render');
var search_pipe_1 = require('../pipes/search-pipe');
var search_started_1 = require('../pipes/search-started');
var TodoList = (function () {
    function TodoList(todoService) {
        this.todoService = todoService;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoList.prototype, "status", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoList.prototype, "term", void 0);
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            pipes: [search_pipe_1.SearchPipe, search_started_1.SearchStarted],
            directives: [todo_list_render_1.TodoListRender],
            template: "\n    <div class=\"row\">\n       <div  class=\"small-12 medium-6 large-4 column end\"\n                        *ngFor=\"#todo of todoService.todos\n                                | started : status\n                                | search : term\"\n                    >\n          <todo-list-render class=\"todo-render\" [todo]=\"todo\" (toggle)=\"todoService.toggleTodo($event)\"></todo-list-render>\n       </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoList);
    return TodoList;
})();
exports.TodoList = TodoList;
