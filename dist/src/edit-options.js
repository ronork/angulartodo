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
var EditOptions = (function () {
    function EditOptions() {
        this.editing = false;
        this.editPerson = new core_1.EventEmitter();
    }
    EditOptions.prototype.editNow = function () {
        return !this.editing;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditOptions.prototype, "editPerson", void 0);
    EditOptions = __decorate([
        core_1.Component({
            selector: 'edit-options',
            template: "<div class=\"contact-edit\">\n        <button class=\"btn btn-default btn-edit\" (click)=\"editPerson.emit(editNow())\"><span class=\"glyphicon glyphicon-plus\"></span></button>\n        <button class=\"btn btn-default\">Edit</button>\n      </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], EditOptions);
    return EditOptions;
})();
exports.EditOptions = EditOptions;
