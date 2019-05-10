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

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n<head>\r\n  <link\r\n    rel=\"stylesheet\"\r\n    href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\"\r\n    integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\"\r\n    crossorigin=\"anonymous\"\r\n  />\r\n  <link\r\n    rel=\"stylesheet\"\r\n    href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\r\n    integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\"\r\n    crossorigin=\"anonymous\"\r\n  />\r\n</head>\r\n\r\n<body>\r\n<div\r\n  class=\"view\"\r\n  style=\"background-color: darkslategray; background-size: cover; padding-bottom: 2%;\"\r\n>\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-between ml-sm-0 ml-md-10\">\r\n      <div class=\"col-9 col-md-8\"><app-logo></app-logo></div>\r\n    </div>\r\n\r\n    <div class=\"row justify-content-around\">\r\n      <div class=\"col-12 col-md-4\"><app-signup></app-signup></div>\r\n      <div class=\"col-12 col-md-4 mt-2\"><app-signin></app-signin></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n <!--scripts-->\r\n <script\r\n src=\"http://code.jquery.com/jquery-3.3.1.min.js\"\r\n integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n crossorigin=\"anonymous\"\r\n></script>\r\n\r\n<script\r\n src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"\r\n integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\"\r\n crossorigin=\"anonymous\"\r\n></script>\r\n<script\r\n src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"\r\n integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\"\r\n crossorigin=\"anonymous\"\r\n></script>\r\n</body>\r\n</html>\r\n\r\n<!-- <router-outlet></router-outlet> -->\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'project-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _tagt_tagt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tagt/tagt.component */ "./src/app/tagt/tagt.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _opening_opening_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./opening/opening.component */ "./src/app/opening/opening.component.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/logo/logo.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
                _tagt_tagt_component__WEBPACK_IMPORTED_MODULE_8__["tagt"],
                _opening_opening_component__WEBPACK_IMPORTED_MODULE_12__["OpeningComponent"],
                _logo_logo_component__WEBPACK_IMPORTED_MODULE_13__["LogoComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_15__["SigninComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["MDBBootstrapModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
                    },
                    {
                        path: 'admin',
                        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"]
                    },
                    {
                        path: '',
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
                    }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getUserDetails = function (uname, pwd) {
        return this.http.post('/app/auth.js', {
            uname: uname,
            pwd: pwd
        });
        // }).subscribe(data => {
        //   console.log(data, " -> acquired")
        // })
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <a routerLink=\"/login\">Login</a>\r\n</p>\r\n<p>\r\n  <a routerLink=\"/admin\">Admin</a>\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logo image {\r\n  width: 5%;\r\n  height: 5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nbyBpbWFnZSB7XHJcbiAgd2lkdGg6IDUlO1xyXG4gIGhlaWdodDogNSU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <meta charset=\"UTF-8\" />\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\r\n  <link\r\n    rel=\"stylesheet\"\r\n    href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\"\r\n    integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\"\r\n    crossorigin=\"anonymous\"\r\n  />\r\n  <link\r\n    rel=\"stylesheet\"\r\n    href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\r\n    integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\"\r\n    crossorigin=\"anonymous\"\r\n  />\r\n  <!-- <link rel=\"stylesheet\" href=\"css/style.css\" /> -->\r\n  <title>Landing Page</title>\r\n</head>\r\n<body>\r\n  <!--Start here always--> \r\n  <div class=\"container\">\r\n    <header class=\"col-12\">\r\n      <!-- <center>\r\n        <img\r\n          height=\"20%\"\r\n          ;\r\n          width=\"50%\"\r\n          ;\r\n          src=\"./Web 1280 – 1.jpg\"\r\n          alt=\"logo\"\r\n        />\r\n      </center> -->\r\n    </header>\r\n  </div>\r\n  <div class=\"d-flex flex-row\" style=\"height:60%; margin-top: 1%;\">\r\n  <div id=\"trans\" class=\"d-flex flex-col col-md-4 scrollable\" style=\"padding:1%; margin-left:15%;  display:inline-block; position: relative; background-color: #dcdfe5;text-align: left;overflow-y:auto; border-radius:3%;\">\r\n    <!-- <textarea\r\n      class=\"form-control d-flex z-depth- rounded-20 col-4 text-muted\"\r\n      rows=\"20\"\r\n      readonly=\"false\"\r\n\t  id = \"transcriptText\"\r\n    >  \r\n    </textarea> -->\r\n    <div><p class=\"scrollable-content\" id=\"final\"></p></div><p id=\"interim\" style=\"color:grey;\"></p>\r\n  </div>\r\n  <div id = \"keywords\" class=\"d-flex flex-col col-md-4 justify-content-around\" style=\"padding:1%; margin-left:5%; display:inline-block; position: relative; background-color:#dcdfe5;  border-radius:3%; overflow-y: auto\">\r\n    \r\n    \r\n  </div>\r\n</div>\r\n  <br />\r\n  \r\n  <div\r\n    class=\"d-flex flex-row row-h1 justify-content-between\"\r\n    style=\"padding-left:24%; padding-right:65%;\"\r\n  >\r\n    <button\r\n      style=\"height:10%; background-color:#2f4f4f; border-radius:50%;\"\r\n      class=\"form-control btn btn-dark item-h1 p-4 d-flex\"\r\n      type=\"submit\"\r\n\t  id = \"recordBtn\"\r\n\t  onclick = \"transcribe();\"\r\n    >\r\n      <i class=\"fas fa-microphone\"></i>\r\n    </button>\r\n\r\n    <button\r\n      style=\"height:10%; background-color: #dcdfe5; border-radius:50%;  margin-left:15%;\"\r\n      class=\"form-control btn item-h1 p-4 d-flex\"\r\n      type=\"submit\"\r\n\t  id = \"stopBtn\"\r\n\t  onclick = \"stopRecord();\"\r\n    >\r\n      <i class=\"fas fa-stop\"></i>\r\n    </button>\r\n\r\n\r\n    <button\r\n      style=\" height:10%; background-color:darkslategrey; border-radius:50%; margin-left:15%;\"\r\n      class=\"form-control btn btn-dark item-h1 p-4 d-flex\"\r\n      type=\"submit\" onclick = \"getKeywords();\"\r\n    >\r\n      <i class=\"fas fa-upload\"></i>\r\n    </button>\r\n  </div>\r\n\r\n  <!--scripts-->\r\n  <script\r\n    src=\"http://code.jquery.com/jquery-3.3.1.min.js\"\r\n    integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n    crossorigin=\"anonymous\"\r\n  ></script>\r\n\r\n  <script\r\n    src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"\r\n    integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\"\r\n    crossorigin=\"anonymous\"\r\n  ></script>\r\n  <script\r\n    src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"\r\n    integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\"\r\n    crossorigin=\"anonymous\"\r\n  ></script>\r\n  <script>\r\n    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;\r\n\tlet finalTranscript = '';\r\n  const recognition = new window.webkitSpeechRecognition();\r\n  console.log(\"recognition created\");\r\n\trecognition.interimResults = true;\r\n\trecognition.continuous = true;\r\n\trecognition.lang = \"en-US\";\r\n  \r\n  function transcribe(){\r\n    console.log(\"Inside transcrib function\");\r\n    document.getElementById(\"recordBtn\").style.backgroundColor = 'red';\r\n    stopBtn.style.backgroundColor = '#2f4f4f';\r\n\t\r\n    recognition.onresult = (event) => {\r\n    let interimTranscript = '';\r\n  //let finalTranscript = '';\r\n\t  //const speechToText = event.results[0][0].transcript;\r\n\t  for (let i = event.resultIndex, len = event.results.length; i < len; i++) {\r\n\t\t\tlet transcript = event.results[i][0].transcript;\r\n\t\t\tif (event.results[i].isFinal) {\r\n        finalTranscript += transcript;\r\n        //transcript = event.results[i][0].transcript;\r\n\t\t\t  //document.write(transcript)\r\n\t\t\t  //var tarea = document.getElementById(\"transcriptText\")\r\n\t\t\t\t//tarea.innerHTML = tarea.innerHTML + transcript \r\n\t\t\t  \r\n\t\t\t } else {\r\n\t\t\t   interimTranscript += transcript;\r\n       }\r\n       //transcriptText.innerHTML +=finalTranscript;\r\n       //interim_span.innerHTML = linebreak(interim_transcript);\r\n       final.innerHTML = finalTranscript;\r\n       interim.innerHTML = interimTranscript;\r\n       trans.scrollTop = trans.scrollHeight;\r\n\t\t  }\r\n\t  //document.write(finalTranscript);\r\n\t  //finalTranscript = \"\"\r\n\t}\r\n\trecognition.start();\r\n\trecognition.onaudioend = function(){\r\n      //document.write(\"\\n Speech ended.\")\r\n      console.log('Audio ended');\r\n      recordBtn.style.backgroundColor = '#2f4f4f';\r\n      stopBtn.style.backgroundColor = '#dcdfe5';\r\n      getKeywords();\r\n\t\t}\r\n  }\r\n  \r\n  function stopRecord(){\r\n    recognition.stop();\r\n    getKeywords();\r\n  }\r\n  function getKeywords(){ \r\n    var xmlhttp = new XMLHttpRequest();\r\n    console.log('INside keyword extractor');\r\n\t\t//var contentDiv = document.getElementById(\"summary\");\r\n    var question = document.getElementById('final').innerHTML\r\n\t\txmlhttp.open(\"GET\", \"/keywords?trans=\"+question, true);\r\n\t\txmlhttp.onreadystatechange = function() {\r\n\t\t\tif (xmlhttp.readyState == 4 && xmlhttp.status == 200) {\r\n        var resp = xmlhttp.responseText;\r\n        console.log(\"resp is\"+resp);\r\n        var keys = resp.split(',');\r\n        var count = 0; \r\n        for(var i=0;i<keys.length;i++){\r\n\t\t\t\tkeywords.innerHTML += ` <p><div class='input-group mb-3 scrollable-content' style='height: 1%' name='k` +toString(count)+ `'>\r\n                                <div class='input-group-prepend'>\r\n                                  <span class='input-group-text' id=''>`+keys[i]+`</span>\r\n                                </div>\r\n                                <div class='input-group-append'>\r\n                                  <button class='btn btn-outline-info' style='color:rgb(49, 82, 82);' type='button' onclick='wipe(this.parentNode.parentNode.name);'>\r\n                                    X\r\n                                  </button>\r\n                                </div>\r\n                              </div></p> <br/>`\r\n                              count = count + 1;\r\n            }\r\n\t\t\t}\r\n\t\t}\r\n\t\txmlhttp.send(null);\r\n  }\r\n\r\n  function wipe(rname){\r\n    console.log(\"rname is\"+rname);\r\n    keywords.removeChild(rname);\r\n  }\r\n  </script>\r\n</body>"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"loginUser($event)\">\r\n  <input type=\"text\" placeholder=\"Username\" id=\"username\">\r\n  <input type=\"password\" placeholder=\"Password\" id=\"password\">\r\n  <input type=\"submit\" value=\"Login\">\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(Auth) {
        this.Auth = Auth;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function (event) {
        event.preventDefault();
        var target = event.target;
        // const uname = target.getElementById("username")
        // const pwd = target.getElementById("password")
        var uname = target.querySelector("#username").value;
        var pwd = target.querySelector("#password").value;
        // this.Auth.getUserDetails(uname, pwd).subscribe(data => {
        //   if(data.success){
        //     console.log("Got it")
        //   }else {
        //     window.alert("fail.")
        //   }
        // })
        console.log(uname, pwd);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logo/logo.component.html":
/*!******************************************!*\
  !*** ./src/app/logo/logo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img\r\n  style=\"border-radius:30px; margin-top: 10%; margin-left:30%; margin-right:30%; margin-bottom: 20%; \"\r\n  src=\"./assets/LogoD.jpg\"\r\n  class=\"img-fluid\r\nz-depth-1\"\r\n/>\r\n"

/***/ }),

/***/ "./src/app/logo/logo.component.styl":
/*!******************************************!*\
  !*** ./src/app/logo/logo.component.styl ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/logo/logo.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nby9sb2dvLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBEQUEwRCIsImZpbGUiOiJzcmMvYXBwL2xvZ28vbG9nby5jb21wb25lbnQuc3R5bCJ9 */"

/***/ }),

