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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
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


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.API_URL = window.location.origin;
    }
    ApiService.prototype.getPackages = function () {
        return this.http.get(this.API_URL + "/api/package/listpackages");
    };
    ApiService.prototype.createPackage = function (data) {
        return this.http.post(this.API_URL + "/package/", data);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



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
/* harmony import */ var _package_view_package_view_package_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./package/view-package/view-package.component */ "./src/app/package/view-package/view-package.component.ts");
/* harmony import */ var _package_list_package_list_package_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./package/list-package/list-package.component */ "./src/app/package/list-package/list-package.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'viewpackage',
        component: _package_view_package_view_package_component__WEBPACK_IMPORTED_MODULE_2__["ViewPackageComponent"]
    },
    {
        path: 'packages',
        component: _package_list_package_list_package_component__WEBPACK_IMPORTED_MODULE_3__["ListPackageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<app-search></app-search>\n<a [routerLink]=\"'/packages'\"> View All </a>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        this.title = 'livigro';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _package_list_package_list_package_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./package/list-package/list-package.component */ "./src/app/package/list-package/list-package.component.ts");
/* harmony import */ var _package_view_package_view_package_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./package/view-package/view-package.component */ "./src/app/package/view-package/view-package.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _package_booking_booking_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./package/booking/booking.component */ "./src/app/package/booking/booking.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _user_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _package_list_package_list_package_component__WEBPACK_IMPORTED_MODULE_8__["ListPackageComponent"],
                _package_view_package_view_package_component__WEBPACK_IMPORTED_MODULE_9__["ViewPackageComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _package_booking_booking_component__WEBPACK_IMPORTED_MODULE_12__["BookingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/package/booking/booking.component.html":
/*!********************************************************!*\
  !*** ./src/app/package/booking/booking.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <div class=\"w3-light-grey\">\n  \n  \n  <div class=\"w3-content w3-margin-top\" style=\"max-width:1400px;\">\n  \n  \n    <div class=\"w3-row-padding\">\n    \n  \n  \n  \n      <div class=\"w3-twothird\" style=\"margin-left: 16vw;\">\n      \n  \n  \n        <div class=\"w3-container w3-card w3-white\">\n          <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Health Package</h2>\n              <h2 class=\"w3-text-grey w3-padding-16\" style=\"float:right\">Limited Time Offer : 1999</h2>\n            <button style=\"float:right;height: 50px;border-radius: 23px;margin-top: 7vw;margin-right: -16vw;color: white;background-color: #dd3f7e;\">Book Now</button>\n          <div class=\"w3-container\">\n            <h5 class=\"w3-opacity\"><b>Parameters included</b></h5>\n            <h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>76</h6>\n           \n            <hr>\n          </div>\n          <div class=\"w3-container\">\n            <h5 class=\"w3-opacity\"><b>Reporting Time \n  </b></h5>\n            <h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>24 Hours</h6>\n            \n            <hr>\n          </div>\n          <div class=\"w3-container\">\n            <h5 class=\"w3-opacity\"><b>Fasting Time</b></h5>\n            <h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>10 Hours</h6>\n          \n          </div>\n        </div>\n      <br>\n        <div class=\"w3-container w3-card w3-white\">\n          <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Parameters</h2>\n          <div class=\"w3-container\">\n  \n            <h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>Parameter 1</h6>\n        <h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>Parameter 2</h6>\n        <h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>Parameter 3</h6>\n        <h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>Parameter 4</h6>\n        <h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>Parameter 5</h6>\n            \n            <hr>\n          </div>\n  \n  \n        </div>\n      </div>\n      \n  \n    </div>\n    \n  \n  </div>\n  \n </div>"

/***/ }),

/***/ "./src/app/package/booking/booking.component.scss":
/*!********************************************************!*\
  !*** ./src/app/package/booking/booking.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/package/booking/booking.component.ts":
/*!******************************************************!*\
  !*** ./src/app/package/booking/booking.component.ts ***!
  \******************************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
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

var BookingComponent = /** @class */ (function () {
    function BookingComponent() {
    }
    BookingComponent.prototype.ngOnInit = function () {
    };
    BookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking',
            template: __webpack_require__(/*! ./booking.component.html */ "./src/app/package/booking/booking.component.html"),
            styles: [__webpack_require__(/*! ./booking.component.scss */ "./src/app/package/booking/booking.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BookingComponent);
    return BookingComponent;
}());



/***/ }),

/***/ "./src/app/package/list-package/list-package.component.html":
/*!******************************************************************!*\
  !*** ./src/app/package/list-package/list-package.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-5\">\n  <div class=\"row m-auto text-center\">\n    \n    <div class=\"col-md-3 princing-item red p-3\" *ngFor=\"let package of packages\">\n      <div class=\"pricing-divider \">\n          <p class=\"text-light\">{{package.packageName}}</p>\n        <b class=\"my-0 display-4 text-light font-weight-normal\"><span class=\"h3\">$</span> {{package.price}}</b>\n         <svg class='pricing-divider-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xml:space='preserve' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>\n      <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729\nc48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>\n      <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729\nc48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>\n      <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716\nH42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>\n      <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428\nc53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>\n    </svg>\n      </div>\n      <div class=\"card-body bg-white mt-0 shadow card-area\" >\n          <p>Parameters covered <b>{{package.tests.length}}</b></p>\n        <ul class=\"list-unstyled mb-5 position-relative\" *ngFor=\"let test of package.tests;let i=index\">\n          \n          <li *ngIf=\"i<3\">{{test.testId.testName}}</li>\n        </ul>\n        <p *ngIf=\"package.tests.length>3\">+<b>{{package.tests.length-3}}</b> more</p>\n        <center>\n        <p class=\"para\"><i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i> {{package.fasting}} hr fasting required </p>\n    </center>\n        <button type=\"button\" class=\"btn btn-lg btn-block  btn-custom demo-button\" (click)=\"viewPackage(package)\">Book</button>\n      </div>\n    </div>\n   \n\n           </div>\n           </div>\n         "

/***/ }),

