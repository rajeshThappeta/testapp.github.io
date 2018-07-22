(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _test1_test1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test1/test1.component */ "./src/app/test1/test1.component.ts");
/* harmony import */ var _test2_test2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test2/test2.component */ "./src/app/test2/test2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([{
                        path: 'test1', component: _test1_test1_component__WEBPACK_IMPORTED_MODULE_2__["Test1Component"]
                    },
                    {
                        path: 'test2',
                        component: _test2_test2_component__WEBPACK_IMPORTED_MODULE_3__["Test2Component"]
                    }])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin-left: 200px;\r\n    margin-right: 200px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark nav nav-tabs nav-justifieds fixed-top\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link text-white w-400px\" routerLink=\"/first\">First</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link text-white w-400px\" routerLink=\"/second\">Second</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link text-white -400px\" href=\"#\">One</a>\n        </li>\n    \n  </ul>\n</nav>\n\n  <!-- <div class=\"carousel slide mt-5\" data-ride=\"carousel\">\n    <div class=\"carousel-inner  \">\n      <div class=\"carousel-item active\">\n        <img src=\"/assets/2.jpg\"  class=\"d-block mx-auto w-300\" style=\"width:100%\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"/assets/1.jpeg\" class=\"d-block mx-auto w-300\" style=\"width:100%\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"/assets/3.jpg\" class=\"d-block mx-auto w-300\" style=\"width:100%\">\n      </div>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n</div> -->\n\n<!--<br/>\n<br/>\nName is:<h2 class=\" display-3 text-danger text-center\">{{name}}</h2><br/><hr/>\n\n<div class=\"row\">\n  <label for=\"fn\">Enter First number</label>\n  <input type=\"text\" id=\"fn\" class=\"form-control\" #ref1>\n</div>\n\n<div class=\"row \">\n    <label for=\"sn\">Enter Second number</label>\n    <input type=\"text\" id=\"sn\" class=\"form-control\" #ref2>\n  </div>\n  \n  <div class=\"col-8\">\n<button type=\"button\" class=\"btn btn-primary mt-3 \" (click)=\"add(ref1.value,ref2.value)\">Add</button> \n<button type=\"button\" class=\"btn btn-primary mt-3 \" (click)=\"add(ref1.value,ref2.value)\">Difference</button> \n<button type=\"button\" class=\"btn btn-primary mt-3 \" (click)=\"add(ref1.value,ref2.value)\">Product</button> \n<button type=\"button\" class=\"btn btn-primary mt-3 \" (click)=\"add(ref1.value,ref2.value)\">Division</button>\n</div>\n\n\n\n\n<div class=\"text-success display-2\">   {{sum}}</div>\n\n\n<button type=\"button\" (click)=\"showTable()\" class=\"btn btn-secondary\">{{bol? \"hide\":\"show\"}}</button>\n<div *ngIf=\"bol\">\n<table class=\"table table-hover\">\n<thead class=\"thead-dark\">\n  <th>Name</th>\n  <th>Age</th>\n  <th>City</th>\n</thead>\n<tr *ngFor=\"let row of names \">\n  <td>{{row.name}}</td>\n  <td>{{row.age}}</td>\n  <td>{{row.city}}</td>\n</tr>\n</table>\n</div>\n\n\n -->\n\n\n <!--<h1 class=\"diaplay-3 text-center\">Welcome</h1>\n<a routerLink=\"/third\">Third</a>\n<a routerLink=\"/forth\">Forth</a>\n<div class=\"row d-block\">\n<router-outlet></router-outlet>\n</div>\n\n<input type=\"text\" #ref [value]=\"hi\" (keyup.enter)=\"hiChange($event)\">\n{{hi}}\n-->\n<a routerLink=\"test1\">Test1</a>\n<a routerLink=\"test2\">Test2</a>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.bol = true;
        this.hi = "hello";
        this.name = "Calculator";
        this.color = ["red", "green", "blue"];
        this.names = [{ "name": "lishore", "age": 23, "city": "hyd" }, { "name": "lishore", "age": 23, "city": "hyd" },
            { "name": "lishore", "age": 23, "city": "hyd" }, { "name": "lishore", "age": 23, "city": "hyd" }];
        this.t1 = '';
    }
    AppComponent.prototype.showTable = function () {
        if (this.bol == true) {
            this.bol = false;
        }
        else {
            this.bol = true;
        }
    };
    AppComponent.prototype.addColor = function () {
        this.color.push(this.t1);
        this.t1 = '';
    };
    AppComponent.prototype.add = function (v1, v2) {
        //this.sum=(+v1)+(+v2);
        this.sum = Number(v1) + Number(v2);
    };
    AppComponent.prototype.hiChange = function (v) {
        this.hi = v.target.value;
        console.log(this.hi);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _first_first_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./first/first.component */ "./src/app/first/first.component.ts");
