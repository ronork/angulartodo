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
var NewPerson = (function () {
    function NewPerson() {
    }
    NewPerson = __decorate([
        core_1.Component({
            selector: 'new-person',
            template: "<div class=\"contact-details-new\">\n        <div class=\"contact-title-holder\">\n          <div class=\"media\">\n            <div class=\"media-left\">\n              <p>\n                <img src=\"assets/images/avatar-placeholder.png\" class=\"avatar-placeholder\" />\n              </p>\n              <button class=\"btn btn-default btn-file\">Select File</button>\n            </div>\n            <div class=\"media-body\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Full Name\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" id=\"company\" placeholder=\"Company\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <dl class=\"dl-horizontal\">\n          <dt>home:</dt>\n          <dd>\n            <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Home Phone\">\n          </dd>\n          <dt>address:</dt>\n          <dd>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" id=\"address1\" placeholder=\"Address Line 1\">\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Address Line 2\">\n            </div>\n          </dd>\n          <dt>email:</dt>\n          <dd>\n            <div class=\"form-group\">\n              <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\n            </div>\n          </dd>\n        </dl>\n      </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], NewPerson);
    return NewPerson;
})();
exports.NewPerson = NewPerson;