/***/ "./src/app/package/list-package/list-package.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/package/list-package/list-package.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li {\n  padding: 1px; }\n\n.demo-button {\n  bottom: 0;\n  width: 75%;\n  margin-bottom: 3vw;\n  position: absolute; }\n\n.para {\n  bottom: 7vw;\n  position: absolute;\n  width: 80%; }\n\n.card-area {\n  height: 32vw; }\n\n.pricing-divider {\n  background: #e13c80;\n  padding: 1em 0 2em;\n  position: relative; }\n\n.red b {\n  color: #e13c80; }\n\n.pricing-divider-img {\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  height: 30px; }\n\n.deco-layer {\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s; }\n\n.btn-custom {\n  background: #e13c80;\n  color: #fff;\n  border-radius: 20px; }\n\n.img-float {\n  width: 50px;\n  position: absolute;\n  top: -3.5rem;\n  right: 1rem; }\n\n.princing-item {\n  transition: all 150ms ease-out; }\n\n.princing-item:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05); }\n\n.princing-item:hover .deco-layer--1 {\n  -webkit-transform: translate3d(15px, 0, 0);\n  transform: translate3d(15px, 0, 0); }\n\n.princing-item:hover .deco-layer--2 {\n  -webkit-transform: translate3d(-15px, 0, 0);\n  transform: translate3d(-15px, 0, 0); }\n"

/***/ }),

/***/ "./src/app/package/list-package/list-package.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/package/list-package/list-package.component.ts ***!
  \****************************************************************/
/*! exports provided: ListPackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPackageComponent", function() { return ListPackageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _package_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../package.service */ "./src/app/package/package.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPackageComponent = /** @class */ (function () {
    function ListPackageComponent(apiService, router, packageService) {
        this.apiService = apiService;
        this.router = router;
        this.packageService = packageService;
    }
    ListPackageComponent.prototype.ngOnInit = function () {
        this.listPackages();
    };
    ListPackageComponent.prototype.listPackages = function () {
        var _this = this;
        this.apiService.getPackages().subscribe(function (data) {
            _this.packages = data.data;
            console.log(data.data);
        });
    };
    ListPackageComponent.prototype.viewPackage = function (data) {
        this.packageService.setPackageInfo(data);
        this.router.navigate(['/viewpackage']);
    };
    ListPackageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-package',
            template: __webpack_require__(/*! ./list-package.component.html */ "./src/app/package/list-package/list-package.component.html"),
            styles: [__webpack_require__(/*! ./list-package.component.scss */ "./src/app/package/list-package/list-package.component.scss")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _package_service__WEBPACK_IMPORTED_MODULE_2__["PackageService"]])
    ], ListPackageComponent);
    return ListPackageComponent;
}());



/***/ }),

/***/ "./src/app/package/package.service.ts":
/*!********************************************!*\
  !*** ./src/app/package/package.service.ts ***!
  \********************************************/
/*! exports provided: PackageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageService", function() { return PackageService; });
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

var PackageService = /** @class */ (function () {
    function PackageService() {
    }
    PackageService.prototype.setPackageInfo = function (data) {
        this.packageInfo = data;
    };
    PackageService.prototype.getPackageInfo = function () {
        return this.packageInfo;
    };
    PackageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PackageService);
    return PackageService;
}());



/***/ }),

/***/ "./src/app/package/view-package/view-package.component.html":
/*!******************************************************************!*\
  !*** ./src/app/package/view-package/view-package.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <div class=\"w3-light-grey\">\n  \n  \n  <div class=\"w3-content w3-margin-top\" style=\"max-width:1400px;\">\n  \n  \n    <div class=\"w3-row-padding\">\n    \n  \n  \n  \n      <div class=\"w3-twothird\" style=\"margin-left: 16vw;\">\n      \n  \n  \n        <div class=\"w3-container w3-card w3-white\">\n          <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>{{packageInfo.packageName}}</h2>\n              <h2 class=\"w3-text-grey w3-padding-16\" style=\"float:right\">Limited Time Offer : {{packageInfo.price}}</h2>\n            <button style=\"float:right;height: 50px;border-radius: 23px;margin-top: 7vw;margin-right: -16vw;color: white;background-color: #dd3f7e;\">Book Now</button>\n          <div class=\"w3-container\">\n            <h5 class=\"w3-opacity\"><b>Parameters included</b></h5>\n            <h6 class=\"w3-text-teal\"><i class=\"fa fa-stethoscope fa-fw w3-margin-right\"></i>{{packageInfo.tests.length}}</h6>\n           \n            <hr>\n          </div>\n          <div class=\"w3-container\">\n            <h5 class=\"w3-opacity\"><b>Fasting Time</b></h5>\n            <h6 class=\"w3-text-teal\"><i class=\"fa fa-cutlery fa-fw w3-margin-right\"></i>{{packageInfo.fasting}} Hours</h6>\n          \n          </div>\n        </div>\n      <br>\n        <div class=\"w3-container w3-card w3-white\">\n          <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Parameters</h2>\n          <div class=\"w3-container\" *ngFor=\"let test of packageInfo.tests\">\n  \n            <h6 class=\"w3-text-teal\"><i class=\"fa fa-medkit fa-fw w3-margin-right\"></i>{{test.testId.testName}}</h6>\n           \n            <hr>\n          </div>\n  \n  \n        </div>\n      </div>\n      \n  \n    </div>\n    \n  \n  </div>\n  \n </div>\n</div>"

/***/ }),