/* harmony import */ var _second_second_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./second/second.component */ "./src/app/second/second.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _third_third_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./third/third.component */ "./src/app/third/third.component.ts");
/* harmony import */ var _forth_forth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forth/forth.component */ "./src/app/forth/forth.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _test1_test1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./test1/test1.component */ "./src/app/test1/test1.component.ts");
/* harmony import */ var _test2_test2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./test2/test2.component */ "./src/app/test2/test2.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _test3_test3_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./test3/test3.component */ "./src/app/test3/test3.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _first_first_component__WEBPACK_IMPORTED_MODULE_3__["FirstComponent"],
                _second_second_component__WEBPACK_IMPORTED_MODULE_4__["SecondComponent"],
                _third_third_component__WEBPACK_IMPORTED_MODULE_7__["ThirdComponent"],
                _forth_forth_component__WEBPACK_IMPORTED_MODULE_8__["ForthComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__["PagenotfoundComponent"],
                _test1_test1_component__WEBPACK_IMPORTED_MODULE_10__["Test1Component"],
                _test2_test2_component__WEBPACK_IMPORTED_MODULE_11__["Test2Component"],
                _test3_test3_component__WEBPACK_IMPORTED_MODULE_13__["Test3Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/first/first.component.css":
/*!*******************************************!*\
  !*** ./src/app/first/first.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/first/first.component.html":
/*!********************************************!*\
  !*** ./src/app/first/first.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <title>Page Title</title>\n   \n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n   \n</head>\n<body>\n    <div class=\"container\">\n        <button   data-toggle=\"collapse\" data-target=\"#12\">Collapsible</button>\n        <div id=\"12\" class=\"collapse\">Hello...how  ru</div>\n\n        <button type=\"button\" data-toggle=\"modal\" data-target=\"#23\">\n            Modal button\n        </button>\n        <div class=\"modal fade \" id=\"23\">\n            <div class=\"modal-dialog \">\n                <div class=\"modal-content \">\n                    <div class=\"modal-header\"><h3 >Header</h3></div>\n                    <div class=\"modal-body bg-primary\">How  ru</div>\n                    <div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button></div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card p-5 bg-info\" style=\"width: 300px\" >\n            <img src=\"/assets/raj.jpg\" style=\"width: 100%\" class= \"card-img-top\">\n            <div class=\"card-body text-center\">\n                <h4 class=\"crad-title\">Rajesh</h4>\n                <p class=\"card-text\">Java and MEAN stack trainer at second campus learning solutions</p>\n                <button type=\"button\" data-toggle=\"modal\" data-target=\"#234\"class=\"btn btn-success\">See profile</button>\n                <div class=\"modal\" id=\"234\">\n                        <div class=\"modal-dialog\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header\"><h3 >Header</h3></div>\n                                <div class=\"modal-body\">How  ru</div>\n                                <div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button></div>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n        </div>\n\n\n\n\n        <div class=\"card-deck\">\n            <div class=\"card bg-primary\" style=\"width: 50%\">\n                    <img src=\"/assets/raj.jpg\" style=\"width: 100%\" class= \"card-img-top\">\n              <div class=\"card-body text-center\">\n                    <h4>Rajesh</h4>\n                    <p>Java and MEAN stack trainer at second campus learning solutions</p>\n                    <button type=\"button\" class=\"btn btn-success\">See profile</button>\n              </div>\n            </div>\n            <div class=\"card bg-warning\">\n                    <img src=\"/assets/raj.jpg\" style=\"width: 100%\" class= \"card-img-top\">\n              <div class=\"card-body text-center\">\n                    <h4>Rajesh</h4>\n                    <p>Java and MEAN stack trainer at second campus learning solutions</p>\n                    <button type=\"button\" class=\"btn btn-success\">See profile</button>\n              </div>\n            </div>\n            <div class=\"card bg-success\">\n                    <img src=\"/assets/raj.jpg\" style=\"width: 100%\" class= \"card-img-top\">\n              <div class=\"card-body text-center\">\n                    <h4>Rajesh</h4>\n                    <p>Java and MEAN stack trainer at second campus learning solutions</p>\n                    <button type=\"button\" class=\"btn btn-success\">See profile</button>\n              </div>\n            </div>\n            <div class=\"card bg-danger\">\n                    <img src=\"/assets/raj.jpg\" style=\"width: 100%\" class= \"card-img-top\">\n              <div class=\"card-body text-center\">\n                    <h4>Rajesh</h4>\n                    <p>Java and MEAN stack trainer at second campus learning solutions</p>\n                    <button type=\"button\" class=\"btn btn-success\">See profile</button>\n              </div>\n            </div> \n            <div class=\"card bg-danger\">\n                    <img src=\"/assets/raj.jpg\" style=\"width: 100%\" class= \"card-img-top\">\n              <div class=\"card-body text-center\">\n                    <h4>Rajesh</h4>\n                    <p>Java and MEAN stack trainer at second campus learning solutions</p>\n                    <button type=\"button\" class=\"btn btn-success\">See profile</button>\n              </div>\n            </div> \n            <div class=\"card bg-danger\">\n                    <img src=\"/assets/raj.jpg\" style=\"width: 100%\" class= \"card-img-top\">\n              <div class=\"card-body text-center\">\n                    <h4>Rajesh</h4>\n                    <p class=\"small\">Java and MEAN stack trainer at second campus learning solutions</p>\n                    <button type=\"button\" class=\"btn btn-success\">See profile</button>\n              </div>\n            </div> \n          </div>\n    </div>\n <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/first/first.component.ts":
/*!******************************************!*\
  !*** ./src/app/first/first.component.ts ***!
  \******************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstComponent = /** @class */ (function () {
    function FirstComponent() {
    }
    FirstComponent.prototype.ngOnInit = function () {
    };
    FirstComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first',
            template: __webpack_require__(/*! ./first.component.html */ "./src/app/first/first.component.html"),
            styles: [__webpack_require__(/*! ./first.component.css */ "./src/app/first/first.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "./src/app/forth/forth.component.css":
/*!*******************************************!*\
  !*** ./src/app/forth/forth.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\r\n    margin-left: 200px;\r\n    margin-right: 100px;\r\n    margin-top: 300px;\r\n    size: 200px;\r\n}"

/***/ }),

/***/ "./src/app/forth/forth.component.html":
/*!********************************************!*\
  !*** ./src/app/forth/forth.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width:500px\">\n  <img class=\"card-img-top\" src=\"/assets/raj.jpg\" alt=\"Card image\">\n  <div class=\"card-img-overlay\">\n    <h4 class=\"card-title\">Rajesh</h4>\n    <p class=\"card-text text-white text-center\">Java&MEAN Stack Trainer</p>\n    <a href=\"#\" class=\"btn btn-primary \">See Profile</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forth/forth.component.ts":
/*!******************************************!*\
  !*** ./src/app/forth/forth.component.ts ***!
  \******************************************/
/*! exports provided: ForthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForthComponent", function() { return ForthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForthComponent = /** @class */ (function () {
    function ForthComponent() {
    }
    ForthComponent.prototype.ngOnInit = function () {
    };
    ForthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forth',
            template: __webpack_require__(/*! ./forth.component.html */ "./src/app/forth/forth.component.html"),
            styles: [__webpack_require__(/*! ./forth.component.css */ "./src/app/forth/forth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForthComponent);
    return ForthComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/second/second.component.css":
/*!*********************************************!*\
  !*** ./src/app/second/second.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/second/second.component.html":
/*!**********************************************!*\
  !*** ./src/app/second/second.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\"\n        crossorigin=\"anonymous\">\n\n</head>\n\n<body>\n\n    <div class=\"container\">\n        <!-- <div class=\"row\">\n            <p class=\"col-12  border border-danger p-4 mt-5 bg-info text-white display-4\">Welcome to Bootstrap</p>\n        </div>\n\n\n\n        <div class=\" row mt-5\">\n            <div class=\"col-6 bg-info\">\n                <img src=\"raj.jpg\" class=\"img-fluid rounded  mx-auto d-block\" height=\"200px\" width=\"200px\">\n            </div>\n\n\n            <div class=\"col-6 bg-primary\">\n                <div class=\"row justify-content-center align-items-center   \">\n                    <form>\n                        <div class=\"form-group\">\n                            <label for=\"1\">Name</label>\n                            <input type=\"email\" placeholder=\"Email here...\" class=\"form-control\" id=\"1\">\n                            <br/>\n                        </div>\n                        <div class=\"form-group mt-2\">\n                            <label for=\"2\">Password</label>\n                            <input type=\"text\" class=\"form-control\" id=\"2\">\n                        </div>\n                        <div class=\"form-group form-check\">\n                            <label class=\"form-check-label\">\n                                <input type=\"checkbox\" class=\"form-check-input\">Remember me\n                            </label>\n                            <div class=\"custom-control custom-radio\">\n                                <input type=\"radio\" id=\"customRadio1\" name=\"customRadio\" class=\"custom-control-input\">\n                                <label class=\"custom-control-label\" for=\"customRadio1\">Toggle this custom radio</label>\n                              </div>\n                              <div class=\"custom-control custom-radio\">\n                                <input type=\"radio\" id=\"customRadio2\" name=\"customRadio\" class=\"custom-control-input\">\n                                <label class=\"custom-control-label\" for=\"customRadio2\">Or toggle this other custom radio</label>\n                              </div>\n                              <select class=\"custom-select\">\n                                <option selected>Open this select menu</option>\n                                <option value=\"1\">One</option>\n                                <option value=\"2\">Two</option>\n                                <option value=\"3\">Three</option>\n                              </select>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-success\">Login</button>\n\n                </div>\n                </form>\n            </div>\n\n        </div>\n\n\n        <div class=\"jumbotron mt-5 bg-info\"><p class=\"display-3 text-left text-light\">Jumbotron</p>\n            <p class=\"text-left\">This is a jumbotron</p>\n        </div>-->\n\n     \n           <!--  <ul class=\"nav nav-pills nav-justified \">\n                <li class=\"nav-item \"><a class=\"nav-link \" data-toggle=\"tab\" href=\"#\">One</a></li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\"data-toggle=\"dropdown\"  href=\"#\">DropdownMenu</a>\n                    <div class=\"dropdown-menu\">\n                        <a class=\"dropdown-item\" href=\"#\">One</a>\n                        <a class=\"dropdown-item\" href=\"#\">One</a>\n                        <a class=\"dropdown-item\" href=\"#\">One</a>\n                    </div>\n                </li>\n                <li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#\">Two</a></li>\n                <li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#\">Three</a></li>\n                <li class=\"nav-item\"><a class=\"nav-link\"  data-toggle=\"tab\" href=\"#\">Four</a></li>\n            </ul> -->\n\n            <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n          <ul class=\"navbar-nav \">\n              <li class=\"nav-item dropdown\">\n                  <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Link1</a>\n                    <div class=\" dropdown-menu\">\n                        <a class=\"dropdown-item\">One</a>\n                        <a class=\"dropdown-item\">One</a>\n                        <a class=\"dropdown-item\">One</a>\n                    </div>\n\n\n\n\n              </li>\n              \n              <li class=\"nav-item\">\n                <a class=\"navbar-brand\" data-toggle=\"tab\" href=\"#\">Link2</a>\n            </li>\n            \n            <li class=\"nav-item\">\n                <a class=\"navbar-brand\" href=\"#\">\n                    <img src=\"/assets/raj.jpg\" alt=\"Logo\" style=\"width:40px;\">\n                  </a>\n            </li>\n          </ul>\n      \n        </nav>\n    </div> \n\n   \n\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n        crossorigin=\"anonymous\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\"\n        crossorigin=\"anonymous\"></script>\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\" integrity=\"sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T\"\n        crossorigin=\"anonymous\"></script>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/second/second.component.ts":
/*!********************************************!*\
  !*** ./src/app/second/second.component.ts ***!
  \********************************************/
/*! exports provided: SecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function() { return SecondComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecondComponent = /** @class */ (function () {
    function SecondComponent() {
    }
    SecondComponent.prototype.ngOnInit = function () {
    };
    SecondComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-second',
            template: __webpack_require__(/*! ./second.component.html */ "./src/app/second/second.component.html"),
            styles: [__webpack_require__(/*! ./second.component.css */ "./src/app/second/second.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SecondComponent);
    return SecondComponent;
}());



/***/ }),

/***/ "./src/app/test1/test1.component.css":
/*!*******************************************!*\
  !*** ./src/app/test1/test1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test1/test1.component.html":
/*!********************************************!*\
  !*** ./src/app/test1/test1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form #ref=\"ngForm\">\n  <div *ngIf=\"show\">\n    \n      <input [value]=\"eno\" name=\"eno\" [(ngModel)]=\"eno\">\n      <input [value]=\"ename\" name=\"ename\" [(ngModel)]=\"ename\">\n      <input [value]=\"age\"  name=\"age\" [(ngModel)]=\"age\">\n      <button (click)=\"updateAndSaveRecord(ref.value)\">Update and Save</button>\n  </div>\n</form>\n  <table>\n    <th>Eno</th>\n    <th>Name</th>\n    <th>Age</th>\n    <tr *ngFor=\"let i of data\">\n      <td>{{i.eno}}</td>\n      <td>{{i.ename}}</td>\n      <td>{{i.age}}</td><button type=\"button\" (click)=\"deleteRecord(i)\">delete</button>\n      <button type=\"button\" (click)=\"editRecord(i)\">Edit</button>\n    </tr>\n  </table>"

/***/ }),

/***/ "./src/app/test1/test1.component.ts":
/*!******************************************!*\
  !*** ./src/app/test1/test1.component.ts ***!
  \******************************************/
/*! exports provided: Test1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test1Component", function() { return Test1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Test1Component = /** @class */ (function () {
    function Test1Component(http) {
        this.http = http;
        this.show = false;
    }
    Test1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/test1').subscribe(function (data) { return _this.data = data; });
    };
    Test1Component.prototype.deleteRecord = function (v) {
        var _this = this;
        console.log(v);
        this.http.delete('/test1' + "/" + v._id).subscribe(function (data) { return _this.data = data; });
    };
    Test1Component.prototype.editRecord = function (i) {
        this.currentobj = i;
        this.show = true;
        this.eno = i.eno;
        this.ename = i.ename;
        this.age = i.age;
    };
    Test1Component.prototype.updateAndSaveRecord = function (v) {
        var _this = this;
        v._id = this.currentobj._id;
        console.log(v);
        console.log(this.currentobj._id);
        this.http.put('/test1', v).subscribe(function (data) { return _this.data = data; });
        this.show = false;
    };
    Test1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test1',
            template: __webpack_require__(/*! ./test1.component.html */ "./src/app/test1/test1.component.html"),
            styles: [__webpack_require__(/*! ./test1.component.css */ "./src/app/test1/test1.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Test1Component);
    return Test1Component;
}());



/***/ }),

/***/ "./src/app/test2/test2.component.css":
/*!*******************************************!*\
  !*** ./src/app/test2/test2.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test2/test2.component.html":
/*!********************************************!*\
  !*** ./src/app/test2/test2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #ref=\"ngForm\" (ngSubmit)=\"onSubmit(ref.value)\">\n<input type='text' name=\"eno\" [(ngModel)]=\"eno\">\n<input type='text' name=\"ename\" [(ngModel)]=\"ename\">\n<input type='text' name=\"age\" [(ngModel)]=\"age\">\n<button type=\"submit\">Send</button>\n</form>"

/***/ }),

/***/ "./src/app/test2/test2.component.ts":
/*!******************************************!*\
  !*** ./src/app/test2/test2.component.ts ***!
  \******************************************/
/*! exports provided: Test2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test2Component", function() { return Test2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Test2Component = /** @class */ (function () {
    function Test2Component(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
                // 'Authorization': 'my-auth-token'
            })
        };
    }
    Test2Component.prototype.onSubmit = function (a) {
        var _this = this;
        // console.log(a);
        this.http.post('/test2', a).subscribe(function (data) {
            _this.data = data;
            alert(data['result']);
        });
    };
    Test2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test2',
            template: __webpack_require__(/*! ./test2.component.html */ "./src/app/test2/test2.component.html"),
            styles: [__webpack_require__(/*! ./test2.component.css */ "./src/app/test2/test2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Test2Component);
    return Test2Component;
}());



/***/ }),

