(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-footer text-muted\">\n  <p>&copy; 2020 MSRB hosted by <a href=\"https://pages.github.com/\" target=\"_blank\">GitHub</a></p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-6 div1\">\n      <app-introduction></app-introduction>\n    </div>\n    <div class=\"col-md-6 div2\">\n      <ngx-gist class=\"gistFrame\" gistId=\"msrbaipalli/417f816d6203a4391a2c24c1a830ada5\"></ngx-gist>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"wrap\">\n  <div id=\"container\" *ngIf=\"!showLoading\">\n    <app-search-me></app-search-me>\n    <app-home></app-home>\n  </div>\n  <loading-spinner *ngIf=\"showLoading\"></loading-spinner>\n</div>\n<div id=\"footer\" *ngIf=\"!showLoading\">\n  <app-footer></app-footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/introduction/introduction.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/introduction/introduction.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"introMain\">\n    <div class=\"title\">\n        <p class=\"inline\">&#60;&#47;&#62; MSRB</p>\n    </div>\n    <div class=\"name\">\n        <p>Manga Srinivas Rao Baipalli.</p>\n    </div>\n    <div class=\"tagLine\">\n        <p>I'm a Frontend Developer working towards a goal of becoming Full Stack Developer!</p>\n    </div>\n    <div class=\"emailId\">\n        <a href=\"mailto:msrbaipalli@gmail.com\" target=\"_top\">msrbaipalli@gmail.com</a>\n    </div>\n    <div class=\"searchMore\">\n        <a (click)=\"openModal(longStoryShort)\" class=\"lss\">Long Story Short!</a>\n        <p>Search to know more and follow me anywhere!</p>\n        <ng-template #longStoryShort>\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">Long Story Short</h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <app-long-story-short></app-long-story-short>\n            </div>\n        </ng-template>\n    </div>\n    <div class=\"socialIcons\">\n        <p><a href=\"https://www.linkedin.com/in/msrbaipalli/\" target=\"_blank\"><i tooltip=\"LinkedIn\"\n                    class=\"fab fa-linkedin-in\"></i></a></p>\n        <p><a href=\"https://github.com/msrbaipalli\" target=\"_blank\"><i tooltip=\"GitHub\" class=\"fab fa-github\"></i></a>\n        </p>\n        <p><a href=\"https://medium.com/@msrbaipalli\" target=\"_blank\"><i tooltip=\"Medium\"\n                    class=\"fab fa-medium-m\"></i></a></p>\n        <p><a href=\"https://twitter.com/msrbaipalli\" target=\"_blank\"><i tooltip=\"Twitter\"\n                    class=\"fab fa-twitter\"></i></a></p>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/certificates/certificates.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/certificates/certificates.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <i class=\"fas fa-certificate fas-tag\"></i>\n      </div>\n      <div class=\"col-sm-11\">\n        <h5 class=\" card-title\">Certifications</h5>\n        <div class=\"innerCard\">\n          <div class=\"marginBottom certificate-container\">\n            <mat-card class=\"certificate-card\" *ngFor=\"let certificate of certificateList\">\n              <mat-card-header>\n                <div mat-card-avatar class=\"certificate-card-header-image\"\n                  [ngStyle]=\"{'background-image': certificate.iconUrl}\">\n                </div>\n                <mat-card-title>{{ certificate.title }}</mat-card-title>\n                <mat-card-subtitle>{{ certificate.provider }}</mat-card-subtitle>\n              </mat-card-header>\n              <mat-card-content>\n              </mat-card-content>\n              <mat-card-actions>\n                <button (click)=\"onViewCertificateClick(certificate.certificateUrl)\" class=\"certificate-button\"\n                  mat-flat-button>View Certificate</button>\n              </mat-card-actions>\n            </mat-card>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/education/education.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/education/education.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-1\">\n                <i class=\"fas fa-graduation-cap fas-tag\"></i>\n            </div>\n            <div class=\"col-sm-11\">\n                <h5 class=\" card-title\">Education</h5>\n                <div class=\"innerCard\">\n                    <div class=\"marginBottom\">\n                        <h5><strong>Master of Digital Sciences</strong></h5> <strong class=\"highlightColor\"><i class=\"fas fa-at\"></i> Kent State University</strong>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Major: </strong>Computer and Information Sciences\n                        </p>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> GPA: </strong>3.7/4.0\n                        </p>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Significant Courses: </strong>Algorithm and\n                            Programming with Data Structures, Enterprise Architecture, Database Management Systems,\n                            Application & Technology Architecture, Requirements & Engineering, and VB Programming.\n                        </p>\n                    </div>\n                </div>\n                <hr>\n                <div class=\"innerCard\">\n                    <div class=\"marginBottom\">\n                        <h5><strong>Bachelor of Technology</strong></h5> <strong class=\"highlightColor\"><i class=\"fas fa-at\"></i> Jawaharlal Nehru Technology\n                        University</strong>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Major: </strong>Computer Science and Engineering\n                        </p>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> GPA: </strong>3.2/4.0\n                        </p>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Significant Courses: </strong>Computer\n                            Programming\n                            &amp; Data Structures, Data Communications &amp; Computer Networks, Data Structure\n                            through C++, Data Warehouse &amp; Data Mining, Database Management Systems, Object\n                            Oriented Analysis &amp; Design, Design Patterns, Design &amp; Analysis of Algorithms and\n                            Formal Languages &amp; Automata Theory.\n                        </p>\n                    </div>\n                </div>\n                <!--<button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Learn More!</button>-->\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/interests/interests.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/interests/interests.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <i class=\"fas fa-lightbulb fas-tag\"></i>\n      </div>\n      <div class=\"col-sm-11\">\n        <h5 class=\" card-title\">Interests</h5>\n        <p class=\"card-text\"></p>\n        <div class=\"fa-icon\">\n          <p><i tooltip=\"Playing Guitar\" class=\"fas fa-guitar\"></i></p>\n          <p><i tooltip=\"Music\" class=\"fas fa-headphones-alt\"></i></p>\n          <p><i tooltip=\"Browsing\" class=\"fab fa-chrome\"></i></p>\n          <p><i tooltip=\"Photography\" class=\"fas fa-camera\"></i></p>\n          <p><i tooltip=\"Exploring\" class=\"fab fa-wpexplorer\"></i></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/long-story-short.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/long-story-short.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <app-navbar></app-navbar>\n    </div>\n    <div class=\"col-sm-9\">\n        <app-work></app-work>\n        <app-education></app-education>\n        <app-skills></app-skills>\n        <app-certificates></app-certificates>\n        <app-interests></app-interests>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/navbar/navbar.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/navbar/navbar.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <img class=\"myPic\" src=\"assets/images/myPic.png\">\n  <div class=\"card-body cardBG\">\n    <div class=\"row arrowUp\">\n      <div class=\"col-2\">\n        <i class=\"fas fa-user fas-tag\"></i>\n      </div>\n      <div class=\"col-10\">\n        <p class=\"card-text\">Hello there!</p>\n        <p class=\"card-text\">I'm Srinivas, Frontend Developer from India and currently living in the United States.\n          I write JavaScript or TypeScript code most of the time and explore new Frontend frameworks.</p>\n        <hr>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <i class=\"fas fa-phone fas-tag\"></i>\n      </div>\n      <div class=\"col-10\">\n        <p class=\"card-text\">+1 (234) 716-4429</p>\n        <hr>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <i class=\"fas fa-envelope fas-tag\"></i>\n      </div>\n      <div class=\"col-10\">\n        <p class=\"card-text emailId\"><a href=\"mailto:msrbaipalli@gmail.com\" target=\"_top\">msrbaipalli@gmail.com</a></p>\n      </div>\n    </div>\n    <hr class=\"lastHr\">\n    <div class=\"row\">\n      <div class=\"col-12 connect-icons\">\n        <a href=\"https://www.linkedin.com/in/msrbaipalli/\" target=\"_blank\"><i tooltip=\"LinkedIn\" class=\"fab fa-linkedin-in fas-tag\"></i></a>\n        <a href=\"https://github.com/msrbaipalli\" target=\"_blank\"><i tooltip=\"GitHub\" class=\"fab fa-github fas-tag\"></i></a>\n        <a href=\"https://medium.com/@msrbaipalli\" target=\"_blank\"><i tooltip=\"Medium\" class=\"fab fa-medium-m fas-tag\"></i></a>\n        <a href=\"https://twitter.com/msrbaipalli\" target=\"_blank\"><i tooltip=\"Twitter\" class=\"fab fa-twitter fas-tag\"></i></a>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/skills/skills.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/skills/skills.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <i class=\"fas fa-drafting-compass fas-tag\"></i>\n      </div>\n      <div class=\"col-sm-11\">\n        <h5 class=\" card-title\">Skills</h5>\n        <p class=\"card-text\">PROGRAMMING LANGUAGES</p>\n        <div class=\"fa-icon\">\n          <p><i tooltip=\"HTML5\" class=\"fab fa-html5\"></i></p>\n          <p><i tooltip=\"CSS3\" class=\"fab fa-css3-alt\"></i></p>\n          <p><i tooltip=\"SASS\" class=\"fab fa-sass\"></i></p>\n          <p><i tooltip=\"LESS\" class=\"fab fa-less\"></i></p>\n          <p><i tooltip=\"Angular\" class=\"fab fa-angular\"></i></p>\n          <p><i tooltip=\"JavaScript\" class=\"fab fa-js\"></i></p>\n          <p><i tooltip=\"NodeJs\" class=\"fab fa-node-js\"></i></p>\n          <p><i tooltip=\"Java\" class=\"fab fa-java\"></i></p>\n          <p><i tooltip=\"Dot Net\" class=\"fab fa-microsoft\"></i></p>\n        </div>\n\n        <p class=\"card-text\">TOOLS</p>\n        <div class=\"fa-icon\">\n          <p><i tooltip=\"npm\" class=\"fab fa-npm\"></i></p>\n          <p><i tooltip=\"Grunt\" class=\"fab fa-grunt\"></i></p>\n          <p><i tooltip=\"Git\" class=\"fab fa-git\"></i></p>\n          <p><i tooltip=\"GitLab\" class=\"fab fa-gitlab\"></i></p>\n          <p><i tooltip=\"GitHub\" class=\"fab fa-github\"></i></p>\n          <p><i tooltip=\"Terminal\" class=\"fas fa-terminal\"></i></p>\n          <p><i tooltip=\"Jenkins\" class=\"fab fa-jenkins\"></i></p>\n        </div>\n        <!--<button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Learn More!</button>-->\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/work/work.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/work/work.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-1\">\n                <i class=\"fas fa-briefcase fas-tag\"></i>\n            </div>\n            <div class=\"col-sm-11\">\n                <h5 class=\"card-title\">Work Experience</h5>\n                <div class=\"innerCard\">\n                    <div class=\"marginBottom\">\n                        <h5><strong>Software Developer</strong></h5> <strong class=\"highlightColor\"><i class=\"fas fa-at\"></i> Egen Solutions</strong>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Description: </strong>Egen Solutions\n                            is an\n                            enterprise\n                            web and mobile application development firm dedicated to build better user experiences\n                            at\n                            the for front of design. Egen also has an IT Talent Acquisition division and places\n                            highly\n                            skilled tech professionals in companies across the US.\n                        </p>\n                    </div>\n                    <!--<div class=\"marginBottom\">\n                        <strong><i class=\"fas fa-caret-right\"></i> Responsibilities:</strong>\n                    </div>\n                    <div class=\"bulletPoints\">\n                        <ul>\n                            <li>Involved in various phases of Software Development Life Cycle (SDLC) as requirement\n                                gathering, data modeling, analysis, architecture design & development for the project in\n                                an Agile/Scrum Environment.\n                            </li>\n                            <li>Involved in designing use cases with the help of business analyst team and developed\n                                technical requirement documents.\n                            </li>\n                            <li>Design develop and test HTML5, CSS3, Bootstrap, JavaScript, jQuery and Angular 1.6 that\n                                meets accessibility and web browser standards.\n                            </li>\n                            <li>Designed single page applications with rich user interface using HTML5, CSS3, Bootstrap,\n                                JavaScript, Angular 1.4/1.6.\n                            </li>\n                            <li>Wrote Angular Unit Tests and created various Components, Custom Directives, Pipes,\n                                Template syntax and Routing.\n                            </li>\n                        </ul>\n                    </div>-->\n                    <p>\n                        <strong><i class=\"fas fa-caret-right\"></i> Environment: </strong>HTML5, CSS3, JavaScript, AngularJS 1.6 and 8, Angular Material, Ngx Bootstrap, AJAX, JSON, SASS, LESS, Node, npm, Agile, Jenkins, Genesis, Visual Studio Code, IntelliJ, Postman, Source Tree, GIT, TFS.\n                    </p>\n                </div>\n                <hr>\n                <div class=\"innerCard\">\n                    <div class=\"marginBottom\">\n                        <h5><strong>Application Developer</strong></h5> <strong class=\"highlightColor\"><i class=\"fas fa-at\"></i> Kent State University</strong>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Description: </strong>Kent State University is a\n                            large, primary residential, public research university in Kent, Ohio. It has serval\n                            IT divisions which services on software solutions to the Organization.\n                        </p>\n                    </div>\n                    <!--<div class=\"marginBottom\">\n                        <strong><i class=\"fas fa-caret-right\"></i> Responsibilities:</strong>\n                    </div>\n                    <div class=\"bulletPoints\">\n                        <ul>\n                            <li>Involved in various phases of Software Development Life Cycle (SDLC) as requirement\n                                gathering, data modeling, analysis, architecture design & development for the project in\n                                an Agile/Scrum Environment.\n                            </li>\n                            <li>Involved in designing use cases with the help of business analyst team and developed\n                                technical requirement documents.\n                            </li>\n                            <li>Design develop and test HTML5, CSS3, Bootstrap, JavaScript, jQuery and Angular 1.6 that\n                                meets accessibility and web browser standards.\n                            </li>\n                            <li>Designed single page applications with rich user interface using HTML5, CSS3, Bootstrap,\n                                JavaScript, Angular 1.4/1.6.\n                            </li>\n                            <li>Wrote Angular Unit Tests and created various Components, Custom Directives, Pipes,\n                                Template syntax and Routing.\n                            </li>\n                        </ul>\n                    </div>-->\n                    <p>\n                        <strong><i class=\"fas fa-caret-right\"></i> Environment: </strong>Angular 2, Type Script, HTML4/5, CSS3/2, C#, ASP/ADO.NET 4.0, Bootstrap3, JavaScript, Responsive Web Design, AJAX, JSON, MS SQL Server 2008, Visual Studio 2017 and GitLab.\n                    </p>\n                </div>\n                <hr>\n                <div class=\"innerCard\">\n                    <div class=\"marginBottom\">\n                        <h5><strong>Application Developer</strong></h5> <strong class=\"highlightColor\"><i class=\"fas fa-at\"></i> Insas Technologies</strong>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Description: </strong>Insas Technologies is one\n                            of the well-known start-up company focused on implementing large-scale IT projects for\n                            Retail and Education industry.\n                        </p>\n                    </div>\n                   <!-- <div class=\"marginBottom\">\n                        <strong><i class=\"fas fa-caret-right\"></i> Responsibilities:</strong>\n                    </div>\n                    <div class=\"bulletPoints\">\n                        <ul>\n                            <li>Involved in various phases of Software Development Life Cycle (SDLC) as requirement\n                                gathering, data modeling, analysis, architecture design & development for the project in\n                                an Agile/Scrum Environment.\n                            </li>\n                            <li>Involved in designing use cases with the help of business analyst team and developed\n                                technical requirement documents.\n                            </li>\n                            <li>Design develop and test HTML5, CSS3, Bootstrap, JavaScript, jQuery and Angular 1.6 that\n                                meets accessibility and web browser standards.\n                            </li>\n                            <li>Designed single page applications with rich user interface using HTML5, CSS3, Bootstrap,\n                                JavaScript, Angular 1.4/1.6.\n                            </li>\n                            <li>Wrote Angular Unit Tests and created various Components, Custom Directives, Pipes,\n                                Template syntax and Routing.\n                            </li>\n                        </ul>\n                    </div>-->\n                    <p>\n                        <strong><i class=\"fas fa-caret-right\"></i> Environment: </strong>HTML, CSS, AJAX, DHTML, JSON, HTML5, XML, DOM, Data visualization, JavaScript, MS Excel, jQuery, Bootstrap, AngularJS, Jasmine.\n                    </p>\n                </div>\n                <!--<button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Learn More!</button>-->\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/stocks-watch/stocks-watch.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/stocks-watch/stocks-watch.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div cdkDropListGroup>\n        <div class=\"example-container\">\n            <h2>To do</h2>\n\n            <div\n                    cdkDropList\n                    [cdkDropListData]=\"todo\"\n                    class=\"example-list\"\n                    (cdkDropListDropped)=\"drop($event)\">\n                <div class=\"example-box\" *ngFor=\"let item of todo\" cdkDrag>{{item}}</div>\n            </div>\n        </div>\n\n        <div class=\"example-container\">\n            <h2>Done</h2>\n\n            <div\n                    cdkDropList\n                    [cdkDropListData]=\"done\"\n                    class=\"example-list\"\n                    (cdkDropListDropped)=\"drop($event)\">\n                <div class=\"example-box\" *ngFor=\"let item of done\" cdkDrag>{{item}}</div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-me/search-me.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-me/search-me.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"searchMe\">\n    <div class=\"form-group input-group-prepend searchMe-div\" dropdown>\n        <span class=\"fa fa-search form-control-feedback input-group-append\" *ngIf=\"!hasSearchValue()\"></span>\n        <button class=\"fa fa-times-circle search-clear-btn input-group-append\" *ngIf=\"hasSearchValue()\"\n            (click)=\"onSearchClear()\"></button>\n        <input type=\"text\" (focusout)=\"onSearchFocusout()\" [(ngModel)]=\"searchValue\" class=\"form-control\"\n            placeholder=\"Search Me!\">\n        <div class=\"input-group-append\">\n            <button (click)=\"openModal(longStoryShort)\" dropdownToggle class=\"btn btn-outline-secondary searchButton\"\n                type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" ria-expanded=\"false\"><i\n                    class=\"fas fa-history\"></i> Long Story Short\n            </button>\n            <ng-template #longStoryShort>\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title pull-left\">Long Story Short</h4>\n                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-long-story-short></app-long-story-short>\n                </div>\n            </ng-template>\n        </div>\n    </div>\n\n    <div class=\"form-group searchMeResult-div\">\n        <div class=\"searchItem\" *ngIf=\"hasSearchValue()\">\n            <search-not-found *ngIf=\"!hasResults()\" [searchMeComponent]=\"this\"></search-not-found>\n            <app-work *ngIf=\"hasSearchMatch('work')\"></app-work>\n            <app-education *ngIf=\"hasSearchMatch('education')\"></app-education>\n            <app-skills *ngIf=\"hasSearchMatch('skills')\"></app-skills>\n            <app-certificates *ngIf=\"hasSearchMatch('certificates')\"></app-certificates>\n            <app-interests *ngIf=\"hasSearchMatch('interests')\"></app-interests>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-me/search-not-found/search-not-found.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-me/search-not-found/search-not-found.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-not-found-container\">\n    <i class=\"fa fa-exclamation-circle\" aria-hidden=\"true\"></i> Results not found!\n    <hr>\n    <mat-chip-list>\n        <span>Example search keywords:</span>\n        <mat-chip (click)=\"onHintClick(hint)\" color=\"primary\" selected *ngFor=\"let hint of searchHints\">\n            {{ hint }}\n        </mat-chip>\n    </mat-chip-list>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loading-spinner/loading-spinner.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loading-spinner/loading-spinner.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-progress-spinner value=\"50\" mode=\"indeterminate\"></mat-progress-spinner>");