/***/ "./src/app/package/view-package/view-package.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/package/view-package/view-package.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {\n  display: block; }\n\naudio, canvas, progress, video {\n  display: inline-block; }\n\nprogress {\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden], template {\n  display: none; }\n\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n\na:active, a:hover {\n  outline-width: 0; }\n\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; }\n\ndfn {\n  font-style: italic; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\nfigure {\n  margin: 1em 40px; }\n\nimg {\n  border-style: none; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\ncode, kbd, pre, samp {\n  font-family: monospace,monospace;\n  font-size: 1em; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nbutton, input, select, textarea {\n  font: inherit;\n  margin: 0; }\n\noptgroup {\n  font-weight: bold; }\n\nbutton, input {\n  overflow: visible; }\n\nbutton, select {\n  text-transform: none; }\n\nbutton, html [type=button], [type=reset], [type=submit] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\nbutton:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: .35em .625em .75em; }\n\nlegend {\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal; }\n\ntextarea {\n  overflow: auto; }\n\n[type=checkbox], [type=radio] {\n  padding: 0; }\n\n[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px; }\n\n[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54; }\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit; }\n\n/* End extract */\n\nhtml, body {\n  font-family: Verdana,sans-serif;\n  font-size: 15px;\n  line-height: 1.5; }\n\nhtml {\n  overflow-x: hidden; }\n\nh1 {\n  font-size: 36px; }\n\nh2 {\n  font-size: 30px; }\n\nh3 {\n  font-size: 24px; }\n\nh4 {\n  font-size: 20px; }\n\nh5 {\n  font-size: 18px; }\n\nh6 {\n  font-size: 16px; }\n\n.w3-serif {\n  font-family: serif; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Segoe UI\",Arial,sans-serif;\n  font-weight: 400;\n  margin: 10px 0; }\n\n.w3-wide {\n  letter-spacing: 4px; }\n\nhr {\n  border: 0;\n  border-top: 1px solid #eee;\n  margin: 20px 0; }\n\n.w3-image {\n  max-width: 100%;\n  height: auto; }\n\nimg {\n  vertical-align: middle; }\n\na {\n  color: inherit; }\n\n.w3-table, .w3-table-all {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  display: table; }\n\n.w3-table-all {\n  border: 1px solid #ccc; }\n\n.w3-bordered tr, .w3-table-all tr {\n  border-bottom: 1px solid #ddd; }\n\n.w3-striped tbody tr:nth-child(even) {\n  background-color: #f1f1f1; }\n\n.w3-table-all tr:nth-child(odd) {\n  background-color: #fff; }\n\n.w3-table-all tr:nth-child(even) {\n  background-color: #f1f1f1; }\n\n.w3-hoverable tbody tr:hover, .w3-ul.w3-hoverable li:hover {\n  background-color: #ccc; }\n\n.w3-centered tr th, .w3-centered tr td {\n  text-align: center; }\n\n.w3-table td, .w3-table th, .w3-table-all td, .w3-table-all th {\n  padding: 8px 8px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: top; }\n\n.w3-table th:first-child, .w3-table td:first-child, .w3-table-all th:first-child, .w3-table-all td:first-child {\n  padding-left: 16px; }\n\n.w3-btn, .w3-button {\n  border: none;\n  display: inline-block;\n  padding: 8px 16px;\n  vertical-align: middle;\n  overflow: hidden;\n  text-decoration: none;\n  color: inherit;\n  background-color: inherit;\n  text-align: center;\n  cursor: pointer;\n  white-space: nowrap; }\n\n.w3-btn:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.w3-btn, .w3-button {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.w3-disabled, .w3-btn:disabled, .w3-button:disabled {\n  cursor: not-allowed;\n  opacity: 0.3; }\n\n.w3-disabled *, :disabled * {\n  pointer-events: none; }\n\n.w3-btn.w3-disabled:hover, .w3-btn:disabled:hover {\n  box-shadow: none; }\n\n.w3-badge, .w3-tag {\n  background-color: #000;\n  color: #fff;\n  display: inline-block;\n  padding-left: 8px;\n  padding-right: 8px;\n  text-align: center; }\n\n.w3-badge {\n  border-radius: 50%; }\n\n.w3-ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0; }\n\n.w3-ul li {\n  padding: 8px 16px;\n  border-bottom: 1px solid #ddd; }\n\n.w3-ul li:last-child {\n  border-bottom: none; }\n\n.w3-tooltip, .w3-display-container {\n  position: relative; }\n\n.w3-tooltip .w3-text {\n  display: none; }\n\n.w3-tooltip:hover .w3-text {\n  display: inline-block; }\n\n.w3-ripple:active {\n  opacity: 0.5; }\n\n.w3-ripple {\n  transition: opacity 0s; }\n\n.w3-input {\n  padding: 8px;\n  display: block;\n  border: none;\n  border-bottom: 1px solid #ccc;\n  width: 100%; }\n\n.w3-select {\n  padding: 9px 0;\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #ccc; }\n\n.w3-dropdown-click, .w3-dropdown-hover {\n  position: relative;\n  display: inline-block;\n  cursor: pointer; }\n\n.w3-dropdown-hover:hover .w3-dropdown-content {\n  display: block; }\n\n.w3-dropdown-hover:first-child, .w3-dropdown-click:hover {\n  background-color: #ccc;\n  color: #000; }\n\n.w3-dropdown-hover:hover > .w3-button:first-child, .w3-dropdown-click:hover > .w3-button:first-child {\n  background-color: #ccc;\n  color: #000; }\n\n.w3-dropdown-content {\n  cursor: auto;\n  color: #000;\n  background-color: #fff;\n  display: none;\n  position: absolute;\n  min-width: 160px;\n  margin: 0;\n  padding: 0;\n  z-index: 1; }\n\n.w3-check, .w3-radio {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  top: 6px; }\n\n.w3-sidebar {\n  height: 100%;\n  width: 200px;\n  background-color: #fff;\n  position: fixed !important;\n  z-index: 1;\n  overflow: auto; }\n\n.w3-bar-block .w3-dropdown-hover, .w3-bar-block .w3-dropdown-click {\n  width: 100%; }\n\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content, .w3-bar-block .w3-dropdown-click .w3-dropdown-content {\n  min-width: 100%; }\n\n.w3-bar-block .w3-dropdown-hover .w3-button, .w3-bar-block .w3-dropdown-click .w3-button {\n  width: 100%;\n  text-align: left;\n  padding: 8px 16px; }\n\n.w3-main, #main {\n  transition: margin-left .4s; }\n\n.w3-modal {\n  z-index: 3;\n  display: none;\n  padding-top: 100px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.w3-modal-content {\n  margin: auto;\n  background-color: #fff;\n  position: relative;\n  padding: 0;\n  outline: 0;\n  width: 600px; }\n\n.w3-bar {\n  width: 100%;\n  overflow: hidden; }\n\n.w3-center .w3-bar {\n  display: inline-block;\n  width: auto; }\n\n.w3-bar .w3-bar-item {\n  padding: 8px 16px;\n  float: left;\n  width: auto;\n  border: none;\n  display: block;\n  outline: 0; }\n\n.w3-bar .w3-dropdown-hover, .w3-bar .w3-dropdown-click {\n  position: static;\n  float: left; }\n\n.w3-bar .w3-button {\n  white-space: normal; }\n\n.w3-bar-block .w3-bar-item {\n  width: 100%;\n  display: block;\n  padding: 8px 16px;\n  text-align: left;\n  border: none;\n  white-space: normal;\n  float: none;\n  outline: 0; }\n\n.w3-bar-block.w3-center .w3-bar-item {\n  text-align: center; }\n\n.w3-block {\n  display: block;\n  width: 100%; }\n\n.w3-responsive {\n  display: block;\n  overflow-x: auto; }\n\n.w3-container:after, .w3-container:before, .w3-panel:after, .w3-panel:before, .w3-row:after, .w3-row:before, .w3-row-padding:after, .w3-row-padding:before,\n.w3-cell-row:before, .w3-cell-row:after, .w3-clear:after, .w3-clear:before, .w3-bar:before, .w3-bar:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.w3-col, .w3-half, .w3-third, .w3-twothird, .w3-threequarter, .w3-quarter {\n  float: left;\n  width: 100%; }\n\n.w3-col.s1 {\n  width: 8.33333%; }\n\n.w3-col.s2 {\n  width: 16.66666%; }\n\n.w3-col.s3 {\n  width: 24.99999%; }\n\n.w3-col.s4 {\n  width: 33.33333%; }\n\n.w3-col.s5 {\n  width: 41.66666%; }\n\n.w3-col.s6 {\n  width: 49.99999%; }\n\n.w3-col.s7 {\n  width: 58.33333%; }\n\n.w3-col.s8 {\n  width: 66.66666%; }\n\n.w3-col.s9 {\n  width: 74.99999%; }\n\n.w3-col.s10 {\n  width: 83.33333%; }\n\n.w3-col.s11 {\n  width: 91.66666%; }\n\n.w3-col.s12 {\n  width: 99.99999%; }\n\n@media (min-width: 601px) {\n  .w3-col.m1 {\n    width: 8.33333%; }\n  .w3-col.m2 {\n    width: 16.66666%; }\n  .w3-col.m3, .w3-quarter {\n    width: 24.99999%; }\n  .w3-col.m4, .w3-third {\n    width: 33.33333%; }\n  .w3-col.m5 {\n    width: 41.66666%; }\n  .w3-col.m6, .w3-half {\n    width: 49.99999%; }\n  .w3-col.m7 {\n    width: 58.33333%; }\n  .w3-col.m8, .w3-twothird {\n    width: 66.66666%; }\n  .w3-col.m9, .w3-threequarter {\n    width: 74.99999%; }\n  .w3-col.m10 {\n    width: 83.33333%; }\n  .w3-col.m11 {\n    width: 91.66666%; }\n  .w3-col.m12 {\n    width: 99.99999%; } }\n\n@media (min-width: 993px) {\n  .w3-col.l1 {\n    width: 8.33333%; }\n  .w3-col.l2 {\n    width: 16.66666%; }\n  .w3-col.l3 {\n    width: 24.99999%; }\n  .w3-col.l4 {\n    width: 33.33333%; }\n  .w3-col.l5 {\n    width: 41.66666%; }\n  .w3-col.l6 {\n    width: 49.99999%; }\n  .w3-col.l7 {\n    width: 58.33333%; }\n  .w3-col.l8 {\n    width: 66.66666%; }\n  .w3-col.l9 {\n    width: 74.99999%; }\n  .w3-col.l10 {\n    width: 83.33333%; }\n  .w3-col.l11 {\n    width: 91.66666%; }\n  .w3-col.l12 {\n    width: 99.99999%; } }\n\n.w3-rest {\n  overflow: hidden; }\n\n.w3-stretch {\n  margin-left: -16px;\n  margin-right: -16px; }\n\n.w3-content, .w3-auto {\n  margin-left: auto;\n  margin-right: auto; }\n\n.w3-content {\n  max-width: 980px; }\n\n.w3-auto {\n  max-width: 1140px; }\n\n.w3-cell-row {\n  display: table;\n  width: 100%; }\n\n.w3-cell {\n  display: table-cell; }\n\n.w3-cell-top {\n  vertical-align: top; }\n\n.w3-cell-middle {\n  vertical-align: middle; }\n\n.w3-cell-bottom {\n  vertical-align: bottom; }\n\n.w3-hide {\n  display: none !important; }\n\n.w3-show-block, .w3-show {\n  display: block !important; }\n\n.w3-show-inline-block {\n  display: inline-block !important; }\n\n@media (max-width: 1205px) {\n  .w3-auto {\n    max-width: 95%; } }\n\n@media (max-width: 600px) {\n  .w3-modal-content {\n    margin: 0 10px;\n    width: auto !important; }\n  .w3-modal {\n    padding-top: 30px; }\n  .w3-dropdown-hover.w3-mobile .w3-dropdown-content, .w3-dropdown-click.w3-mobile .w3-dropdown-content {\n    position: relative; }\n  .w3-hide-small {\n    display: none !important; }\n  .w3-mobile {\n    display: block;\n    width: 100% !important; }\n  .w3-bar-item.w3-mobile, .w3-dropdown-hover.w3-mobile, .w3-dropdown-click.w3-mobile {\n    text-align: center; }\n  .w3-dropdown-hover.w3-mobile, .w3-dropdown-hover.w3-mobile .w3-btn, .w3-dropdown-hover.w3-mobile .w3-button, .w3-dropdown-click.w3-mobile, .w3-dropdown-click.w3-mobile .w3-btn, .w3-dropdown-click.w3-mobile .w3-button {\n    width: 100%; } }\n\n@media (max-width: 768px) {\n  .w3-modal-content {\n    width: 500px; }\n  .w3-modal {\n    padding-top: 50px; } }\n\n@media (min-width: 993px) {\n  .w3-modal-content {\n    width: 900px; }\n  .w3-hide-large {\n    display: none !important; }\n  .w3-sidebar.w3-collapse {\n    display: block !important; } }\n\n@media (max-width: 992px) and (min-width: 601px) {\n  .w3-hide-medium {\n    display: none !important; } }\n\n@media (max-width: 992px) {\n  .w3-sidebar.w3-collapse {\n    display: none; }\n  .w3-main {\n    margin-left: 0 !important;\n    margin-right: 0 !important; }\n  .w3-auto {\n    max-width: 100%; } }\n\n.w3-top, .w3-bottom {\n  position: fixed;\n  width: 100%;\n  z-index: 1; }\n\n.w3-top {\n  top: 0; }\n\n.w3-bottom {\n  bottom: 0; }\n\n.w3-overlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2; }\n\n.w3-display-topleft {\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.w3-display-topright {\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.w3-display-bottomleft {\n  position: absolute;\n  left: 0;\n  bottom: 0; }\n\n.w3-display-bottomright {\n  position: absolute;\n  right: 0;\n  bottom: 0; }\n\n.w3-display-middle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n\n.w3-display-left {\n  position: absolute;\n  top: 50%;\n  left: 0%;\n  -webkit-transform: translate(0%, -50%);\n          transform: translate(0%, -50%);\n  -ms-transform: translate(0%, -50%); }\n\n.w3-display-right {\n  position: absolute;\n  top: 50%;\n  right: 0%;\n  -webkit-transform: translate(0%, -50%);\n          transform: translate(0%, -50%);\n  -ms-transform: translate(0%, -50%); }\n\n.w3-display-topmiddle {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  -webkit-transform: translate(-50%, 0%);\n          transform: translate(-50%, 0%);\n  -ms-transform: translate(-50%, 0%); }\n\n.w3-display-bottommiddle {\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  -webkit-transform: translate(-50%, 0%);\n          transform: translate(-50%, 0%);\n  -ms-transform: translate(-50%, 0%); }\n\n.w3-display-container:hover .w3-display-hover {\n  display: block; }\n\n.w3-display-container:hover span.w3-display-hover {\n  display: inline-block; }\n\n.w3-display-hover {\n  display: none; }\n\n.w3-display-position {\n  position: absolute; }\n\n.w3-circle {\n  border-radius: 50%; }\n\n.w3-round-small {\n  border-radius: 2px; }\n\n.w3-round, .w3-round-medium {\n  border-radius: 4px; }\n\n.w3-round-large {\n  border-radius: 8px; }\n\n.w3-round-xlarge {\n  border-radius: 16px; }\n\n.w3-round-xxlarge {\n  border-radius: 32px; }\n\n.w3-row-padding, .w3-row-padding > .w3-half, .w3-row-padding > .w3-third, .w3-row-padding > .w3-twothird, .w3-row-padding > .w3-threequarter, .w3-row-padding > .w3-quarter, .w3-row-padding > .w3-col {\n  padding: 0 8px; }\n\n.w3-container, .w3-panel {\n  padding: 0.01em 16px; }\n\n.w3-panel {\n  margin-top: 16px;\n  margin-bottom: 16px; }\n\n.w3-code, .w3-codespan {\n  font-family: Consolas,\"courier new\";\n  font-size: 16px; }\n\n.w3-code {\n  width: auto;\n  background-color: #fff;\n  padding: 8px 12px;\n  border-left: 4px solid #4CAF50;\n  word-wrap: break-word; }\n\n.w3-codespan {\n  color: crimson;\n  background-color: #f1f1f1;\n  padding-left: 4px;\n  padding-right: 4px;\n  font-size: 110%; }\n\n.w3-card, .w3-card-2 {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n\n.w3-card-4, .w3-hover-shadow:hover {\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.w3-spin {\n  -webkit-animation: w3-spin 2s infinite linear;\n          animation: w3-spin 2s infinite linear; }\n\n@-webkit-keyframes w3-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg); } }\n\n@keyframes w3-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg); } }\n\n.w3-animate-fading {\n  -webkit-animation: fading 10s infinite;\n          animation: fading 10s infinite; }\n\n@-webkit-keyframes fading {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fading {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.w3-animate-opacity {\n  -webkit-animation: opac 0.8s;\n          animation: opac 0.8s; }\n\n@-webkit-keyframes opac {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes opac {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.w3-animate-top {\n  position: relative;\n  -webkit-animation: animatetop 0.4s;\n          animation: animatetop 0.4s; }\n\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n.w3-animate-left {\n  position: relative;\n  -webkit-animation: animateleft 0.4s;\n          animation: animateleft 0.4s; }\n\n@-webkit-keyframes animateleft {\n  from {\n    left: -300px;\n    opacity: 0; }\n  to {\n    left: 0;\n    opacity: 1; } }\n\n@keyframes animateleft {\n  from {\n    left: -300px;\n    opacity: 0; }\n  to {\n    left: 0;\n    opacity: 1; } }\n\n.w3-animate-right {\n  position: relative;\n  -webkit-animation: animateright 0.4s;\n          animation: animateright 0.4s; }\n\n@-webkit-keyframes animateright {\n  from {\n    right: -300px;\n    opacity: 0; }\n  to {\n    right: 0;\n    opacity: 1; } }\n\n@keyframes animateright {\n  from {\n    right: -300px;\n    opacity: 0; }\n  to {\n    right: 0;\n    opacity: 1; } }\n\n.w3-animate-bottom {\n  position: relative;\n  -webkit-animation: animatebottom 0.4s;\n          animation: animatebottom 0.4s; }\n\n@-webkit-keyframes animatebottom {\n  from {\n    bottom: -300px;\n    opacity: 0; }\n  to {\n    bottom: 0;\n    opacity: 1; } }\n\n@keyframes animatebottom {\n  from {\n    bottom: -300px;\n    opacity: 0; }\n  to {\n    bottom: 0;\n    opacity: 1; } }\n\n.w3-animate-zoom {\n  -webkit-animation: animatezoom 0.6s;\n          animation: animatezoom 0.6s; }\n\n@-webkit-keyframes animatezoom {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes animatezoom {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n.w3-animate-input {\n  transition: width 0.4s ease-in-out; }\n\n.w3-animate-input:focus {\n  width: 100% !important; }\n\n.w3-opacity, .w3-hover-opacity:hover {\n  opacity: 0.60; }\n\n.w3-opacity-off, .w3-hover-opacity-off:hover {\n  opacity: 1; }\n\n.w3-opacity-max {\n  opacity: 0.25; }\n\n.w3-opacity-min {\n  opacity: 0.75; }\n\n.w3-greyscale-max, .w3-grayscale-max, .w3-hover-greyscale:hover, .w3-hover-grayscale:hover {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%); }\n\n.w3-greyscale, .w3-grayscale {\n  -webkit-filter: grayscale(75%);\n          filter: grayscale(75%); }\n\n.w3-greyscale-min, .w3-grayscale-min {\n  -webkit-filter: grayscale(50%);\n          filter: grayscale(50%); }\n\n.w3-sepia {\n  -webkit-filter: sepia(75%);\n          filter: sepia(75%); }\n\n.w3-sepia-max, .w3-hover-sepia:hover {\n  -webkit-filter: sepia(100%);\n          filter: sepia(100%); }\n\n.w3-sepia-min {\n  -webkit-filter: sepia(50%);\n          filter: sepia(50%); }\n\n.w3-tiny {\n  font-size: 10px !important; }\n\n.w3-small {\n  font-size: 12px !important; }\n\n.w3-medium {\n  font-size: 15px !important; }\n\n.w3-large {\n  font-size: 18px !important; }\n\n.w3-xlarge {\n  font-size: 24px !important; }\n\n.w3-xxlarge {\n  font-size: 36px !important; }\n\n.w3-xxxlarge {\n  font-size: 48px !important; }\n\n.w3-jumbo {\n  font-size: 64px !important; }\n\n.w3-left-align {\n  text-align: left !important; }\n\n.w3-right-align {\n  text-align: right !important; }\n\n.w3-justify {\n  text-align: justify !important; }\n\n.w3-center {\n  text-align: center !important; }\n\n.w3-border-0 {\n  border: 0 !important; }\n\n.w3-border {\n  border: 1px solid #ccc !important; }\n\n.w3-border-top {\n  border-top: 1px solid #ccc !important; }\n\n.w3-border-bottom {\n  border-bottom: 1px solid #ccc !important; }\n\n.w3-border-left {\n  border-left: 1px solid #ccc !important; }\n\n.w3-border-right {\n  border-right: 1px solid #ccc !important; }\n\n.w3-topbar {\n  border-top: 6px solid #ccc !important; }\n\n.w3-bottombar {\n  border-bottom: 6px solid #ccc !important; }\n\n.w3-leftbar {\n  border-left: 6px solid #ccc !important; }\n\n.w3-rightbar {\n  border-right: 6px solid #ccc !important; }\n\n.w3-section, .w3-code {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important; }\n\n.w3-margin {\n  margin: 16px !important; }\n\n.w3-margin-top {\n  margin-top: 16px !important; }\n\n.w3-margin-bottom {\n  margin-bottom: 16px !important; }\n\n.w3-margin-left {\n  margin-left: 16px !important; }\n\n.w3-margin-right {\n  margin-right: 16px !important; }\n\n.w3-padding-small {\n  padding: 4px 8px !important; }\n\n.w3-padding {\n  padding: 8px 16px !important; }\n\n.w3-padding-large {\n  padding: 12px 24px !important; }\n\n.w3-padding-16 {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important; }\n\n.w3-padding-24 {\n  padding-top: 24px !important;\n  padding-bottom: 24px !important; }\n\n.w3-padding-32 {\n  padding-top: 32px !important;\n  padding-bottom: 32px !important; }\n\n.w3-padding-48 {\n  padding-top: 48px !important;\n  padding-bottom: 48px !important; }\n\n.w3-padding-64 {\n  padding-top: 64px !important;\n  padding-bottom: 64px !important; }\n\n.w3-left {\n  float: left !important; }\n\n.w3-right {\n  float: right !important; }\n\n.w3-button:hover {\n  color: #000 !important;\n  background-color: #ccc !important; }\n\n.w3-transparent, .w3-hover-none:hover {\n  background-color: transparent !important; }\n\n.w3-hover-none:hover {\n  box-shadow: none !important; }\n\n/* Colors */\n\n.w3-amber, .w3-hover-amber:hover {\n  color: #000 !important;\n  background-color: #ffc107 !important; }\n\n.w3-aqua, .w3-hover-aqua:hover {\n  color: #000 !important;\n  background-color: #00ffff !important; }\n\n.w3-blue, .w3-hover-blue:hover {\n  color: #fff !important;\n  background-color: #2196F3 !important; }\n\n.w3-light-blue, .w3-hover-light-blue:hover {\n  color: #000 !important;\n  background-color: #87CEEB !important; }\n\n.w3-brown, .w3-hover-brown:hover {\n  color: #fff !important;\n  background-color: #795548 !important; }\n\n.w3-cyan, .w3-hover-cyan:hover {\n  color: #000 !important;\n  background-color: #00bcd4 !important; }\n\n.w3-blue-grey, .w3-hover-blue-grey:hover, .w3-blue-gray, .w3-hover-blue-gray:hover {\n  color: #fff !important;\n  background-color: #607d8b !important; }\n\n.w3-green, .w3-hover-green:hover {\n  color: #fff !important;\n  background-color: #4CAF50 !important; }\n\n.w3-light-green, .w3-hover-light-green:hover {\n  color: #000 !important;\n  background-color: #8bc34a !important; }\n\n.w3-indigo, .w3-hover-indigo:hover {\n  color: #fff !important;\n  background-color: #3f51b5 !important; }\n\n.w3-khaki, .w3-hover-khaki:hover {\n  color: #000 !important;\n  background-color: #f0e68c !important; }\n\n.w3-lime, .w3-hover-lime:hover {\n  color: #000 !important;\n  background-color: #cddc39 !important; }\n\n.w3-orange, .w3-hover-orange:hover {\n  color: #000 !important;\n  background-color: #ff9800 !important; }\n\n.w3-deep-orange, .w3-hover-deep-orange:hover {\n  color: #fff !important;\n  background-color: #ff5722 !important; }\n\n.w3-pink, .w3-hover-pink:hover {\n  color: #fff !important;\n  background-color: #e91e63 !important; }\n\n.w3-purple, .w3-hover-purple:hover {\n  color: #fff !important;\n  background-color: #9c27b0 !important; }\n\n.w3-deep-purple, .w3-hover-deep-purple:hover {\n  color: #fff !important;\n  background-color: #673ab7 !important; }\n\n.w3-red, .w3-hover-red:hover {\n  color: #fff !important;\n  background-color: #f44336 !important; }\n\n.w3-sand, .w3-hover-sand:hover {\n  color: #000 !important;\n  background-color: #fdf5e6 !important; }\n\n.w3-teal, .w3-hover-teal:hover {\n  color: #fff !important;\n  background-color: #009688 !important; }\n\n.w3-yellow, .w3-hover-yellow:hover {\n  color: #000 !important;\n  background-color: #ffeb3b !important; }\n\n.w3-white, .w3-hover-white:hover {\n  color: #000 !important;\n  background-color: #fff !important; }\n\n.w3-black, .w3-hover-black:hover {\n  color: #fff !important;\n  background-color: #000 !important; }\n\n.w3-grey, .w3-hover-grey:hover, .w3-gray, .w3-hover-gray:hover {\n  color: #000 !important;\n  background-color: #9e9e9e !important; }\n\n.w3-light-grey, .w3-hover-light-grey:hover, .w3-light-gray, .w3-hover-light-gray:hover {\n  color: #000 !important;\n  background-color: #f1f1f1 !important; }\n\n.w3-dark-grey, .w3-hover-dark-grey:hover, .w3-dark-gray, .w3-hover-dark-gray:hover {\n  color: #fff !important;\n  background-color: #616161 !important; }\n\n.w3-pale-red, .w3-hover-pale-red:hover {\n  color: #000 !important;\n  background-color: #ffdddd !important; }\n\n.w3-pale-green, .w3-hover-pale-green:hover {\n  color: #000 !important;\n  background-color: #ddffdd !important; }\n\n.w3-pale-yellow, .w3-hover-pale-yellow:hover {\n  color: #000 !important;\n  background-color: #ffffcc !important; }\n\n.w3-pale-blue, .w3-hover-pale-blue:hover {\n  color: #000 !important;\n  background-color: #ddffff !important; }\n\n.w3-text-amber, .w3-hover-text-amber:hover {\n  color: #ffc107 !important; }\n\n.w3-text-aqua, .w3-hover-text-aqua:hover {\n  color: #00ffff !important; }\n\n.w3-text-blue, .w3-hover-text-blue:hover {\n  color: #2196F3 !important; }\n\n.w3-text-light-blue, .w3-hover-text-light-blue:hover {\n  color: #87CEEB !important; }\n\n.w3-text-brown, .w3-hover-text-brown:hover {\n  color: #795548 !important; }\n\n.w3-text-cyan, .w3-hover-text-cyan:hover {\n  color: #00bcd4 !important; }\n\n.w3-text-blue-grey, .w3-hover-text-blue-grey:hover, .w3-text-blue-gray, .w3-hover-text-blue-gray:hover {\n  color: #607d8b !important; }\n\n.w3-text-green, .w3-hover-text-green:hover {\n  color: #4CAF50 !important; }\n\n.w3-text-light-green, .w3-hover-text-light-green:hover {\n  color: #8bc34a !important; }\n\n.w3-text-indigo, .w3-hover-text-indigo:hover {\n  color: #3f51b5 !important; }\n\n.w3-text-khaki, .w3-hover-text-khaki:hover {\n  color: #b4aa50 !important; }\n\n.w3-text-lime, .w3-hover-text-lime:hover {\n  color: #cddc39 !important; }\n\n.w3-text-orange, .w3-hover-text-orange:hover {\n  color: #ff9800 !important; }\n\n.w3-text-deep-orange, .w3-hover-text-deep-orange:hover {\n  color: #ff5722 !important; }\n\n.w3-text-pink, .w3-hover-text-pink:hover {\n  color: #e91e63 !important; }\n\n.w3-text-purple, .w3-hover-text-purple:hover {\n  color: #9c27b0 !important; }\n\n.w3-text-deep-purple, .w3-hover-text-deep-purple:hover {\n  color: #673ab7 !important; }\n\n.w3-text-red, .w3-hover-text-red:hover {\n  color: #f44336 !important; }\n\n.w3-text-sand, .w3-hover-text-sand:hover {\n  color: #fdf5e6 !important; }\n\n.w3-text-teal, .w3-hover-text-teal:hover {\n  color: #009688 !important; }\n\n.w3-text-yellow, .w3-hover-text-yellow:hover {\n  color: #d2be0e !important; }\n\n.w3-text-white, .w3-hover-text-white:hover {\n  color: #fff !important; }\n\n.w3-text-black, .w3-hover-text-black:hover {\n  color: #000 !important; }\n\n.w3-text-grey, .w3-hover-text-grey:hover, .w3-text-gray, .w3-hover-text-gray:hover {\n  color: #757575 !important; }\n\n.w3-text-light-grey, .w3-hover-text-light-grey:hover, .w3-text-light-gray, .w3-hover-text-light-gray:hover {\n  color: #f1f1f1 !important; }\n\n.w3-text-dark-grey, .w3-hover-text-dark-grey:hover, .w3-text-dark-gray, .w3-hover-text-dark-gray:hover {\n  color: #3a3a3a !important; }\n\n.w3-border-amber, .w3-hover-border-amber:hover {\n  border-color: #ffc107 !important; }\n\n.w3-border-aqua, .w3-hover-border-aqua:hover {\n  border-color: #00ffff !important; }\n\n.w3-border-blue, .w3-hover-border-blue:hover {\n  border-color: #2196F3 !important; }\n\n.w3-border-light-blue, .w3-hover-border-light-blue:hover {\n  border-color: #87CEEB !important; }\n\n.w3-border-brown, .w3-hover-border-brown:hover {\n  border-color: #795548 !important; }\n\n.w3-border-cyan, .w3-hover-border-cyan:hover {\n  border-color: #00bcd4 !important; }\n\n.w3-border-blue-grey, .w3-hover-border-blue-grey:hover, .w3-border-blue-gray, .w3-hover-border-blue-gray:hover {\n  border-color: #607d8b !important; }\n\n.w3-border-green, .w3-hover-border-green:hover {\n  border-color: #4CAF50 !important; }\n\n.w3-border-light-green, .w3-hover-border-light-green:hover {\n  border-color: #8bc34a !important; }\n\n.w3-border-indigo, .w3-hover-border-indigo:hover {\n  border-color: #3f51b5 !important; }\n\n.w3-border-khaki, .w3-hover-border-khaki:hover {\n  border-color: #f0e68c !important; }\n\n.w3-border-lime, .w3-hover-border-lime:hover {\n  border-color: #cddc39 !important; }\n\n.w3-border-orange, .w3-hover-border-orange:hover {\n  border-color: #ff9800 !important; }\n\n.w3-border-deep-orange, .w3-hover-border-deep-orange:hover {\n  border-color: #ff5722 !important; }\n\n.w3-border-pink, .w3-hover-border-pink:hover {\n  border-color: #e91e63 !important; }\n\n.w3-border-purple, .w3-hover-border-purple:hover {\n  border-color: #9c27b0 !important; }\n\n.w3-border-deep-purple, .w3-hover-border-deep-purple:hover {\n  border-color: #673ab7 !important; }\n\n.w3-border-red, .w3-hover-border-red:hover {\n  border-color: #f44336 !important; }\n\n.w3-border-sand, .w3-hover-border-sand:hover {\n  border-color: #fdf5e6 !important; }\n\n.w3-border-teal, .w3-hover-border-teal:hover {\n  border-color: #009688 !important; }\n\n.w3-border-yellow, .w3-hover-border-yellow:hover {\n  border-color: #ffeb3b !important; }\n\n.w3-border-white, .w3-hover-border-white:hover {\n  border-color: #fff !important; }\n\n.w3-border-black, .w3-hover-border-black:hover {\n  border-color: #000 !important; }\n\n.w3-border-grey, .w3-hover-border-grey:hover, .w3-border-gray, .w3-hover-border-gray:hover {\n  border-color: #9e9e9e !important; }\n\n.w3-border-light-grey, .w3-hover-border-light-grey:hover, .w3-border-light-gray, .w3-hover-border-light-gray:hover {\n  border-color: #f1f1f1 !important; }\n\n.w3-border-dark-grey, .w3-hover-border-dark-grey:hover, .w3-border-dark-gray, .w3-hover-border-dark-gray:hover {\n  border-color: #616161 !important; }\n\n.w3-border-pale-red, .w3-hover-border-pale-red:hover {\n  border-color: #ffe7e7 !important; }\n\n.w3-border-pale-green, .w3-hover-border-pale-green:hover {\n  border-color: #e7ffe7 !important; }\n\n.w3-border-pale-yellow, .w3-hover-border-pale-yellow:hover {\n  border-color: #ffffcc !important; }\n\n.w3-border-pale-blue, .w3-hover-border-pale-blue:hover {\n  border-color: #e7ffff !important; }\n\n.w3-text-teal, .w3-hover-text-teal:hover {\n  color: #dd3f7e !important; }\n"

/***/ }),

/***/ "./src/app/package/view-package/view-package.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/package/view-package/view-package.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewPackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPackageComponent", function() { return ViewPackageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _package_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../package.service */ "./src/app/package/package.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewPackageComponent = /** @class */ (function () {
    function ViewPackageComponent(packageService) {
        this.packageService = packageService;
    }
    ViewPackageComponent.prototype.ngOnInit = function () {
        this.packageInfo = this.packageService.getPackageInfo();
    };
    ViewPackageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-package',
            template: __webpack_require__(/*! ./view-package.component.html */ "./src/app/package/view-package/view-package.component.html"),
            styles: [__webpack_require__(/*! ./view-package.component.scss */ "./src/app/package/view-package/view-package.component.scss")]
        }),
        __metadata("design:paramtypes", [_package_service__WEBPACK_IMPORTED_MODULE_1__["PackageService"]])
    ], ViewPackageComponent);
    return ViewPackageComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search works!\n</p>\n"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
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

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/user/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
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

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/user/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /root/livigro/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map