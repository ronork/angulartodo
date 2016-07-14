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
/* Components */
var contact_card_1 = require('./contact-card');
var contact_list_1 = require('./contact-list');
/* Services */
var person_service_1 = require('./person-service');
var contact_service_1 = require('./contact-service');
var App = (function () {
    function App(personService, peopleService) {
        this.personService = personService;
        this.peopleService = peopleService;
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [contact_card_1.ContactDetails, contact_list_1.ContactList],
            template: "\n <main class=\"app\">\n\n    <section class=\"contact-list-container\">\n      <h3><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Contacts</h3>\n      <contact-list [contactList]=\"peopleService.people\"></contact-list>\n\n\n    </section>\n\n    <section class=\"contact-details-container\">\n\n      <contact-card [person]=\"personService.person\"></contact-card>\n\n      <div class=\"contact-details-new\">\n\n        <div class=\"contact-title-holder\">\n          <div class=\"media\">\n            <div class=\"media-left\">\n              <p>\n                <img src=\"assets/images/avatar-placeholder.png\" class=\"avatar-placeholder\" />\n              </p>\n              <button class=\"btn btn-default btn-file\">Select File</button>\n            </div>\n            <div class=\"media-body\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Full Name\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" id=\"company\" placeholder=\"Company\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <dl class=\"dl-horizontal\">\n          <dt>home:</dt>\n          <dd>\n            <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Home Phone\">\n          </dd>\n          <dt>address:</dt>\n          <dd>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" id=\"address1\" placeholder=\"Address Line 1\">\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Address Line 2\">\n            </div>\n          </dd>\n          <dt>email:</dt>\n          <dd>\n            <div class=\"form-group\">\n              <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\n            </div>\n          </dd>\n        </dl>\n      </div>\n\n      <div class=\"contact-edit\">\n        <button class=\"btn btn-default btn-edit\"><span class=\"glyphicon glyphicon-plus\"></span></button>\n        <button class=\"btn btn-default\">Edit</button>\n      </div>\n\n    </section>\n\n  </main>\n     "
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, contact_service_1.ContactService])
    ], App);
    return App;
})();
browser_1.bootstrap(App, [person_service_1.PersonService, contact_service_1.ContactService]);