/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _projects_stocks_watch_stocks_watch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/stocks-watch/stocks-watch.component */ "./src/app/projects/stocks-watch/stocks-watch.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"] },
    { path: 'home', component: _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"] },
    { path: 'stocks-watch', component: _projects_stocks_watch_stocks_watch_component__WEBPACK_IMPORTED_MODULE_2__["StocksWatchComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _projects_stocks_watch_stocks_watch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/stocks-watch/stocks-watch.component */ "./src/app/projects/stocks-watch/stocks-watch.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var ngx_gist_dist_ngx_gist_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-gist/dist/ngx-gist.module */ "./node_modules/ngx-gist/dist/ngx-gist.module.js");
/* harmony import */ var ngx_gist_dist_ngx_gist_module__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_gist_dist_ngx_gist_module__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _long_story_short_long_story_short_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./long-story-short/long-story-short.module */ "./src/app/long-story-short/long-story-short.module.ts");
/* harmony import */ var _search_me_search_me_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-me/search-me.module */ "./src/app/search-me/search-me.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__["IntroductionComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _projects_stocks_watch_stocks_watch_component__WEBPACK_IMPORTED_MODULE_5__["StocksWatchComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_7__["InfoComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _long_story_short_long_story_short_module__WEBPACK_IMPORTED_MODULE_10__["LongStoryShortModule"],
                _search_me_search_me_module__WEBPACK_IMPORTED_MODULE_11__["SearchMeModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                ngx_gist_dist_ngx_gist_module__WEBPACK_IMPORTED_MODULE_8__["NgxGistModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-footer {\n  width: 100%;\n}\n\n.card-footer p {\n  text-align: center;\n  color: #9DA2A1;\n}\n\n.card-footer p a {\n  color: #F7F7F7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJmb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLWZvb3RlciBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzlEQTJBMTtcbn1cblxuLmNhcmQtZm9vdGVyIHAgYSB7XG4gIGNvbG9yOiAjRjdGN0Y3O1xufVxuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  padding: 0px 25px 80px 25px;\n}\n\n.div1 {\n  margin: 7% auto;\n}\n\n.gistFrame {\n  height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoiaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmc6IDBweCAyNXB4IDgwcHggMjVweDtcbn1cblxuLmRpdjEge1xuICBtYXJnaW46IDclIGF1dG87XG59XG5cbi5naXN0RnJhbWUge1xuICAgIGhlaWdodDogNjAwcHg7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.ctorParameters = function () { return []; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/info/info.component.scss":
/*!******************************************!*\
  !*** ./src/app/info/info.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvL2luZm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showLoading = true;
        setTimeout(function () { _this.showLoading = false; }, 1500);
    };
    InfoComponent.ctorParameters = function () { return []; };
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info',
            template: __importDefault(__webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./info.component.scss */ "./src/app/info/info.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/introduction/introduction.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/introduction/introduction.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Nunito\");\n.title p {\n  font-size: 50px;\n  letter-spacing: 3px;\n  color: #F7F7F7;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  text-transform: uppercase;\n  line-height: 0.8em;\n}\n.name p {\n  font-size: 22px;\n  text-transform: uppercase;\n  line-height: 1em;\n  color: #F7F7F7;\n  font-weight: 600;\n  font-style: normal;\n  letter-spacing: 0.14em;\n}\n.tagLine p {\n  font-size: 20px;\n  color: #BABBBD;\n  line-height: 1.15em;\n}\n.emailId, .searchMore {\n  color: #F7F7F7;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  line-height: 4em;\n}\n.emailId a {\n  color: #F7F7F7;\n  line-height: 1.5em;\n}\n.emailId a:hover {\n  color: #BABBBD;\n  text-decoration: none;\n}\n.socialIcons {\n  padding: 20px 0px;\n}\n.socialIcons p {\n  letter-spacing: 1.2em;\n  display: inline-block;\n}\n.socialIcons p i:hover {\n  color: #F7F7F7;\n}\n.socialIcons p i {\n  font-size: 32px;\n  color: #BABBBD;\n}\n.searchMore p {\n  color: #BABBBD;\n  line-height: 2em;\n}\n.searchMore .lss {\n  color: #F7F7F7;\n  line-height: 2em;\n}\n.searchMore .lss:hover {\n  color: #BABBBD;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkRBQUE7QUFFUjtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQUY7QUFHQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQUY7QUFHQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBQUo7QUFJQTtFQUNFLGlCQUFBO0FBREY7QUFJQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUFERjtBQUlBO0VBQ0UsY0FBQTtBQURGO0FBSUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQURGO0FBSUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBQUo7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQUoiLCJmaWxlIjoiaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvJyk7XG5cbi50aXRsZSBwIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBjb2xvcjogI0Y3RjdGNztcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAuOGVtO1xufVxuXG4ubmFtZSBwIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBjb2xvcjogI0Y3RjdGNztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogLjE0ZW07XG59XG5cbi50YWdMaW5lIHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjQkFCQkJEO1xuICBsaW5lLWhlaWdodDogMS4xNWVtO1xufVxuXG4uZW1haWxJZCwgLnNlYXJjaE1vcmUge1xuICBjb2xvcjogI0Y3RjdGNztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4xMGVtO1xuICBsaW5lLWhlaWdodDogNGVtO1xufVxuXG4uZW1haWxJZCBhIHtcbiAgICBjb2xvcjogI0Y3RjdGNztcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG59XG5cbi5lbWFpbElkIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjQkFCQkJEO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG4uc29jaWFsSWNvbnMge1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbn1cblxuLnNvY2lhbEljb25zIHAge1xuICBsZXR0ZXItc3BhY2luZzogMS4yZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNvY2lhbEljb25zIHAgaTpob3ZlciB7XG4gIGNvbG9yOiAjRjdGN0Y3O1xufVxuXG4uc29jaWFsSWNvbnMgcCBpIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogI0JBQkJCRDtcbn1cblxuLnNlYXJjaE1vcmUgcHtcbiAgICBjb2xvcjogI0JBQkJCRDtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xufVxuLnNlYXJjaE1vcmUgLmxzcyB7XG4gICAgY29sb3I6ICNGN0Y3Rjc7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cblxuLnNlYXJjaE1vcmUgLmxzczpob3ZlciB7XG4gICAgY29sb3I6ICNCQUJCQkQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/introduction/introduction.component.ts":
/*!********************************************************!*\
  !*** ./src/app/introduction/introduction.component.ts ***!
  \********************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var IntroductionComponent = /** @class */ (function () {
    function IntroductionComponent(modalService) {
        this.modalService = modalService;
    }
    IntroductionComponent.prototype.ngOnInit = function () {
    };
    IntroductionComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    IntroductionComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }
    ]; };
    IntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-introduction',
            template: __importDefault(__webpack_require__(/*! raw-loader!./introduction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/introduction/introduction.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./introduction.component.scss */ "./src/app/introduction/introduction.component.scss")).default]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "./src/app/long-story-short/certificates/certificates.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/long-story-short/certificates/certificates.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  color: #6E757C;\n  margin-bottom: 25px;\n  border-radius: 0px;\n}\n\n.card-header {\n  background: #878E95;\n  color: #F7F7F7;\n}\n\n.marginBottom {\n  margin-bottom: 10px;\n}\n\n.innerCard {\n  box-shadow: none;\n}\n\n.innerCard a {\n  color: #6E757C;\n}\n\n.fas-tag {\n  font-size: 45px;\n  color: #6E757C;\n  padding: 10px;\n}\n\n.card-title {\n  font-size: 32px;\n  color: #6E757C;\n  padding-bottom: 15px;\n}\n\nhr {\n  margin: 30px 0px;\n  padding: 0.1px 0;\n  background: #6F757B;\n}\n\n.certificate-container .certificate-card {\n  display: inline-block;\n}\n\n.certificate-container mat-card-header {\n  height: 65px;\n}\n\n.certificate-container mat-card-title {\n  color: #111;\n  font-size: 16px;\n}\n\n.certificate-container mat-card-subtitle {\n  font-size: 14px;\n}\n\n.certificate-card {\n  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.2);\n  width: 300px;\n  max-width: 100%;\n  padding-bottom: 20px;\n  margin-right: 25px;\n  margin-bottom: 25px;\n}\n\n.certificate-card-header-image {\n  background-size: cover;\n  height: 30px;\n  width: 30px;\n}\n\n.certificate-button {\n  background: #fff;\n  border: 1px solid #026A78;\n  color: #026A78;\n  margin-left: 8px;\n  font-size: 12px;\n  height: 30px;\n  line-height: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvbmctc3Rvcnktc2hvcnQvY2VydGlmaWNhdGVzL2NlcnRpZmljYXRlcy5jb21wb25lbnQuc2NzcyIsInNoYXJlZC9zaGFyZWQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNNLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRE47O0FBSUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLHFCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtBQURKOztBQUlBO0VBQ0ksMkNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNDN0VVO0VEOEVWLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQURKIiwiZmlsZSI6Imxvbmctc3Rvcnktc2hvcnQvY2VydGlmaWNhdGVzL2NlcnRpZmljYXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zY3NzJztcblxuLmNhcmQge1xuICAgICAgY29sb3I6ICM2RTc1N0M7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICM4NzhFOTU7XG4gICAgY29sb3I6ICNGN0Y3Rjc7XG59XG5cbi5tYXJnaW5Cb3R0b20ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbm5lckNhcmQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5pbm5lckNhcmQgYXtcbiAgICBjb2xvcjogIzZFNzU3Qztcbn1cblxuLmZhcy10YWcge1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICBjb2xvcjogIzZFNzU3QztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGNvbG9yOiAjNkU3NTdDO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG5ociB7XG4gICAgbWFyZ2luOiAzMHB4IDBweDtcbiAgICBwYWRkaW5nOiAuMXB4IDA7XG4gICAgYmFja2dyb3VuZDogIzZGNzU3Qjtcbn1cblxuLmNlcnRpZmljYXRlLWNvbnRhaW5lciAuY2VydGlmaWNhdGUtY2FyZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY2VydGlmaWNhdGUtY29udGFpbmVyIG1hdC1jYXJkLWhlYWRlciB7XG4gICAgaGVpZ2h0OiA2NXB4O1xufVxuXG4uY2VydGlmaWNhdGUtY29udGFpbmVyIG1hdC1jYXJkLXRpdGxlIHtcbiAgICBjb2xvcjogIzExMSA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY2VydGlmaWNhdGUtY29udGFpbmVyIG1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jZXJ0aWZpY2F0ZS1jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxNnB4IDAgcmdiYSgwLDAsMCwuMik7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmNlcnRpZmljYXRlLWNhcmQtaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbn1cblxuLmNlcnRpZmljYXRlLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XG4gICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XG59IiwiJGRhcmstcmVkOiAjYjcxYzFjO1xuJHRoZW1lLWNvbG9yOiAjMDI2QTc4O1xuJHRoZW1lLWhvdmVyLWNvbG9yOiAjMEM5Q0I0O1xuIl19 */");

/***/ }),