/***/ "./src/app/logo/logo.component.ts":
/*!****************************************!*\
  !*** ./src/app/logo/logo.component.ts ***!
  \****************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.styl */ "./src/app/logo/logo.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/opening/opening.component.html":
/*!************************************************!*\
  !*** ./src/app/opening/opening.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"view\"\r\n  style=\"background-color: darkslategray; background-size: cover; padding-bottom: 2%;\"\r\n>\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-between ml-sm-0 ml-md-10\">\r\n      <div class=\"col-9 col-md-8\"><app-logo></app-logo></div>\r\n    </div>\r\n\r\n    <div class=\"row justify-content-around\">\r\n      <div class=\"col-12 col-md-4\"><app-signup></app-signup></div>\r\n      <div class=\"col-12 col-md-4 mt-2\"><app-signin></app-signin></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/opening/opening.component.styl":
/*!************************************************!*\
  !*** ./src/app/opening/opening.component.styl ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/opening/opening.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BlbmluZy9vcGVuaW5nLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdFQUFnRSIsImZpbGUiOiJzcmMvYXBwL29wZW5pbmcvb3BlbmluZy5jb21wb25lbnQuc3R5bCJ9 */"

/***/ }),

/***/ "./src/app/opening/opening.component.ts":
/*!**********************************************!*\
  !*** ./src/app/opening/opening.component.ts ***!
  \**********************************************/
