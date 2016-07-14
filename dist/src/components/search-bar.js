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
var SearchBar = (function () {
    function SearchBar() {
        this.update = new core_1.EventEmitter();
    }
    SearchBar.prototype.ngOnInit = function () {
        this.update.emit('');
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchBar.prototype, "update", void 0);
    SearchBar = __decorate([
        core_1.Component({
            selector: 'search-bar',
            template: "<label>Search for a task</label><input #input type=\"text\" (input)=\"update.emit(input.value)\">"
        }), 
        __metadata('design:paramtypes', [])
    ], SearchBar);
    return SearchBar;
})();
exports.SearchBar = SearchBar;