/***/ "./src/app/long-story-short/certificates/certificates.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/long-story-short/certificates/certificates.component.ts ***!
  \*************************************************************************/
/*! exports provided: CertificatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatesComponent", function() { return CertificatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utils/utils.service */ "./src/app/shared/utils/utils.service.ts");
/* harmony import */ var _certificates_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certificates.constants */ "./src/app/long-story-short/certificates/certificates.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var CertificatesComponent = /** @class */ (function () {
    function CertificatesComponent() {
        this.certificateList = _certificates_constants__WEBPACK_IMPORTED_MODULE_2__["CERTIFICATE_LIST"];
    }
    CertificatesComponent.prototype.ngOnInit = function () {
    };
    CertificatesComponent.prototype.onViewCertificateClick = function (url) {
        if (Object(src_app_shared_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(url)) {
            return;
        }
        window.open(url, '_blank');
    };
    CertificatesComponent.ctorParameters = function () { return []; };
    CertificatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-certificates',
            template: __importDefault(__webpack_require__(/*! raw-loader!./certificates.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/certificates/certificates.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./certificates.component.scss */ "./src/app/long-story-short/certificates/certificates.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], CertificatesComponent);
    return CertificatesComponent;
}());



/***/ }),

/***/ "./src/app/long-story-short/certificates/certificates.constants.ts":
/*!*************************************************************************!*\
  !*** ./src/app/long-story-short/certificates/certificates.constants.ts ***!
  \*************************************************************************/
