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
var TodoListRender = (function () {
    function TodoListRender() {
        this.toggle = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoListRender.prototype, "todo", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoListRender.prototype, "toggle", void 0);
    TodoListRender = __decorate([
        core_1.Component({
            selector: 'todo-list-render',
            styles: ["\n        .Completed {\n            text-decoration: line-through;\n        }\n    "],
            template: "\n                <div class=\"todo-container\">\n                    <input type=\"checkbox\" (change)=\"toggle.emit(todo)\">\n                    <span [ngClass]=\"todo.status\">{{todo.title}}</span>\n                </div>\n\n                "
        }), 
        __metadata('design:paramtypes', [])
    ], TodoListRender);
    return TodoListRender;
})();
exports.TodoListRender = TodoListRender;
