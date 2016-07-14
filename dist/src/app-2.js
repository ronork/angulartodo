var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var App = (function () {
    function App() {
        this.name = 'Max';
        this.blue = { 'blue': true };
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            encapsulation: core_1.ViewEncapsulation.Emulated,
            styles: [
                ".blue { background-color:blue; }\n              h1 { color: yellow }"
            ],
            /* the `` allows multilines */
            template: "<h1 [ngClass]=\"blue\">Hello Egghead, attendee: {{name}}</h1>\n                <p>Exercise 1</p> "
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
browser_1.bootstrap(App);