/*! exports provided: CERTIFICATE_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERTIFICATE_LIST", function() { return CERTIFICATE_LIST; });
var CERTIFICATE_LIST = [
    {
        provider: 'Hacker Rank',
        title: 'Angular (Basic)',
        iconUrl: 'url("https://hrcdn.net/community-frontend/assets/favicon-ddc852f75a.png")',
        certificateUrl: 'https://www.hackerrank.com/certificates/772ff811d48c'
    },
    {
        provider: 'Hacker Rank',
        title: 'JavaScript (Basic)',
        iconUrl: 'url("https://hrcdn.net/community-frontend/assets/favicon-ddc852f75a.png")',
        certificateUrl: 'https://www.hackerrank.com/certificates/55a0177c19ef'
    },
    {
        provider: 'Edx HardwardX',
        title: 'CS50: Introduction to Computer Science',
        iconUrl: 'url("https://www.edx.org/favicon.ico")',
        certificateUrl: 'https://courses.edx.org/certificates/cfdbf919a099417ab1ea259741291ac2'
    },
    {
        provider: 'Stanford University',
        title: 'Computer Science 101',
        iconUrl: 'url("http://www-media.stanford.edu/assets/favicon/mstile-70x70.png")',
        certificateUrl: 'https://prod-cert-bucket.s3.amazonaws.com/downloads/2c9c3cc2083a47d79cc5a96a23498d7a/Statement.pdf'
    },
    {
        provider: 'Free Code Camp',
        title: 'Legacy Front End',
        iconUrl: 'url("https://www.freecodecamp.org/favicon-32x32.png?v=6cba562cbd10e31af925a976f3db73f7")',
        certificateUrl: 'https://www.freecodecamp.org/certification/bmsrinivasrao007/legacy-front-end'
    }
];


/***/ }),

