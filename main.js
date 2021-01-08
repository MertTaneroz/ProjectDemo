(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Win10\Desktop\FE\profilePage\profilePage\src\main.ts */"zUnb");


/***/ }),

/***/ "1DFH":
/*!******************************************************!*\
  !*** ./src/app/pages/comments/comments.component.ts ***!
  \******************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CommentsComponent_nav_11_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsComponent_nav_11_li_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const comment_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.deleteComment(comment_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yorumu Sil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r4.comment, " ");
} }
function CommentsComponent_nav_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommentsComponent_nav_11_li_2_Template, 6, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.commentList);
} }
function CommentsComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hen\u00FCz girilmi\u015F bir yorum yok.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CommentsComponent {
    constructor() {
        this.comment = '';
        this.commentList = [];
    }
    ngOnInit() {
    }
    addComment(event) {
        if (this.comment != '' && this.comment.length <= 300) {
            event.preventDefault();
            this.commentList.push({ id: Math.random(), comment: this.comment });
            this.comment = '';
            console.log(this.commentList);
        }
        else {
            event.preventDefault();
            window.alert('Yorumunuz boş ve ya 300 karakterden uzun olamaz');
        }
    }
    changeHandler(event) {
        this.comment = event.target.value;
    }
    deleteComment(id) {
        this.commentList = this.commentList.filter(item => id !== item.id);
    }
}
CommentsComponent.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(); };
CommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], decls: 14, vars: 3, consts: [[1, "comments-body"], [1, "comments-form-wrapper"], [1, "comments-form"], ["for", "comment"], ["placeholder", "Yorumunuzu yaz\u0131n...", "type", "text", "name", "comment", "id", "comment", 3, "value", "input"], [3, "click"], [1, "comments-list-wrapper"], [1, "comments-title"], ["class", "comments-wrapper", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "comments-wrapper"], [1, "comments-list"], [4, "ngFor", "ngForOf"], [1, "comment-div"], [1, "comment-button"], [1, "elseBlock"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Yorum Yaz\u0131n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CommentsComponent_Template_input_input_5_listener($event) { return ctx.changeHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsComponent_Template_button_click_6_listener($event) { return ctx.addComment($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Yorum Ekle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Yorumlar:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CommentsComponent_nav_11_Template, 3, 1, "nav", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CommentsComponent_ng_template_12_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commentList.length != 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".comments-body[_ngcontent-%COMP%] {\n  background-color: #d7d7ff;\n  height: 100vh;\n}\n\n.comments-form-wrapper[_ngcontent-%COMP%] {\n  margin-top: 72px;\n  background-color: #d7d7ff;\n  display: flex;\n}\n\n.comments-form-wrapper[_ngcontent-%COMP%]   .comments-form[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 440px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  border: 1px solid #888888;\n  padding: 20px;\n  border-radius: 5px;\n}\n\n.comments-form-wrapper[_ngcontent-%COMP%]   .comments-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 10px 0;\n  font-size: 25px;\n  color: black;\n}\n\n.comments-form-wrapper[_ngcontent-%COMP%]   .comments-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  height: 50px;\n  outline: none;\n}\n\n.comments-form-wrapper[_ngcontent-%COMP%]   .comments-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  padding: 20px 15px;\n  margin-top: 20px;\n  border: none;\n  background-color: #6f6fff;\n  border-radius: 7px;\n  color: white;\n  font-size: 20px;\n  cursor: pointer;\n  transition: 400ms;\n  outline: none;\n}\n\n.comments-form-wrapper[_ngcontent-%COMP%]   .comments-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #5757d3;\n}\n\n.comments-list-wrapper[_ngcontent-%COMP%] {\n  background-color: #d7d7ff;\n}\n\n.comments-list-wrapper[_ngcontent-%COMP%]   .comments-title[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n}\n\n.comments-list-wrapper[_ngcontent-%COMP%]   .comments-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.comments-list-wrapper[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n\n.comments-list-wrapper[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border: 1px solid #7a7a7a;\n  border-radius: 6px;\n  margin: 20px;\n  padding: 20px;\n  background-color: white;\n}\n\n.comments-list-wrapper[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .comment-div[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  height: 200px;\n  min-width: 300px;\n  width: 400px;\n  display: block;\n  word-wrap: break-word;\n  overflow: hidden;\n  border: 1px solid grey;\n  border-radius: 5px;\n  padding: 20px 0;\n  margin: 20px 0;\n}\n\n.comments-list-wrapper[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  padding: 10px 10px;\n  border: none;\n  background-color: #6f6fff;\n  border-radius: 7px;\n  color: white;\n  font-size: 20px;\n  cursor: pointer;\n  transition: 400ms;\n  outline: none;\n}\n\n.comments-list-wrapper[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #5757d3;\n}\n\n.elseBlock[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  margin: 20px;\n}\n\n@media (min-width: 1000px) and (max-width: 1440px) {\n  .comments-body[_ngcontent-%COMP%] {\n    background-color: #d7d7ff;\n    height: 100vh;\n  }\n\n  .comments-form-wrapper[_ngcontent-%COMP%] {\n    margin-top: 72px;\n    background-color: #d7d7ff;\n    display: flex;\n  }\n  .comments-form-wrapper[_ngcontent-%COMP%]   .comments-form[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 440px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n    border: 1px solid #888888;\n    padding: 20px;\n    border-radius: 5px;\n  }\n  .comments-form-wrapper[_ngcontent-%COMP%]   .comments-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin: 10px 0;\n    font-size: 25px;\n    color: black;\n  }\n  .comments-form-wrapper[_ngcontent-%COMP%]   .comments-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n    height: 50px;\n    outline: none;\n  }\n  .comments-form-wrapper[_ngcontent-%COMP%]   .comments-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: auto;\n    display: flex;\n    padding: 20px 15px;\n    margin-top: 20px;\n    border: none;\n    background-color: #6f6fff;\n    border-radius: 7px;\n    color: white;\n    font-size: 20px;\n    cursor: pointer;\n    transition: 400ms;\n    outline: none;\n  }\n  .comments-form-wrapper[_ngcontent-%COMP%]   .comments-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: #5757d3;\n  }\n\n  .comments-list-wrapper[_ngcontent-%COMP%] {\n    background-color: #d7d7ff;\n  }\n  .comments-list-wrapper[_ngcontent-%COMP%]   .comments-title[_ngcontent-%COMP%] {\n    justify-content: center;\n    display: flex;\n  }\n  .comments-list-wrapper[_ngcontent-%COMP%]   .comments-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  .comments-list-wrapper[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%] {\n    list-style-type: none;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 30px;\n  }\n  .comments-list-wrapper[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border: 1px solid #7a7a7a;\n    border-radius: 6px;\n    margin: 10px 20px;\n    padding: 10px;\n    background-color: white;\n  }\n  .comments-list-wrapper[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .comment-div[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: 700;\n    height: 150px;\n    min-width: 100px;\n    width: 350px;\n    display: block;\n    word-wrap: break-word;\n    overflow: hidden;\n    border: 1px solid grey;\n    border-radius: 5px;\n    padding: 20px 0;\n    margin: 20px 0;\n  }\n  .comments-list-wrapper[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: auto;\n    display: flex;\n    padding: 10px 10px;\n    border: none;\n    background-color: #6f6fff;\n    border-radius: 7px;\n    color: white;\n    font-size: 20px;\n    cursor: pointer;\n    transition: 400ms;\n    outline: none;\n  }\n  .comments-list-wrapper[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: #5757d3;\n  }\n\n  .elseBlock[_ngcontent-%COMP%] {\n    justify-content: center;\n    display: flex;\n    margin: 20px;\n  }\n}\n\n@media (min-width: 0px) and (max-width: 999px) {\n  .comments-body[_ngcontent-%COMP%] {\n    background-color: #d7d7ff;\n    height: 100vh;\n  }\n\n  .comments-form-wrapper[_ngcontent-%COMP%] {\n    margin-top: 72px;\n    background-color: #d7d7ff;\n    display: flex;\n  }\n  .comments-form-wrapper[_ngcontent-%COMP%]   .comments-form[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 440px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n    border: 1px solid #888888;\n    padding: 20px;\n    border-radius: 5px;\n  }\n  .comments-form-wrapper[_ngcontent-%COMP%]   .comments-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin: 10px 0;\n    font-size: 25px;\n    color: black;\n  }\n  .comments-form-wrapper[_ngcontent-%COMP%]   .comments-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n    height: 50px;\n    outline: none;\n  }\n  .comments-form-wrapper[_ngcontent-%COMP%]   .comments-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: auto;\n    display: flex;\n    padding: 20px 15px;\n    margin-top: 20px;\n    border: none;\n    background-color: #6f6fff;\n    border-radius: 7px;\n    color: white;\n    font-size: 20px;\n    cursor: pointer;\n    transition: 400ms;\n    outline: none;\n  }\n  .comments-form-wrapper[_ngcontent-%COMP%]   .comments-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: #5757d3;\n  }\n\n  .comments-list-wrapper[_ngcontent-%COMP%] {\n    background-color: #d7d7ff;\n  }\n  .comments-list-wrapper[_ngcontent-%COMP%]   .comments-title[_ngcontent-%COMP%] {\n    justify-content: center;\n    display: flex;\n  }\n  .comments-list-wrapper[_ngcontent-%COMP%]   .comments-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  .comments-list-wrapper[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%] {\n    list-style-type: none;\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  .comments-list-wrapper[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border: 1px solid #7a7a7a;\n    border-radius: 6px;\n    margin: 10px;\n    padding: 10px;\n    background-color: white;\n  }\n  .comments-list-wrapper[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .comment-div[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: 700;\n    height: 150px;\n    min-width: 100px;\n    width: 300px;\n    display: block;\n    word-wrap: break-word;\n    overflow: hidden;\n    border: 1px solid grey;\n    border-radius: 5px;\n    padding: 20px 0;\n    margin: 20px 0;\n  }\n  .comments-list-wrapper[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: auto;\n    display: flex;\n    padding: 10px 10px;\n    border: none;\n    background-color: #6f6fff;\n    border-radius: 7px;\n    color: white;\n    font-size: 20px;\n    cursor: pointer;\n    transition: 400ms;\n    outline: none;\n  }\n  .comments-list-wrapper[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: #5757d3;\n  }\n\n  .elseBlock[_ngcontent-%COMP%] {\n    justify-content: center;\n    display: flex;\n    margin: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb21tZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ1I7O0FBQ1E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ1o7O0FBQ1E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ1o7O0FBQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUNaOztBQUVRO0VBQ0kseUJBQUE7QUFBWjs7QUFJQTtFQUNJLHlCQUFBO0FBREo7O0FBR0k7RUFDSSx1QkFBQTtFQUNBLGFBQUE7QUFEUjs7QUFJSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUZSOztBQUtJO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUFIUjs7QUFLUTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBSFo7O0FBS1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFIaEI7O0FBTVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFKWjs7QUFNUTtFQUNJLHlCQUFBO0FBSlo7O0FBUUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBTEo7O0FBUUE7RUFDSTtJQUNJLHlCQUFBO0lBQ0EsYUFBQTtFQUxOOztFQVFFO0lBQ0ksZ0JBQUE7SUFDQSx5QkFBQTtJQUNBLGFBQUE7RUFMTjtFQU9NO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUFMVjtFQU9VO0lBQ0ksV0FBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQUxkO0VBT1U7SUFDSSxXQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VBTGQ7RUFPVTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0VBTGQ7RUFRVTtJQUNJLHlCQUFBO0VBTmQ7O0VBVUU7SUFDSSx5QkFBQTtFQVBOO0VBU007SUFDSSx1QkFBQTtJQUNBLGFBQUE7RUFQVjtFQVVNO0lBQ0ksYUFBQTtJQUNBLHVCQUFBO0VBUlY7RUFXTTtJQUNJLHFCQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsY0FBQTtFQVRWO0VBV1U7SUFDSSx5QkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7RUFUZDtFQVdjO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VBVGxCO0VBWVU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7RUFWZDtFQVlVO0lBQ0kseUJBQUE7RUFWZDs7RUFjRTtJQUNJLHVCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RUFYTjtBQUNGOztBQWFBO0VBQ0k7SUFDSSx5QkFBQTtJQUNBLGFBQUE7RUFYTjs7RUFjRTtJQUNJLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxhQUFBO0VBWE47RUFhTTtJQUNJLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VBWFY7RUFhVTtJQUNJLFdBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUFYZDtFQWFVO0lBQ0ksV0FBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQVhkO0VBYVU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtFQVhkO0VBY1U7SUFDSSx5QkFBQTtFQVpkOztFQWdCRTtJQUNJLHlCQUFBO0VBYk47RUFlTTtJQUNJLHVCQUFBO0lBQ0EsYUFBQTtFQWJWO0VBZ0JNO0lBQ0ksYUFBQTtJQUNBLHVCQUFBO0VBZFY7RUFpQk07SUFDSSxxQkFBQTtJQUNBLGFBQUE7SUFDQSwwQkFBQTtFQWZWO0VBaUJVO0lBQ0kseUJBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7RUFmZDtFQWlCYztJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFQWZsQjtFQWtCVTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtFQWhCZDtFQWtCVTtJQUNJLHlCQUFBO0VBaEJkOztFQW9CRTtJQUNJLHVCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RUFqQk47QUFDRiIsImZpbGUiOiJjb21tZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50cy1ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDIxNSwgMjU1KTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb21tZW50cy1mb3JtLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNzJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDIxNSwgMjU1KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLmNvbW1lbnRzLWZvcm0ge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogNDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzYsIDEzNiwgMTM2KTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTExLCAyNTUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDQwMG1zO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCA4NywgMjExKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNvbW1lbnRzLWxpc3Qtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDI1NSk7XHJcblxyXG4gICAgLmNvbW1lbnRzLXRpdGxlIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb21tZW50cy13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb21tZW50cy1saXN0IHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG5cclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyMiwgMTIyLCAxMjIpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAuY29tbWVudC1kaXYge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDExMSwgMjU1KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiA0MDBtcztcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCA4NywgMjExKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmVsc2VCbG9jayB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5jb21tZW50cy1ib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDI1NSk7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbW1lbnRzLWZvcm0td3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDI1NSk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG4gICAgICAgIC5jb21tZW50cy1mb3JtIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogNDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzYsIDEzNiwgMTM2KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTExLCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogNDAwbXM7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgODcsIDIxMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29tbWVudHMtbGlzdC13cmFwcGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDI1NSk7XHJcbiAgICBcclxuICAgICAgICAuY29tbWVudHMtdGl0bGUge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuY29tbWVudHMtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5jb21tZW50cy1saXN0IHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyMiwgMTIyLCAxMjIpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5jb21tZW50LWRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTExLCAxMTEsIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiA0MDBtcztcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgODcsIDIxMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZWxzZUJsb2NrIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogOTk5cHgpIHtcclxuICAgIC5jb21tZW50cy1ib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDI1NSk7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbW1lbnRzLWZvcm0td3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDI1NSk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG4gICAgICAgIC5jb21tZW50cy1mb3JtIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogNDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzYsIDEzNiwgMTM2KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTExLCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogNDAwbXM7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgODcsIDIxMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29tbWVudHMtbGlzdC13cmFwcGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDI1NSk7XHJcbiAgICBcclxuICAgICAgICAuY29tbWVudHMtdGl0bGUge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuY29tbWVudHMtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5jb21tZW50cy1saXN0IHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIFxyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjIsIDEyMiwgMTIyKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnQtZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDExMSwgMjU1KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDQwMG1zO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCA4NywgMjExKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5lbHNlQmxvY2sge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comments',
                templateUrl: './comments.component.html',
                styleUrls: ['./comments.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, consts: [[1, "home-wrapper"], [1, "home-index"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Proje Ana Sayfas\u0131");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".home-wrapper[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #c0c0ff, #7e89ff);\n  margin-top: 72px;\n  height: calc(100vh - 72px);\n  display: flex;\n  justify-content: center;\n}\n\n.home-index[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  font-size: 35px;\n  color: white;\n  display: flex;\n  height: 60px;\n  padding: 20px;\n}\n\n.home-index[_ngcontent-%COMP%]:hover {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdURBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0FBR0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYigxOTIsIDE5MiwgMjU1KSwgIzdlODlmZik7XHJcbiAgICBtYXJnaW4tdG9wOiA3MnB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzJweCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmhvbWUtaW5kZXgge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4uaG9tZS1pbmRleDpob3ZlciB7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "np0s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'profilePage';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "XEn3":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 12, vars: 0, consts: [[1, "contact-wrapper"], [1, "contact-index"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Telefon: +90 0534 478 51 36");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email: merttaneroz@hotmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Github: https://github.com/MertTaneroz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".contact-wrapper[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #c0c0ff, #7e89ff);\n  margin-top: 72px;\n  height: calc(100vh - 72px);\n  display: flex;\n}\n\n.contact-index[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  padding: 20px;\n}\n\n.contact-index[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.contact-index[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: black;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdURBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUk7RUFDSSxxQkFBQTtBQUVSOztBQUFRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUVaIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2IoMTkyLCAxOTIsIDI1NSksICM3ZTg5ZmYpO1xyXG4gICAgbWFyZ2luLXRvcDogNzJweDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcycHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY29udGFjdC1pbmRleCB7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICBsaXtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "np0s");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_mywork_mywork_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/mywork/mywork.component */ "ryzF");