/*! exports provided: OpeningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpeningComponent", function() { return OpeningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OpeningComponent = /** @class */ (function () {
    function OpeningComponent() {
    }
    OpeningComponent.prototype.ngOnInit = function () {
    };
    OpeningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opening',
            template: __webpack_require__(/*! ./opening.component.html */ "./src/app/opening/opening.component.html"),
            styles: [__webpack_require__(/*! ./opening.component.styl */ "./src/app/opening/opening.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OpeningComponent);
    return OpeningComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-card>\r\n  <mdb-card-header\r\n    class=\"white-text text-center py-4\"\r\n    style=\"background-color: #7b9492;\"\r\n  >\r\n    <h5>\r\n      <strong>Sign in</strong>\r\n    </h5>\r\n  </mdb-card-header>\r\n\r\n  <!--Card content-->\r\n  <mdb-card-body class=\"px-lg-5 pt-0\">\r\n    <!-- Form -->\r\n    <form class=\"text-center\" style=\"color: #757575;\">\r\n      <!-- Email -->\r\n      <div class=\"md-form\">\r\n        <input\r\n          type=\"email\"\r\n          id=\"materialLoginFormEmail\"\r\n          class=\"form-control\"\r\n          mdbInput\r\n        />\r\n        <label for=\"materialLoginFormEmail\" style=\"color: teal;\">E-mail</label>\r\n      </div>\r\n\r\n      <!-- Password -->\r\n      <div class=\"md-form\">\r\n        <input\r\n          type=\"password\"\r\n          id=\"materialLoginFormPassword\"\r\n          class=\"form-control\"\r\n          mdbInput\r\n        />\r\n        <label for=\"materialLoginFormPassword\" style=\"color: teal;\"\r\n          >Password</label\r\n        >\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-around\">\r\n        <div>\r\n          <!-- Forgot password -->\r\n          <a style=\"color:darkslategray;\" href=\"\">Forgot password?</a>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Sign in button -->\r\n      <button\r\n        mdbBtn\r\n        color=\"default\"\r\n        outline=\"true\"\r\n        rounded=\"true\"\r\n        block=\"true\"\r\n        class=\"my-4 waves-effect z-depth-0\"\r\n        mdbWavesEffect\r\n        type=\"submit\"\r\n      >\r\n        Sign in\r\n      </button>\r\n    </form>\r\n    <!-- Form -->\r\n  </mdb-card-body>\r\n</mdb-card>\r\n"

/***/ }),

/***/ "./src/app/signin/signin.component.styl":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.styl ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/signin/signin.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4REFBOEQiLCJmaWxlIjoic3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zdHlsIn0= */"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.styl */ "./src/app/signin/signin.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-cascade narrower\">\r\n  <div\r\n    class=\"view view-cascade overlay white-text text-center py-4\"\r\n    style=\"background-color: #7b9492;\"\r\n  >\r\n    <h5>\r\n      <strong>Sign up</strong>\r\n    </h5>\r\n  </div>\r\n\r\n  <!--Card content-->\r\n  <div class=\"card-body card-body-cascade rounded-top px-lg-5 pt-0\">\r\n    <!-- Form -->\r\n    <form class=\"text-center\" style=\"color: #757575;\">\r\n      <div class=\"form-row\">\r\n        <div class=\"col\">\r\n          <!-- E-mail -->\r\n          <div class=\"md-form\">\r\n            <input\r\n              type=\"email\"\r\n              id=\"materialRegisterFormEmail\"\r\n              class=\"form-control\"\r\n              mdbInput\r\n            />\r\n            <label for=\"materialRegisterFormEmail\" style=\"color: teal;\"\r\n              >E-mail</label\r\n            >\r\n          </div>\r\n          <!-- First name -->\r\n          <div class=\"md-form  mt-0\">\r\n            <input\r\n              type=\"text\"\r\n              id=\"materialRegisterFormFirstName\"\r\n              class=\"form-control\"\r\n              mdbInput\r\n            />\r\n            <label for=\"materialRegisterFormFirstName\" style=\"color: teal;\"\r\n              >User name</label\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Password -->\r\n      <div class=\"md-form mt-0\">\r\n        <input\r\n          type=\"password\"\r\n          id=\"materialRegisterFormPassword\"\r\n          class=\"form-control\"\r\n          aria-describedby=\"materialRegisterFormPasswordHelpBlock\"\r\n          mdbInput\r\n        />\r\n        <label for=\"materialRegisterFormPassword\" style=\"color: teal;\"\r\n          >Password</label\r\n        >\r\n      </div>\r\n      <div class=\"md-form mt-0\">\r\n        <input\r\n          type=\"password\"\r\n          id=\"materialRegisterFormCPassword\"\r\n          class=\"form-control\"\r\n          aria-describedby=\"materialRegisterFormCPasswordHelpBlock\"\r\n          mdbInput\r\n        />\r\n        <label for=\"materialRegisterFormCPassword\" style=\"color: teal;\"\r\n          >Confirm Password</label\r\n        >\r\n      </div>\r\n\r\n      <!-- Sign up button -->\r\n      <button\r\n        mdbBtn\r\n        color=\"default\"\r\n        outline=\"true\"\r\n        rounded=\"true\"\r\n        block=\"true\"\r\n        class=\"my-4 waves-effect z-depth-0\"\r\n        mdbWavesEffect\r\n        type=\"submit\"\r\n      >\r\n        Sign up\r\n      </button>\r\n    </form>\r\n    <!-- Form -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.styl":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.styl ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/signup/signup.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4REFBOEQiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zdHlsIn0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.styl */ "./src/app/signup/signup.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/tagt/tagt.component.html":
/*!******************************************!*\
  !*** ./src/app/tagt/tagt.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='input-group mb-3' style='height: 1%'>\r\n        <div class='input-group-prepend'>\r\n          <span class='input-group-text' id=''>Tag 1</span>\r\n        </div>\r\n        <div class='input-group-append'>\r\n          <button class='btn btn-outline-info' style='color:rgb(49, 82, 82);' type='button'>\r\n            X\r\n          </button>\r\n        </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/tagt/tagt.component.ts":
/*!****************************************!*\
  !*** ./src/app/tagt/tagt.component.ts ***!
  \****************************************/
/*! exports provided: tagt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagt", function() { return tagt; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var tagt = /** @class */ (function () {
    function tagt() {
    }
    tagt = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tagt',
            template: __webpack_require__(/*! ./tagt.component.html */ "./src/app/tagt/tagt.component.html")
        })
    ], tagt);
    return tagt;
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

module.exports = __webpack_require__(/*! D:\Study\MS Project\myapp\Autotranscription\project-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map