/***/ "./src/app/long-story-short/education/education.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/long-story-short/education/education.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  color: #6E757C;\n  margin-bottom: 25px;\n  border-radius: 0px;\n}\n\n.card-header {\n  background: #878E95;\n  color: #F7F7F7;\n}\n\n.marginBottom {\n  margin-bottom: 10px;\n}\n\n.innerCard {\n  box-shadow: none;\n}\n\n.fas-tag {\n  font-size: 45px;\n  color: #6E757C;\n  padding: 10px;\n}\n\n.card-title {\n  font-size: 32px;\n  color: #6E757C;\n  padding-bottom: 15px;\n}\n\nhr {\n  margin: 30px 0px;\n  padding: 0.1px 0;\n  background: #6F757B;\n}\n\n.bulletPoints {\n  padding: 10px 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvbmctc3Rvcnktc2hvcnQvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNNLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ047O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoibG9uZy1zdG9yeS1zaG9ydC9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgICAgY29sb3I6ICM2RTc1N0M7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICM4NzhFOTU7XG4gICAgY29sb3I6ICNGN0Y3Rjc7XG59XG5cbi5tYXJnaW5Cb3R0b20ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbm5lckNhcmQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5mYXMtdGFnIHtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgY29sb3I6ICM2RTc1N0M7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBjb2xvcjogIzZFNzU3QztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuaHIge1xuICAgIG1hcmdpbjogMzBweCAwcHg7XG4gICAgcGFkZGluZzogLjFweCAwO1xuICAgIGJhY2tncm91bmQ6ICM2Rjc1N0I7XG59XG5cbi5idWxsZXRQb2ludHMge1xuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/long-story-short/education/education.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/long-story-short/education/education.component.ts ***!
  \*******************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent.ctorParameters = function () { return []; };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __importDefault(__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/education/education.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./education.component.scss */ "./src/app/long-story-short/education/education.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/long-story-short/interests/interests.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/long-story-short/interests/interests.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  color: #6E757C;\n  margin-bottom: 25px;\n  border-radius: 0px;\n}\n\n.card-header {\n  background: #878E95;\n  color: #F7F7F7;\n}\n\n.innerCard {\n  box-shadow: none;\n}\n\n.fas-tag {\n  font-size: 45px;\n  color: #6E757C;\n  padding: 10px;\n}\n\n.card-title {\n  font-size: 32px;\n  color: #6E757C;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvbmctc3Rvcnktc2hvcnQvaW50ZXJlc3RzL2ludGVyZXN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNNLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ047O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFDSiIsImZpbGUiOiJsb25nLXN0b3J5LXNob3J0L2ludGVyZXN0cy9pbnRlcmVzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgICBjb2xvcjogIzZFNzU3QztcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzg3OEU5NTtcbiAgICBjb2xvcjogI0Y3RjdGNztcbn1cblxuLmlubmVyQ2FyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmZhcy10YWcge1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICBjb2xvcjogIzZFNzU3QztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGNvbG9yOiAjNkU3NTdDO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/long-story-short/interests/interests.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/long-story-short/interests/interests.component.ts ***!
  \*******************************************************************/
/*! exports provided: InterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsComponent", function() { return InterestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var InterestsComponent = /** @class */ (function () {
    function InterestsComponent() {
    }
    InterestsComponent.prototype.ngOnInit = function () {
    };
    InterestsComponent.ctorParameters = function () { return []; };
    InterestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interests',
            template: __importDefault(__webpack_require__(/*! raw-loader!./interests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/interests/interests.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./interests.component.scss */ "./src/app/long-story-short/interests/interests.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], InterestsComponent);
    return InterestsComponent;
}());



/***/ }),

/***/ "./src/app/long-story-short/long-story-short.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/long-story-short/long-story-short.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb25nLXN0b3J5LXNob3J0L2xvbmctc3Rvcnktc2hvcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/long-story-short/long-story-short.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/long-story-short/long-story-short.component.ts ***!
  \****************************************************************/
/*! exports provided: LongStoryShortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongStoryShortComponent", function() { return LongStoryShortComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LongStoryShortComponent = /** @class */ (function () {
    function LongStoryShortComponent() {
    }
    LongStoryShortComponent.prototype.ngOnInit = function () {
    };
    LongStoryShortComponent.ctorParameters = function () { return []; };
    LongStoryShortComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-long-story-short',
            template: __importDefault(__webpack_require__(/*! raw-loader!./long-story-short.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/long-story-short.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./long-story-short.component.scss */ "./src/app/long-story-short/long-story-short.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], LongStoryShortComponent);
    return LongStoryShortComponent;
}());



/***/ }),

/***/ "./src/app/long-story-short/long-story-short.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/long-story-short/long-story-short.module.ts ***!
  \*************************************************************/
/*! exports provided: LongStoryShortModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongStoryShortModule", function() { return LongStoryShortModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certificates/certificates.component */ "./src/app/long-story-short/certificates/certificates.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education/education.component */ "./src/app/long-story-short/education/education.component.ts");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interests/interests.component */ "./src/app/long-story-short/interests/interests.component.ts");
/* harmony import */ var _long_story_short_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./long-story-short.component */ "./src/app/long-story-short/long-story-short.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/long-story-short/navbar/navbar.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/long-story-short/skills/skills.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./work/work.component */ "./src/app/long-story-short/work/work.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var components = [
    _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_2__["CertificatesComponent"],
    _education_education_component__WEBPACK_IMPORTED_MODULE_3__["EducationComponent"],
    _interests_interests_component__WEBPACK_IMPORTED_MODULE_4__["InterestsComponent"],
    _long_story_short_component__WEBPACK_IMPORTED_MODULE_5__["LongStoryShortComponent"],
    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
    _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
    _work_work_component__WEBPACK_IMPORTED_MODULE_8__["WorkComponent"]
];
var LongStoryShortModule = /** @class */ (function () {
    function LongStoryShortModule() {
    }
    LongStoryShortModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [components],
            exports: [components],
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]
        })
    ], LongStoryShortModule);
    return LongStoryShortModule;
}());