/* harmony import */ var _pages_comments_comments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/comments/comments.component */ "1DFH");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
        _pages_mywork_mywork_component__WEBPACK_IMPORTED_MODULE_7__["MyworkComponent"],
        _pages_comments_comments_component__WEBPACK_IMPORTED_MODULE_8__["CommentsComponent"],
        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                    _pages_mywork_mywork_component__WEBPACK_IMPORTED_MODULE_7__["MyworkComponent"],
                    _pages_comments_comments_component__WEBPACK_IMPORTED_MODULE_8__["CommentsComponent"],
                    _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "np0s":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ToolbarComponent {
    constructor() {
        this.check = false;
    }
    ngOnInit() {
    }
    showMenu() {
        this.check = true;
    }
    hideMenu() {
        this.check = false;
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 24, vars: 4, consts: [[1, "toolbar-wrapper"], [1, "toolbar-main-wrapper"], ["routerLink", "/", 1, "toolbar-main"], [1, "toolbar-list-wrapper"], [1, "toolbar-list"], [1, "toolbar-list-item"], ["routerLink", "/about", 1, "toolbar-link"], ["routerLink", "/mywork", 1, "toolbar-link"], ["routerLink", "/comments", 1, "toolbar-link"], ["routerLink", "/contact", 1, "toolbar-link"], [1, "button-wrapper"], [1, "toolbar-btn", 3, "click"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ana Sayfa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hakk\u0131mda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Yapt\u0131\u011F\u0131m \u0130\u015Fler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Yorumlar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0130leti\u015Fim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_19_listener() { return ctx.hideMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Hide Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_22_listener() { return ctx.showMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Show Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("changestyle", ctx.check);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("changebutton", ctx.check);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".toolbar-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #6f6fff;\n  justify-content: space-between;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n}\n.toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: white;\n  transition: 400ms;\n  padding: 20px 15px;\n  margin: 0 15px;\n  font-size: 28px;\n  border-radius: 4px;\n}\n.toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-main[_ngcontent-%COMP%]:hover {\n  background-color: #a1a1fa;\n}\n.toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-list-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-list[_ngcontent-%COMP%] {\n  display: flex;\n  list-style-type: none;\n}\n.toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-list[_ngcontent-%COMP%]   .toolbar-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  transition: 400ms;\n  margin: 0 15px;\n}\n.toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-list[_ngcontent-%COMP%]   .toolbar-list-item[_ngcontent-%COMP%]   .toolbar-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  padding: 10px 15px;\n  color: white;\n  font-size: 22px;\n}\n.toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-list[_ngcontent-%COMP%]   .toolbar-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #a1a1fa;\n}\n.toolbar-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 500px) and (max-width: 841px) {\n  .toolbar-wrapper[_ngcontent-%COMP%] {\n    display: block;\n    background-color: #6f6fff;\n    justify-content: space-between;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-main-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-main[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: white;\n    transition: 400ms;\n    padding: 20px 15px;\n    margin: 0 15px;\n    font-size: 28px;\n    border-radius: 4px;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-main[_ngcontent-%COMP%]:hover {\n    background-color: #a1a1fa;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-list[_ngcontent-%COMP%] {\n    display: none;\n    list-style-type: none;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-list[_ngcontent-%COMP%]   .toolbar-list-item[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    transition: 400ms;\n    margin: 0 15px;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-list[_ngcontent-%COMP%]   .toolbar-list-item[_ngcontent-%COMP%]   .toolbar-link[_ngcontent-%COMP%] {\n    text-decoration: none;\n    padding: 10px 15px;\n    color: white;\n    font-size: 22px;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-list[_ngcontent-%COMP%]   .toolbar-list-item[_ngcontent-%COMP%]:hover {\n    background-color: #a1a1fa;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .changestyle[_ngcontent-%COMP%] {\n    display: flex;\n    float: right;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%] {\n    background-color: #ababfa;\n    display: flex;\n    padding: 10px 15px;\n    cursor: pointer;\n    font-size: 16px;\n    margin-right: 20px;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    outline: none;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .changebutton[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%]:hover {\n    background-color: #f4f4f7;\n    color: black;\n  }\n}\n@media (min-width: 0px) and (max-width: 499px) {\n  .toolbar-wrapper[_ngcontent-%COMP%] {\n    display: block;\n    background-color: #6f6fff;\n    justify-content: space-between;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-main-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-main[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: white;\n    transition: 400ms;\n    padding: 20px 15px;\n    margin: 0 15px;\n    font-size: 28px;\n    border-radius: 4px;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-main[_ngcontent-%COMP%]:hover {\n    background-color: #a1a1fa;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-list[_ngcontent-%COMP%] {\n    display: none;\n    list-style-type: none;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-list[_ngcontent-%COMP%]   .toolbar-list-item[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    transition: 400ms;\n    margin: 0 7px;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-list[_ngcontent-%COMP%]   .toolbar-list-item[_ngcontent-%COMP%]   .toolbar-link[_ngcontent-%COMP%] {\n    text-decoration: none;\n    padding: 10px 3px;\n    color: white;\n    font-size: 10px;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-list[_ngcontent-%COMP%]   .toolbar-list-item[_ngcontent-%COMP%]:hover {\n    background-color: #a1a1fa;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .changestyle[_ngcontent-%COMP%] {\n    display: flex;\n    float: right;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%] {\n    background-color: #ababfa;\n    display: flex;\n    padding: 7px 10px;\n    cursor: pointer;\n    font-size: 12px;\n    margin-right: 5px;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    outline: none;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .changebutton[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .toolbar-wrapper[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%]:hover {\n    background-color: #f4f4f7;\n    color: black;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQWlCLFFBQUE7RUFBUyxTQUFBO0VBQVUsVUFBQTtBQUl4QztBQUZJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFJUjtBQUZJO0VBQ0kseUJBQUE7QUFJUjtBQURJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBR1I7QUFBSTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQUVSO0FBQVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFWjtBQUFZO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRWhCO0FBQ1E7RUFDSSx5QkFBQTtBQUNaO0FBSUE7RUFDSSxhQUFBO0FBREo7QUFHQTtFQUVJO0lBQ0ksY0FBQTtJQUNBLHlCQUFBO0lBQ0EsOEJBQUE7SUFDQSxlQUFBO0lBQWlCLFFBQUE7SUFBUyxTQUFBO0lBQVUsVUFBQTtFQUUxQztFQUFFO0lBQ0ksYUFBQTtJQUNBLHVCQUFBO0VBRU47RUFDRTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VBQ047RUFDRTtJQUNJLHlCQUFBO0VBQ047RUFFRTtJQUNJLGFBQUE7SUFDQSxxQkFBQTtFQUFOO0VBRU07SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUFBVjtFQUVVO0lBQ0kscUJBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VBQWQ7RUFHTTtJQUNJLHlCQUFBO0VBRFY7RUFLRTtJQUNJLGFBQUE7SUFDQSxZQUFBO0VBSE47RUFNRTtJQUNJLGFBQUE7SUFDQSx1QkFBQTtFQUpOO0VBT0U7SUFDSSx5QkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtFQUxOO0VBUUU7SUFDSSxhQUFBO0VBTk47RUFTRTtJQUNJLHlCQUFBO0lBQ0EsWUFBQTtFQVBOO0FBQ0Y7QUFXQTtFQUVJO0lBQ0ksY0FBQTtJQUNBLHlCQUFBO0lBQ0EsOEJBQUE7SUFDQSxlQUFBO0lBQWlCLFFBQUE7SUFBUyxTQUFBO0lBQVUsVUFBQTtFQVAxQztFQVNFO0lBQ0ksYUFBQTtJQUNBLHVCQUFBO0VBUE47RUFVRTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VBUk47RUFVRTtJQUNJLHlCQUFBO0VBUk47RUFXRTtJQUNJLGFBQUE7SUFDQSxxQkFBQTtFQVROO0VBV007SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7RUFUVjtFQVdVO0lBQ0kscUJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VBVGQ7RUFZTTtJQUNJLHlCQUFBO0VBVlY7RUFjRTtJQUNJLGFBQUE7SUFDQSxZQUFBO0VBWk47RUFlRTtJQUNJLGFBQUE7SUFDQSx1QkFBQTtFQWJOO0VBZ0JFO0lBQ0kseUJBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RUFkTjtFQWlCRTtJQUNJLGFBQUE7RUFmTjtFQWtCRTtJQUNJLHlCQUFBO0lBQ0EsWUFBQTtFQWhCTjtBQUNGIiwiZmlsZSI6InRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTExLCAxMTEsIDI1NSk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IHRvcDowcHg7IGxlZnQ6MHB4OyByaWdodDowcHg7IFxyXG5cclxuICAgIC50b29sYmFyLW1haW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDQwMG1zO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxuICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgLnRvb2xiYXItbWFpbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTYxLCAyNTApO1xyXG4gICAgfVxyXG5cclxuICAgIC50b29sYmFyLWxpc3Qtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudG9vbGJhci1saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHJcbiAgICAgICAgLnRvb2xiYXItbGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogNDAwbXM7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG5cclxuICAgICAgICAgICAgLnRvb2xiYXItbGluayB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvb2xiYXItbGlzdC1pdGVtOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTYxLCAyNTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRvb2xiYXItYnRuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6NTAwcHgpIGFuZCAobWF4LXdpZHRoOjg0MXB4KSB7XHJcblxyXG4gICAgLnRvb2xiYXItd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTExLCAyNTUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IHRvcDowcHg7IGxlZnQ6MHB4OyByaWdodDowcHg7IFxyXG5cclxuICAgIC50b29sYmFyLW1haW4td3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH0gICAgXHJcblxyXG4gICAgLnRvb2xiYXItbWFpbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogNDAwbXM7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcbiAgICAudG9vbGJhci1tYWluOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxNjEsIDI1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvb2xiYXItbGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblxyXG4gICAgICAgIC50b29sYmFyLWxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDQwMG1zO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuXHJcbiAgICAgICAgICAgIC50b29sYmFyLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b29sYmFyLWxpc3QtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE2MSwgMjUwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGFuZ2VzdHlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDsgXHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24td3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudG9vbGJhci1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzEsIDE3MSwgMjUwKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGFuZ2VidXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvb2xiYXItYnRuOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyNDQsIDI0Nyk7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG59IFxyXG5cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDowcHgpIGFuZCAobWF4LXdpZHRoOjQ5OXB4KSB7XHJcblxyXG4gICAgLnRvb2xiYXItd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTExLCAyNTUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IHRvcDowcHg7IGxlZnQ6MHB4OyByaWdodDowcHg7IFxyXG5cclxuICAgIC50b29sYmFyLW1haW4td3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH0gICAgXHJcblxyXG4gICAgLnRvb2xiYXItbWFpbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogNDAwbXM7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcbiAgICAudG9vbGJhci1tYWluOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxNjEsIDI1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvb2xiYXItbGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblxyXG4gICAgICAgIC50b29sYmFyLWxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDQwMG1zO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgN3B4O1xyXG5cclxuICAgICAgICAgICAgLnRvb2xiYXItbGluayB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDNweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudG9vbGJhci1saXN0LWl0ZW06aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxNjEsIDI1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hhbmdlc3R5bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvb2xiYXItYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcxLCAxNzEsIDI1MCk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYW5nZWJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudG9vbGJhci1idG46aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDI0NCwgMjQ3KTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbn0gXHJcblxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rVrE":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 4, vars: 0, consts: [[1, "about-wrapper"], [1, "about-index"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " I have been working on learning Web Design and Development which was my long time aspiration. During the time i have worked for international hotel brands, i have always tried to communicate with IT departments to see how they operate to develop a web site and test its functions. When I had the opportunity to alter my career into Web Development, I started to learn basics and logic of it on my own. After seeing that it is my definite career choice ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-wrapper[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #c0c0ff, #7e89ff);\n  margin-top: 72px;\n  height: calc(100vh - 72px);\n  display: flex;\n  justify-content: center;\n}\n\n.about-index[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  font-size: 25px;\n  color: white;\n  height: 60px;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVEQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRUoiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiKDE5MiwgMTkyLCAyNTUpLCAjN2U4OWZmKTtcclxuICAgIG1hcmdpbi10b3A6IDcycHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MnB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYWJvdXQtaW5kZXgge1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ryzF":
/*!**************************************************!*\
  !*** ./src/app/pages/mywork/mywork.component.ts ***!
  \**************************************************/
/*! exports provided: MyworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyworkComponent", function() { return MyworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MyworkComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyworkComponent.ɵfac = function MyworkComponent_Factory(t) { return new (t || MyworkComponent)(); };
MyworkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyworkComponent, selectors: [["app-mywork"]], decls: 11, vars: 0, consts: [[1, "mywork-wrapper"], [1, "mywork-imgs"], ["src", "https://source.unsplash.com/random/100\u00D7100"]], template: function MyworkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".mywork-wrapper[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #c0c0ff, #7e89ff);\n  margin-top: 72px;\n  height: calc(100vh - 72px);\n  display: flex;\n  justify-content: center;\n}\n\n.mywork-imgs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin-top: 10px;\n}\n\n.mywork-imgs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  overflow: hidden;\n}\n\n@media (min-width: 841px) and (max-width: 1040px) {\n  .mywork-wrapper[_ngcontent-%COMP%] {\n    background: linear-gradient(to right, #c0c0ff, #7e89ff);\n    margin-top: 72px;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n  }\n\n  .mywork-imgs[_ngcontent-%COMP%] {\n    display: grid;\n    grid-gap: 20px;\n    grid-template-columns: 1fr 1fr;\n    margin-top: 20px;\n  }\n  .mywork-imgs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n    overflow: hidden;\n  }\n}\n\n@media (min-width: 0px) and (max-width: 840px) {\n  .mywork-wrapper[_ngcontent-%COMP%] {\n    background: linear-gradient(to right, #c0c0ff, #7e89ff);\n    margin-top: 72px;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n  }\n\n  .mywork-imgs[_ngcontent-%COMP%] {\n    display: grid;\n    grid-gap: 20px;\n    grid-template-columns: 1fr;\n    margin-top: 40px;\n  }\n  .mywork-imgs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n    overflow: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxteXdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1REFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNSOztBQUdBO0VBQ0k7SUFDSSx1REFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtFQUFOOztFQUdFO0lBQ0ksYUFBQTtJQUNBLGNBQUE7SUFDQSw4QkFBQTtJQUNBLGdCQUFBO0VBQU47RUFFTTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7RUFBVjtBQUNGOztBQUdBO0VBQ0k7SUFDSSx1REFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtFQUROOztFQUlFO0lBQ0ksYUFBQTtJQUNBLGNBQUE7SUFDQSwwQkFBQTtJQUNBLGdCQUFBO0VBRE47RUFHTTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7RUFEVjtBQUNGIiwiZmlsZSI6Im15d29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teXdvcmstd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiKDE5MiwgMTkyLCAyNTUpLCAjN2U4OWZmKTtcclxuICAgIG1hcmdpbi10b3A6IDcycHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MnB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm15d29yay1pbWdzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWdhcDogMjBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6ODQxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDQwcHgpIHtcclxuICAgIC5teXdvcmstd3JhcHBlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYigxOTIsIDE5MiwgMjU1KSwgIzdlODlmZik7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzJweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm15d29yay1pbWdzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDowcHgpIGFuZCAobWF4LXdpZHRoOiA4NDBweCkge1xyXG4gICAgLm15d29yay13cmFwcGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiKDE5MiwgMTkyLCAyNTUpLCAjN2U4OWZmKTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3MnB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubXl3b3JrLWltZ3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyworkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mywork',
                templateUrl: './mywork.component.html',
                styleUrls: ['./mywork.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_comments_comments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/comments/comments.component */ "1DFH");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_mywork_mywork_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/mywork/mywork.component */ "ryzF");









const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'mywork', component: _pages_mywork_mywork_component__WEBPACK_IMPORTED_MODULE_6__["MyworkComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'comments', component: _pages_comments_comments_component__WEBPACK_IMPORTED_MODULE_3__["CommentsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map