/***/ "./src/app/test3/test3.component.css":
/*!*******************************************!*\
  !*** ./src/app/test3/test3.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test3/test3.component.html":
/*!********************************************!*\
  !*** ./src/app/test3/test3.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test3 works!\n</p>\n"

/***/ }),

/***/ "./src/app/test3/test3.component.ts":
/*!******************************************!*\
  !*** ./src/app/test3/test3.component.ts ***!
  \******************************************/
/*! exports provided: Test3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test3Component", function() { return Test3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Test3Component = /** @class */ (function () {
    function Test3Component() {
    }
    Test3Component.prototype.ngOnInit = function () {
    };
    Test3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test3',
            template: __webpack_require__(/*! ./test3.component.html */ "./src/app/test3/test3.component.html"),
            styles: [__webpack_require__(/*! ./test3.component.css */ "./src/app/test3/test3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Test3Component);
    return Test3Component;
}());



/***/ }),

/***/ "./src/app/third/third.component.css":
/*!*******************************************!*\
  !*** ./src/app/third/third.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n    margin-left:200px;\r\n    margin-right: 200px;\r\n    border:2px solid  brown;\r\n    border-bottom-color: brown;\r\n}"

/***/ }),

/***/ "./src/app/third/third.component.html":
/*!********************************************!*\
  !*** ./src/app/third/third.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"jumbotron \">\n    <p class=\"display-3 text-white\">Calculator</p>\n    <label for=\"1\" class=\"text-warning\">Enter first number</label>\n    <input type=\"text\" #ref1 class=\"form-control\" id=\"1\">\n    <label for=\"2\" class=\"text-warning\">Enter first number</label>\n    <input type=\"text\" #ref2 class=\"form-control button-group\" id=\"2\">\n    <button type=\"button\" class=\"btn btn-warning mt-4\" (click)=\"add(ref1.value,ref2.value)\"><span class=\"display-4\">+</span></button>\n    <button type=\"button\" class=\"btn btn-success mt-4 ml-1\" (click)=\"sub(ref1.value,ref2.value)\">-</button>\n    <button type=\"button\" class=\"btn btn-success mt-4 ml-1\" (click)=\"mul(ref1.value,ref2.value)\">x</button>\n    <button type=\"button\" class=\"btn btn-success mt-4 ml-1\" (click)=\"div(ref1.value,ref2.value)\">/</button>\n   \n    <p class=\"text-danger display-4\">Result is<span class=\"text-success ml-2\">{{sum}}</span></p> \n  </div>\n"

/***/ }),

/***/ "./src/app/third/third.component.ts":
/*!******************************************!*\
  !*** ./src/app/third/third.component.ts ***!
  \******************************************/
/*! exports provided: ThirdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdComponent", function() { return ThirdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThirdComponent = /** @class */ (function () {
    function ThirdComponent() {
    }
    ThirdComponent.prototype.ngOnInit = function () {
    };
    ThirdComponent.prototype.add = function (v1, v2) {
        this.sum = (+v1) + (+v2);
    };
    ThirdComponent.prototype.sub = function (v1, v2) {
        this.sum = (+v1) - (+v2);
    };
    ThirdComponent.prototype.mul = function (v1, v2) {
        this.sum = (+v1) * (+v2);
    };
    ThirdComponent.prototype.div = function (v1, v2) {
        this.sum = (+v1) / (+v2);
    };
    ThirdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-third',
            template: __webpack_require__(/*! ./third.component.html */ "./src/app/third/third.component.html"),
            styles: [__webpack_require__(/*! ./third.component.css */ "./src/app/third/third.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThirdComponent);
    return ThirdComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\angular6app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map