/***/ }),

/***/ "./src/app/long-story-short/navbar/navbar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/long-story-short/navbar/navbar.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  color: #F7F7F7;\n  border-radius: 0px;\n}\n\nhr {\n  background: none;\n  margin-top: 30px;\n}\n\n.row {\n  padding-bottom: 20px;\n}\n\n.col-10 {\n  padding: 0;\n  margin: 0;\n}\n\n.cardBG {\n  background: #026A78;\n}\n\n.myPic {\n  width: 100%;\n}\n\n.card-header {\n  background: #878E95;\n  color: #F7F7F7;\n}\n\n.innerCard {\n  box-shadow: none;\n}\n\n.connect-icons {\n  display: flex;\n  justify-content: center;\n}\n\n.connect-icons a {\n  padding-right: 20px;\n}\n\n.fas-tag {\n  font-size: 25px;\n  color: #F7F7F7;\n}\n\n.card-title {\n  font-size: 32px;\n  color: #6E757C;\n  padding-bottom: 15px;\n}\n\n.skillsIcon p {\n  color: #6FA3D4;\n  font-size: 50px;\n  display: inline-block;\n  margin-right: 20px;\n}\n\n.emailId a {\n  color: #F7F7F7;\n  line-height: 1.5em;\n}\n\n.emailId a:hover {\n  color: #F7F7F7;\n  text-decoration: none;\n}\n\n.lastHr {\n  margin-top: 10px !important;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvbmctc3Rvcnktc2hvcnQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNoYXJlZC9zaGFyZWQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNNLGNBQUE7RUFDQSxrQkFBQTtBQUROOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksb0JBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FBREo7O0FBSUE7RUFDSSxtQkNyQlU7QURvQmQ7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtBQURKIiwiZmlsZSI6Imxvbmctc3Rvcnktc2hvcnQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zY3NzJztcblxuLmNhcmQge1xuICAgICAgY29sb3I6ICNGN0Y3Rjc7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbmhyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5yb3cge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uY29sLTEwIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmNhcmRCRyB7XG4gICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xufVxuXG4ubXlQaWMge1xuICAgIHdpZHRoOjEwMCU7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzg3OEU5NTtcbiAgICBjb2xvcjogI0Y3RjdGNztcbn1cblxuLmlubmVyQ2FyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNvbm5lY3QtaWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb25uZWN0LWljb25zIGEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5mYXMtdGFnIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICNGN0Y3Rjc7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6ICM2RTc1N0M7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5za2lsbHNJY29uIHAge1xuICAgIGNvbG9yOiAjNkZBM0Q0O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uZW1haWxJZCBhIHtcbiAgICBjb2xvcjogI0Y3RjdGNztcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG59XG5cbi5lbWFpbElkIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjRjdGN0Y3O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxhc3RIciB7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59IiwiJGRhcmstcmVkOiAjYjcxYzFjO1xuJHRoZW1lLWNvbG9yOiAjMDI2QTc4O1xuJHRoZW1lLWhvdmVyLWNvbG9yOiAjMEM5Q0I0O1xuIl19 */");

/***/ }),

/***/ "./src/app/long-story-short/navbar/navbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/long-story-short/navbar/navbar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.ctorParameters = function () { return []; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/long-story-short/navbar/navbar.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/long-story-short/skills/skills.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/long-story-short/skills/skills.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  color: #6E757C;\n  margin-bottom: 25px;\n  border-radius: 0px;\n}\n\n.card-header {\n  background: #878E95;\n  color: #F7F7F7;\n}\n\n.innerCard {\n  box-shadow: none;\n}\n\n.fas-tag {\n  font-size: 45px;\n  color: #6E757C;\n  padding: 10px;\n}\n\n.card-title {\n  font-size: 32px;\n  color: #6E757C;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvbmctc3Rvcnktc2hvcnQvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLHdFQUFBO0VBQ0MscURBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNOOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0oiLCJmaWxlIjoibG9uZy1zdG9yeS1zaG9ydC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiAgICAgIGNvbG9yOiAjNkU3NTdDO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjODc4RTk1O1xuICAgIGNvbG9yOiAjRjdGN0Y3O1xufVxuXG4uaW5uZXJDYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZmFzLXRhZyB7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICAgIGNvbG9yOiAjNkU3NTdDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6ICM2RTc1N0M7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/long-story-short/skills/skills.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/long-story-short/skills/skills.component.ts ***!
  \*************************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent.ctorParameters = function () { return []; };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __importDefault(__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/skills/skills.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./skills.component.scss */ "./src/app/long-story-short/skills/skills.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/long-story-short/work/work.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/long-story-short/work/work.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  color: #6E757C;\n  margin-bottom: 25px;\n  border-radius: 0px;\n}\n\n.card-header {\n  background: #878E95;\n  color: #F7F7F7;\n}\n\n.marginBottom {\n  margin-bottom: 10px;\n}\n\n.innerCard {\n  box-shadow: none;\n}\n\n.fas-tag {\n  font-size: 45px;\n  color: #6E757C;\n  padding: 10px;\n}\n\n.card-title {\n  font-size: 32px;\n  color: #6E757C;\n  padding-bottom: 15px;\n}\n\nhr {\n  margin: 30px 0px;\n  padding: 0.1px 0;\n  background: #6F757B;\n}\n\n.bulletPoints {\n  padding: 5px 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvbmctc3Rvcnktc2hvcnQvd29yay93b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ00sY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDTjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJsb25nLXN0b3J5LXNob3J0L3dvcmsvd29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICAgIGNvbG9yOiAjNkU3NTdDO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjODc4RTk1O1xuICAgIGNvbG9yOiAjRjdGN0Y3O1xufVxuXG4ubWFyZ2luQm90dG9tIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaW5uZXJDYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZmFzLXRhZyB7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICAgIGNvbG9yOiAjNkU3NTdDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6ICM2RTc1N0M7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbmhyIHtcbiAgICBtYXJnaW46IDMwcHggMHB4O1xuICAgIHBhZGRpbmc6IC4xcHggMDtcbiAgICBiYWNrZ3JvdW5kOiAjNkY3NTdCO1xufVxuXG4uYnVsbGV0UG9pbnRzIHtcbiAgICBwYWRkaW5nOiA1cHggNDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/long-story-short/work/work.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/long-story-short/work/work.component.ts ***!
  \*********************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent.ctorParameters = function () { return []; };
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work',
            template: __importDefault(__webpack_require__(/*! raw-loader!./work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/work/work.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./work.component.scss */ "./src/app/long-story-short/work/work.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/projects/stocks-watch/stocks-watch.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/projects/stocks-watch/stocks-watch.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin: 10px;\n}\n\n.example-container {\n  width: 400px;\n  max-width: 100%;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3N0b2Nrcy13YXRjaC9zdG9ja3Mtd2F0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBQ0Y7O0FBSUE7RUFDRSxVQUFBO0FBREY7O0FBSUE7RUFDRSxzREFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtBQURGOztBQUlBO0VBQ0Usc0RBQUE7QUFERiIsImZpbGUiOiJwcm9qZWN0cy9zdG9ja3Mtd2F0Y2gvc3RvY2tzLXdhdGNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uZXhhbXBsZS1saXN0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZXhhbXBsZS1ib3gge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/projects/stocks-watch/stocks-watch.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/projects/stocks-watch/stocks-watch.component.ts ***!
  \*****************************************************************/
/*! exports provided: StocksWatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksWatchComponent", function() { return StocksWatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var StocksWatchComponent = /** @class */ (function () {
    function StocksWatchComponent() {
        this.todo = [
            'Get to work',
            'Pick up groceries',
            'Go home',
            'Fall asleep'
        ];
        this.done = [
            'Get up',
            'Brush teeth',
            'Take a shower',
            'Walk dog'
        ];
    }
    StocksWatchComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    StocksWatchComponent.prototype.ngOnInit = function () { };
    StocksWatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stocks-watch',
            template: __importDefault(__webpack_require__(/*! raw-loader!./stocks-watch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/stocks-watch/stocks-watch.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./stocks-watch.component.scss */ "./src/app/projects/stocks-watch/stocks-watch.component.scss")).default]
        })
    ], StocksWatchComponent);
    return StocksWatchComponent;
}());



/***/ }),

/***/ "./src/app/search-me/search-me.component.scss":
/*!****************************************************!*\
  !*** ./src/app/search-me/search-me.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".searchMe {\n  width: 80%;\n  margin: 30px auto;\n}\n.searchMe button {\n  color: #F7F7F7;\n}\n.searchMe-div .form-control {\n  padding: 10px 8px;\n}\n.searchMe-div .form-control-feedback {\n  position: relative;\n  padding-left: 10px;\n  z-index: 2;\n  display: block;\n  width: 35px;\n  height: 2.375rem;\n  line-height: 2.375rem;\n  text-align: center;\n  pointer-events: none;\n  color: #ACAFB1;\n  background: #3C4647;\n  border-radius: 4px 0px 0px 4px;\n}\n.searchMe-div .form-control {\n  color: #BABBBD;\n  background: #3C4647;\n  border: none;\n  border-radius: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.searchMe-div span {\n  border-radius: 4px;\n}\n.searchMe-div .form-control::-moz-placeholder {\n  color: #BABBBD;\n  opacity: 1;\n}\n.searchMe-div .form-control:-ms-input-placeholder {\n  color: #BABBBD;\n  opacity: 1;\n}\n.searchMe-div .form-control::-ms-input-placeholder {\n  color: #BABBBD;\n  opacity: 1;\n}\n.searchMe-div .form-control::placeholder {\n  color: #BABBBD;\n  opacity: 1;\n}\n.search-clear-btn {\n  position: relative;\n  top: 0px;\n  width: 35px;\n  height: 38px;\n  padding-top: 5px;\n  padding-left: 10px;\n  border-radius: 0.25rem 0px 0px 0.25rem;\n  background: #3C4647;\n  color: #ACAFB1;\n  border: none;\n  z-index: 2;\n  font-size: 18px;\n  line-height: 30px;\n}\n.searchMeResult-div {\n  z-index: 1;\n  top: 75px;\n  width: 80%;\n  position: absolute;\n}\n.searchMeResult-div .searchItem::after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent #F7F7F7 transparent;\n}\n.searchItem {\n  margin: 0px;\n  color: #3F4346;\n  background: #F7F7F7;\n  padding: 10px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  height: auto;\n  max-height: 70vh;\n  overflow: auto;\n}\n.searchButton {\n  width: 180px;\n  border-color: #3C4647;\n  border-radius: 0px 4px 4px 0px;\n  background: #026A78;\n  color: #EEF8F9;\n}\n.searchButton:hover {\n  background: #0C9CB4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1tZS9zZWFyY2gtbWUuY29tcG9uZW50LnNjc3MiLCJzaGFyZWQvc2hhcmVkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUdJO0VBQ0ksY0FBQTtBQURSO0FBTUk7RUFDSSxpQkFBQTtBQUhSO0FBTUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUpSO0FBT0k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSwrQ0FBQTtBQUxSO0FBUUk7RUFDSSxrQkFBQTtBQU5SO0FBU0k7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQVBSO0FBS0k7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQVBSO0FBS0k7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQVBSO0FBS0k7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQVBSO0FBV0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUko7QUFXQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBUko7QUFVSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseURBQUE7QUFSUjtBQVlBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx3RUFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVRKO0FBWUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQ25HVTtFRG9HVixjQUFBO0FBVEo7QUFZQTtFQUNJLG1CQ3ZHZ0I7QUQ4RnBCIiwiZmlsZSI6InNlYXJjaC1tZS9zZWFyY2gtbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXBwL3NoYXJlZC9zaGFyZWQuc2Nzcyc7XG5cbi5zZWFyY2hNZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiAjRjdGN0Y3O1xuICAgIH1cbn1cblxuLnNlYXJjaE1lLWRpdiB7XG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggOHB4O1xuICAgIH1cblxuICAgIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBoZWlnaHQ6IDIuMzc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMi4zNzVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjQUNBRkIxO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjM0M0NjQ3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggMHB4IDBweCA0cHg7XG4gICAgfVxuXG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIGNvbG9yOiAjQkFCQkJEO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjM0M0NjQ3O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDUpO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICAgIFxuICAgIC5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICNCQUJCQkQ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uc2VhcmNoLWNsZWFyLWJ0biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMHB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW0gMHB4IDBweCAuMjVyZW07XG4gICAgYmFja2dyb3VuZDogIzNDNDY0NztcbiAgICBjb2xvcjogI0FDQUZCMTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgei1pbmRleDogMjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5zZWFyY2hNZVJlc3VsdC1kaXYge1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiA3NXB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgLnNlYXJjaEl0ZW06OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNGN0Y3RjcgdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG4uc2VhcmNoSXRlbSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6ICMzRjQzNDY7XG4gICAgYmFja2dyb3VuZDogI0Y3RjdGNztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LWhlaWdodDogNzB2aDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNlYXJjaEJ1dHRvbiB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGJvcmRlci1jb2xvcjogIzNDNDY0NztcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHg7XG4gICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xuICAgIGNvbG9yOiAjRUVGOEY5O1xufVxuXG4uc2VhcmNoQnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtaG92ZXItY29sb3I7XG59XG4iLCIkZGFyay1yZWQ6ICNiNzFjMWM7XG4kdGhlbWUtY29sb3I6ICMwMjZBNzg7XG4kdGhlbWUtaG92ZXItY29sb3I6ICMwQzlDQjQ7XG4iXX0= */");

/***/ }),

/***/ "./src/app/search-me/search-me.component.ts":
/*!**************************************************!*\
  !*** ./src/app/search-me/search-me.component.ts ***!
  \**************************************************/
/*! exports provided: SearchMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMeComponent", function() { return SearchMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/utils.service */ "./src/app/shared/utils/utils.service.ts");
/* harmony import */ var _search_me_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-me.constants */ "./src/app/search-me/search-me.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var SearchMeComponent = /** @class */ (function () {
    function SearchMeComponent(modalService) {
        this.modalService = modalService;
    }
    SearchMeComponent.prototype.ngOnInit = function () {
        this._reset();
    };
    SearchMeComponent.prototype.hasSearchMatch = function (key) {
        var items = key && _search_me_constants__WEBPACK_IMPORTED_MODULE_3__["SEARCH_ITEMS"][key];
        var searchValue = this.searchValue ? this.searchValue.trim().toLowerCase() : '';
        if (Object(_shared_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(items) || Object(_shared_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__["isEmptyString"])(searchValue)) {
            return false;
        }
        return items.some(function (item) {
            return item.toLowerCase().includes(searchValue);
        });
    };
    SearchMeComponent.prototype.hasResults = function () {
        var _this = this;
        return Object.keys(_search_me_constants__WEBPACK_IMPORTED_MODULE_3__["SEARCH_ITEMS"]).some(function (key) { return _this.hasSearchMatch(key); });
    };
    SearchMeComponent.prototype.hasSearchValue = function () {
        return this.searchValue !== '';
    };
    SearchMeComponent.prototype.openModal = function (template) {
        this._reset();
        this.modalRef = this.modalService.show(template);
    };
    SearchMeComponent.prototype.onSearchFocusout = function () {
        // this._reset();
    };
    SearchMeComponent.prototype.onSearchClear = function () {
        this._reset();
    };
    SearchMeComponent.prototype._reset = function () {
        this.searchValue = '';
        this.isSearchItemFound = false;
    };
    SearchMeComponent.prototype._setSearchItemFound = function (flag) {
        this.isSearchItemFound = flag;
    };
    SearchMeComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }
    ]; };
    SearchMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-me',
            template: __importDefault(__webpack_require__(/*! raw-loader!./search-me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-me/search-me.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./search-me.component.scss */ "./src/app/search-me/search-me.component.scss")).default]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], SearchMeComponent);
    return SearchMeComponent;
}());



/***/ }),

/***/ "./src/app/search-me/search-me.constants.ts":
/*!**************************************************!*\
  !*** ./src/app/search-me/search-me.constants.ts ***!
  \**************************************************/
/*! exports provided: SEARCH_ITEMS, SEARCH_HITNS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_ITEMS", function() { return SEARCH_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_HITNS", function() { return SEARCH_HITNS; });
var skills = 'HTML, CSS3, SASS, LESS, Angular, JavaScript, NodeJs, Java, Dot Net, NPM, Grunt, Git, GitHub, GitLab, Terminal, Jenkins';
var SEARCH_ITEMS = {
    work: [
        'work',
        'experience',
        'work experience'
    ],
    education: [
        'education',
        'study',
        'studies',
        'school',
        'degree',
        'master',
        'masters',
        'master of digital sciences',
        'bachelors',
        'bachelor of technology',
        'computer science and engineering',
        'kent state university',
        'jawaharlal nehru technology university'
    ],
    skills: [
        'skills',
        'skill',
        'programmig languages',
        'tools',
        skills
    ],
    certificates: [
        'Certifications',
        'certificates',
        'certificate',
        'edx HardwardX',
        'Stanford University',
        'Free Code Camp',
        'Legacy Front End',
        'Computer Science 101',
        'Hacker Rank',
        skills
    ],
    interests: [
        'interests',
        'interest',
        'Playing Guitar',
        'Music',
        'Browsing',
        'Photography',
        'Exploring'
    ]
};
var SEARCH_HITNS = ['Work Experience', 'Education', 'Skills', 'Certifications', 'Interests'];


/***/ }),

/***/ "./src/app/search-me/search-me.module.ts":
/*!***********************************************!*\
  !*** ./src/app/search-me/search-me.module.ts ***!
  \***********************************************/
/*! exports provided: SearchMeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMeModule", function() { return SearchMeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _long_story_short_long_story_short_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../long-story-short/long-story-short.module */ "./src/app/long-story-short/long-story-short.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _search_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-me.component */ "./src/app/search-me/search-me.component.ts");
/* harmony import */ var _search_not_found_search_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-not-found/search-not-found.component */ "./src/app/search-me/search-not-found/search-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var components = [_search_me_component__WEBPACK_IMPORTED_MODULE_3__["SearchMeComponent"], _search_not_found_search_not_found_component__WEBPACK_IMPORTED_MODULE_4__["SearchNotFoundComponent"]];
var SearchMeModule = /** @class */ (function () {
    function SearchMeModule() {
    }
    SearchMeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [components],
            exports: [components],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _long_story_short_long_story_short_module__WEBPACK_IMPORTED_MODULE_1__["LongStoryShortModule"]]
        })
    ], SearchMeModule);
    return SearchMeModule;
}());



/***/ }),

/***/ "./src/app/search-me/search-not-found/search-not-found.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/search-me/search-not-found/search-not-found.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-not-found-container {\n  font-weight: 400;\n}\n.search-not-found-container .fa-exclamation-circle {\n  color: #b71c1c;\n}\n.search-not-found-container mat-chip-list span {\n  font-size: 14px;\n}\n.search-not-found-container mat-chip {\n  cursor: pointer;\n  font-size: 12px;\n  color: #fff;\n  background-color: #026A78;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1tZS9zZWFyY2gtbm90LWZvdW5kL3NlYXJjaC1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzaGFyZWQvc2hhcmVkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtBQURKO0FBR0k7RUFDSSxjQ05HO0FES1g7QUFJSTtFQUNJLGVBQUE7QUFGUjtBQUtJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJDaEJNO0FEYWQiLCJmaWxlIjoic2VhcmNoLW1lL3NlYXJjaC1ub3QtZm91bmQvc2VhcmNoLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zY3NzJztcblxuLnNlYXJjaC1ub3QtZm91bmQtY29udGFpbmVyIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLmZhLWV4Y2xhbWF0aW9uLWNpcmNsZSB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1yZWQ7XG4gICAgfVxuXG4gICAgbWF0LWNoaXAtbGlzdCBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIG1hdC1jaGlwIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtY29sb3I7XG4gICAgfVxufSIsIiRkYXJrLXJlZDogI2I3MWMxYztcbiR0aGVtZS1jb2xvcjogIzAyNkE3ODtcbiR0aGVtZS1ob3Zlci1jb2xvcjogIzBDOUNCNDtcbiJdfQ== */");

/***/ }),

/***/ "./src/app/search-me/search-not-found/search-not-found.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/search-me/search-not-found/search-not-found.component.ts ***!
  \**************************************************************************/
/*! exports provided: SearchNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNotFoundComponent", function() { return SearchNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _search_me_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search-me.component */ "./src/app/search-me/search-me.component.ts");
/* harmony import */ var _search_me_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-me.constants */ "./src/app/search-me/search-me.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var SearchNotFoundComponent = /** @class */ (function () {
    function SearchNotFoundComponent() {
        this.searchHints = _search_me_constants__WEBPACK_IMPORTED_MODULE_2__["SEARCH_HITNS"];
    }
    SearchNotFoundComponent.prototype.ngOnInit = function () {
    };
    SearchNotFoundComponent.prototype.onHintClick = function (hint) {
        this.searchMeComponent.searchValue = hint;
    };
    SearchNotFoundComponent.ctorParameters = function () { return []; };
    SearchNotFoundComponent.propDecorators = {
        searchMeComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    SearchNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search-not-found',
            template: __importDefault(__webpack_require__(/*! raw-loader!./search-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-me/search-not-found/search-not-found.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./search-not-found.component.scss */ "./src/app/search-me/search-not-found/search-not-found.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SearchNotFoundComponent);
    return SearchNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/loading-spinner/loading-spinner.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n:host ::ng-deep .mat-progress-spinner circle, :host ::ng-deep .mat-spinner circle {\n  stroke: #026A78;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic2hhcmVkL3NoYXJlZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFESjtBQUdJO0VBQ0ksZUNSTTtBRE9kIiwiZmlsZSI6InNoYXJlZC9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9zaGFyZWQvc2hhcmVkLnNjc3MnO1xuXG46aG9zdCA6Om5nLWRlZXAge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgICAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHsgICBcbiAgICAgICAgc3Ryb2tlOiAkdGhlbWUtY29sb3I7XG4gICAgfVxufSIsIiRkYXJrLXJlZDogI2I3MWMxYztcbiR0aGVtZS1jb2xvcjogIzAyNkE3ODtcbiR0aGVtZS1ob3Zlci1jb2xvcjogIzBDOUNCNDtcbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/loading-spinner/loading-spinner.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadingSpinnerComponent.ctorParameters = function () { return []; };
    LoadingSpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loading-spinner',
            template: __importDefault(__webpack_require__(/*! raw-loader!./loading-spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loading-spinner/loading-spinner.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./loading-spinner.component.scss */ "./src/app/shared/loading-spinner/loading-spinner.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_35__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

/**  Copyright 2020 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ "./src/app/shared/loading-spinner/loading-spinner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var components = [_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerComponent"]];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [components],
            exports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
                components
            ],
            imports: [
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot()
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/utils/utils.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/utils/utils.service.ts ***!
  \***********************************************/
/*! exports provided: isString, isNullOrUndefined, isEmptyString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyString", function() { return isEmptyString; });
function isString(value) {
    return typeof value === 'string';
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function isEmptyString(value) {
    return isString(value) && value.trim() === '';
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /Users/mangabaipalli/Desktop/Random/MSRB.ME-Dev/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map