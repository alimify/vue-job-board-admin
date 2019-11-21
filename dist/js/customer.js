webpackJsonp([5],{

/***/ 1209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db1__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_datepicker__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_js_datepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directive__ = __webpack_require__(6);






Vue.directive('dropdown', __WEBPACK_IMPORTED_MODULE_5__directive__["a" /* dropdown */]);
Vue.directive('next-show', __WEBPACK_IMPORTED_MODULE_5__directive__["b" /* nextShow */]);
var addCategory = new Vue({
    el: '#app-transaction',
    data: {
        tDrop: false,
        searchType: 'Professionals',
        modalAddSkills: false,
        uploading: 0,
        uploadRes: '',
        date: {
            from: '',
            to: ''
        },
        form: {
            skillName: '',
            category: ''
        },
        multiAdd: {
            all: [],
            input: ''
        },
        db: __WEBPACK_IMPORTED_MODULE_1__db1__["a" /* default */]
    },
    mixins: [__WEBPACK_IMPORTED_MODULE_3__mixin__["b" /* tableMixin */], __WEBPACK_IMPORTED_MODULE_3__mixin__["a" /* directive */]],
    computed: {
        tableData: function tableData() {
            return this.table.data[this.table.pagination.now];
        }
    },
    methods: {
        newSkill: function newSkill(e) {
            var _this = this;

            // axios.post('path', form).then(Response => {

            // }).catch(error => {

            // })
            Object(__WEBPACK_IMPORTED_MODULE_2__helper__["a" /* child */])(e.target, 'button.primary').disabled = 'disabled';
            this.uploading = 1;
            this.uploadRes = 'Saving <img src="./dist/images/loading.gif" alt="">';
            setTimeout(function () {
                _this.uploading = 2;
                _this.uploadRes = '<span class="success feedback">Saved..</span>';
                Object(__WEBPACK_IMPORTED_MODULE_2__helper__["a" /* child */])(e.target, 'button.primary').disabled = '';
                setTimeout(function () {
                    _this.modalAddSkills = false;
                    _this.uploadRes = '';
                    _this.uploading = false;
                }, 500);
            }, 3000);
            // if error `< span class="error feedback" > error message</span >`
        },
        pushNew: function pushNew() {
            this.multiAdd.all.push(this.multiAdd.input);
            this.multiAdd.input = '';
        },
        removeThis: function removeThis(el) {
            this.multiAdd.all.splice(this.multiAdd.all.indexOf(el), 1);
        },
        createFocus: function createFocus(e) {
            Object(__WEBPACK_IMPORTED_MODULE_2__helper__["a" /* child */])(e.target, 'input').focus();
        },
        datepick: function datepick(el, event) {
            var date = __WEBPACK_IMPORTED_MODULE_4_js_datepicker___default()(event.target, {

                formatter: function formatter(el, date) {
                    el.value = date.getDay() + '-' + date.getDate() + '-' + date.getFullYear();
                },
                onSelect: function onSelect(instance) {
                    // Show which date was selected.
                    console.log(instance.dateSelected);
                },
                overlayPlaceholder: 'Enter year eg. 2018'
            });
        },
        tagsAddClass: function tagsAddClass(status) {
            var clas = void 0;
            switch (status) {
                case 'released':
                case 'funded':
                    clas = 'success';
                    break;
                case 'due':
                    clas = 'info';
                    break;
                case 'suspended':
                    clas = 'error';
                default:
                    clas = 'info';
                    break;
            }

            return clas;
        }
    }
});

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tableMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return directive; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper__ = __webpack_require__(1);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }


var tableMixin = {
    data: {
        table: {
            checkbox: {
                checked: {},
                all: false
            },
            pagination: {
                prev: null,
                next: 0,
                chunks: [], //paginations arrays for creating tabs
                tabLimit: 5, //numbers of pagination tab to be displayed at once
                now: 0, //current rows
                from: 0,
                to: 5,
                show: 5 //numbers of rows to display at once
            },
            data: [] // table data
        }
    },
    methods: {
        sortTable: function sortTable(where, e) {

            var sortType = e.target.attributes['aria-sort'],
                _this = e.target,
                toSort = this.table.data[this.table.pagination.now];
            if (sortType.value === 'ascending') {
                toSort = toSort.sort(function (a, b) {
                    return a[where] < b[where];
                });
                sortType.value = 'decending';
                toggleFocus(_this, 'desc');
            } else {
                toSort = toSort.sort(function (a, b) {
                    return a[where] > b[where];
                });
                sortType.value = 'ascending';
                toggleFocus(_this, 'asc');
            }
            function toggleFocus(ele, clas) {
                [].concat(_toConsumableArray(ele.parentElement.children)).forEach(function (s) {
                    s.classList.contains('asc') ? s.classList.remove('asc') : '';
                    s.classList.contains('desc') ? s.classList.remove('desc') : '';
                });
                ele.classList.add(clas);
            }
        },
        updateShow: function updateShow(e) {
            //Update the table rows limit to this.value
            //and call the paginate method to update the table data chunks

            var _this = e.target;
            this.table.pagination.show = parseInt(_this.value);
            // this.table.pagination.now = 0;
            this.paginate(this.db);
        },
        paginate: function paginate(data) {

            this.table.data = _.chunk(data, this.table.pagination.show);
            this.table.pagination.chunks = [].concat(_toConsumableArray(Array(this.table.data.length).keys()));
            //split the raw data into chunks


            //Create arrays for pagination tabs base on the data.length
        },
        pagCheck: function pagCheck(e) {
            //pull the data store in this element dataset attribute and parse into valid object
            var p = JSON.parse(e.target.dataset.info);

            //display all the items in the table data array base on this 
            //element value
            this.table.pagination.now = p.value;

            if (p.index > this.table.pagination.tabLimit - 1) {

                if (!(p.value >= this.table.pagination.chunks.length - 1)) {
                    this.table.pagination.from += 1;
                    this.table.pagination.to += 1;
                }
            } else if (p.index <= 1) {

                if (!(p.value <= this.table.pagination.chunks[0])) {
                    this.table.pagination.from -= 1;
                    this.table.pagination.to -= 1;
                }
            }
        },
        backOrFront: function backOrFront(arg) {
            var n = this.table.pagination,
                d = this.table.data;
            if (arg === 'back' && d[n.now] !== d[0]) {
                n.now -= 1;
            } else if (arg === 'front' && d[n.now] !== d[d.length - 1]) {
                n.now += 1;
            }
        },
        tableCheckBoxAll: function tableCheckBoxAll(e) {
            var _this = e.target,
                table = Object(__WEBPACK_IMPORTED_MODULE_0__helper__["b" /* findParent */])(_this, 'table'),
                vm = this;
            vm.table.checkbox.checked = {};
            Object(__WEBPACK_IMPORTED_MODULE_0__helper__["a" /* child */])(table, "tbody tr>td:nth-child(1n) input[type='checkbox'", true).forEach(function (box) {
                vm.table.checkbox.checked[box.name] = vm.table.checkbox.all;
            });
        },
        filterStatus: function filterStatus(type) {
            var f = this.db.filter(function (el) {
                return type == el.status;
            });
            this.table.pagination.now = 0;
            this.filterTab = type;
            if (type == 'all') {
                this.paginate(this.db);
                return false;
            }
            this.paginate(f);
        }
    },
    computed: {
        pagIndexing: function pagIndexing() {
            return _.slice(this.table.pagination.chunks, this.table.pagination.from, this.table.pagination.to);
        },
        tableShowing: function tableShowing() {
            var total = [],
                d = this.table.data,
                p = this.table.pagination.now,
                l = 4,
                //this.table.data[p].length,
            to,
                from;
            if (d[p] !== d[d.length - 1]) {
                to = (p + 1) * this.table.pagination.show;
                from = to - this.table.pagination.show + 1;
            } else if (d[p] === d[0]) {
                to = l;
                from = 1;
            } else {
                to = p * this.table.pagination.show + l;
                from = to - l;
            }
            this.table.data.forEach(function (a) {
                return total.push.apply(total, _toConsumableArray(a));
            });
            return {
                total: total.length,
                from: from,
                to: to
            };
        },
        end: function end() {
            var n = this.table.pagination,
                d = this.table.data;
            return d[n.now] !== d[d.length - 1];
        }
    },
    created: function created() {
        this.paginate(this.db);
    }
};
var directive = {
    directives: {
        linkactive: {
            inserted: function inserted(el) {
                var path = location.pathname;
                [].concat(_toConsumableArray(el.children)).forEach(function (a) {
                    a.attributes.href.value == path ? a.classList.add('active') : '';
                });
            }
        }
    }
};

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};"object"===( false?"undefined":n(exports))?module.exports=e(): true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return e()}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):t.datepicker=e()}(this,function(){"use strict";function t(t,o){var a=t.split?document.querySelector(t):t;o=e(o||n(),a,t);var s=a.parentElement,i=document.createElement("div"),c=o,u=c.startDate,d=c.dateSelected,p=a===document.body||a===document.querySelector("html"),y={el:a,parent:s,nonInput:"INPUT"!==a.nodeName,noPosition:p,position:!p&&o.position,startDate:u,dateSelected:d,minDate:o.minDate,maxDate:o.maxDate,noWeekends:!!o.noWeekends,calendar:i,currentMonth:(u||d).getMonth(),currentMonthName:(o.months||g)[(u||d).getMonth()],currentYear:(u||d).getFullYear(),setDate:h,reset:f,remove:v,onSelect:o.onSelect,onShow:o.onShow,onHide:o.onHide,onMonthChange:o.onMonthChange,formatter:o.formatter,months:o.months||g,days:o.customDays||S,startDay:o.startDay,overlayPlaceholder:o.overlayPlaceholder||"4-digit year",overlayButton:o.overlayButton||"Submit",disableMobile:o.disableMobile,isMobile:"ontouchstart"in window};return d&&l(a,y),i.classList.add("qs-datepicker"),i.classList.add("qs-hidden"),w.push(a),r(u||d,y),b.forEach(function(t){window.addEventListener(t,D.bind(y))}),"static"===getComputedStyle(s).position&&(s.style.position="relative"),s.appendChild(i),y}function e(t,e){if(w.includes(e))throw new Error("A datepicker already exists on that element.");var n=t.position,r=t.maxDate,a=t.minDate,s=t.dateSelected,i=t.formatter,c=t.customMonths,l=t.customDays,u=t.overlayPlaceholder,d=t.overlayButton,h=t.startDay;if(n){if(!["tr","tl","br","bl"].some(function(t){return n===t}))throw new Error('"options.position" must be one of the following: tl, tr, bl, or br.');t.position=o(n)}else t.position=o("bl");if(["startDate","dateSelected","minDate","maxDate"].forEach(function(e){if(t[e]){if(!p(t[e])||isNaN(+t[e]))throw new TypeError('"options.'+e+'" needs to be a valid JavaScript Date object.');t[e]=y(t[e])}}),t.startDate=t.startDate||t.dateSelected||y(new Date),t.formatter="function"==typeof i?i:null,r<a)throw new Error('"maxDate" in options is less than "minDate".');if(s){if(a>s)throw new Error('"dateSelected" in options is less than "minDate".');if(r<s)throw new Error('"dateSelected" in options is greater than "maxDate".')}if(["onSelect","onShow","onHide","onMonthChange"].forEach(function(e){t[e]="function"==typeof t[e]&&t[e]}),[c,l].forEach(function(e,n){if(e){var o=['"customMonths" must be an array with 12 strings.','"customDays" must be an array with 7 strings.'];if("[object Array]"!=={}.toString.call(e)||e.length!==(n?7:12))throw new Error(o[n]);t[n?"days":"months"]=e}}),void 0!==h&&+h&&+h>0&&+h<7){var f=(t.customDays||S).slice(),v=f.splice(0,h);t.customDays=f.concat(v),t.startDay=+h}else t.startDay=0;return[u,d].forEach(function(e,n){e&&e.split&&(n?t.overlayButton=e:t.overlayPlaceholder=e)}),t}function n(){return{startDate:y(new Date),position:"bl"}}function o(t){var e={};return e[M[t[0]]]=1,e[M[t[1]]]=1,e}function r(t,e){var n=a(t,e),o=s(t,e),r=i(e);e.calendar.innerHTML=n+o+r}function a(t,e){return'\n      <div class="qs-controls">\n        <div class="qs-arrow qs-left"></div>\n        <div class="qs-month-year">\n          <span class="qs-month">'+e.months[t.getMonth()]+'</span>\n          <span class="qs-year">'+t.getFullYear()+'</span>\n        </div>\n        <div class="qs-arrow qs-right"></div>\n      </div>\n    '}function s(t,e){var n=e.minDate,o=e.maxDate,r=e.dateSelected,a=e.currentYear,s=e.currentMonth,i=e.noWeekends,c=e.days,l=new Date,u=l.toJSON().slice(0,7)===t.toJSON().slice(0,7),d=new Date(new Date(t).setDate(1)),h=d.getDay()-e.startDay,f=h<0?7:0;d.setMonth(d.getMonth()+1),d.setDate(0);var p=d.getDate(),y=[],v=f+7*((h+p)/7|0);v+=(h+p)%7?7:0,0!==e.startDay&&0===h&&(v+=7);for(var m=1;m<=v;m++){var q=c[(m-1)%7],D=m-(h>=0?h:7+h),w=new Date(a,s,D),b=D<1||D>p,S="",g='<span class="qs-num">'+D+"</span>";if(b)S="qs-empty",g="";else{var M=n&&w<n||o&&w>o,E=c[6],L=c[0],N=q===E||q===L,x=u&&!M&&D===l.getDate();M=M||i&&N,S=M?"qs-disabled":x?"qs-current":""}+w!=+r||b||(S+=" qs-active"),y.push('<div class="qs-square qs-num '+q+" "+S+'">'+g+"</div>")}var C=c.map(function(t){return'<div class="qs-square qs-day">'+t+"</div>"}).concat(y);if(C.length%7!=0){throw new Error("Calendar not constructed properly. The # of squares should be a multiple of 7.")}return C.unshift('<div class="qs-squares">'),C.push("</div>"),C.join("")}function i(t){return'\n      <div class="qs-overlay qs-hidden">\n        <div class="qs-close">&#10005;</div>\n        <input type="number" class="qs-overlay-year" placeholder="'+t.overlayPlaceholder+'" />\n        <div class="qs-submit qs-disabled">'+t.overlayButton+"</div>\n      </div>\n    "}function c(t,e){var n=e.currentMonth,o=e.currentYear,r=e.calendar,a=e.el,s=e.onSelect,i=r.querySelector(".qs-active"),c=t.textContent;e.dateSelected=new Date(o,n,c),i&&i.classList.remove("qs-active"),t.classList.add("qs-active"),l(a,e),m(e),s&&s(e)}function l(t,e){if(!e.nonInput)return e.formatter?e.formatter(t,e.dateSelected):void(t.value=e.dateSelected.toDateString())}function u(t,e,n){n?e.currentYear=n:(e.currentMonth+=t.contains("qs-right")?1:-1,12===e.currentMonth?(e.currentMonth=0,e.currentYear++):-1===e.currentMonth&&(e.currentMonth=11,e.currentYear--)),r(new Date(e.currentYear,e.currentMonth,1),e),e.currentMonthName=e.months[e.currentMonth],e.onMonthChange&&n&&e.onMonthChange(e)}function d(t){if(!t.noPosition){var e=t.el,n=t.calendar,o=t.position,r=t.parent,a=o.top,s=o.right,i=r.getBoundingClientRect(),c=e.getBoundingClientRect(),l=n.getBoundingClientRect(),u=c.top-i.top+r.scrollTop,d="\n      top:"+(u-(a?l.height:-1*c.height))+"px;\n      left:"+(c.left-i.left+(s?c.width-l.width:0))+"px;\n    ";n.setAttribute("style",d)}}function h(t,e){if(!p(t))throw new TypeError("`setDate` needs a JavaScript Date object.");t=y(t),this.currentYear=t.getFullYear(),this.currentMonth=t.getMonth(),this.currentMonthName=this.months[t.getMonth()],this.dateSelected=e?void 0:t,!e&&l(this.el,this),r(t,this),e&&(this.el.value="")}function f(){this.setDate(this.startDate,!0)}function p(t){return"[object Date]"==={}.toString.call(t)}function y(t){return new Date(t.toDateString())}function v(){var t=this.calendar,e=this.parent,n=this.el;b.forEach(function(t){window.removeEventListener(t,D)}),t.remove(),t.hasOwnProperty("parentStyle")&&(e.style.position=""),w=w.filter(function(t){return t!==n})}function m(t){t.calendar.classList.add("qs-hidden"),t.onHide&&t.onHide(t)}function q(t){t.calendar.classList.remove("qs-hidden"),d(t),t.onShow&&t.onShow(t)}function D(t){function e(e){var r=e.calendar,a=l.classList,s=r.querySelector(".qs-month-year"),d=a.contains("qs-close");if(a.contains("qs-num")){var h="SPAN"===l.nodeName?l.parentNode:l;!["qs-disabled","qs-active","qs-empty"].some(function(t){return h.classList.contains(t)})&&c(h,e)}else if(a.contains("qs-arrow"))u(a,e);else if(i.includes(s)||d)n(r,d,e);else if(l.classList.contains("qs-submit")){var f=r.querySelector(".qs-overlay-year");o(t,f,e)}}function n(t,e,n){[".qs-overlay",".qs-controls",".qs-squares"].forEach(function(e,n){t.querySelector(e).classList.toggle(n?"qs-blur":"qs-hidden")});var o=t.querySelector(".qs-overlay-year");e?o.value="":o.focus()}function o(t,e,n){var o=isNaN((new Date).setFullYear(e.value||void 0));if(13===t.which||"click"===t.type){if(o||e.classList.contains("qs-disabled"))return;u(null,n,e.value)}else{n.calendar.querySelector(".qs-submit").classList[o?"add":"remove"]("qs-disabled")}}if(!this.isMobile||!this.disableMobile){if(!t.path){for(var r=t.target,a=[];r!==document;)a.push(r),r=r.parentNode;t.path=a}var s=t.type,i=t.path,l=t.target,d=this.calendar,h=this.el,f=d.classList,p=f.contains("qs-hidden"),y=i.includes(d);if("keydown"===s){var v=d.querySelector(".qs-overlay");if(13===t.which&&!v.classList.contains("qs-hidden"))return t.stopPropagation(),o(t,l,this);if(27===t.which)return n(d,!0,this);if(9!==t.which)return}if("focusin"===s)return l===h&&q(this);this.noPosition?y?e(this):p?q(this):m(this):p?l===h&&q(this):"click"===s&&y?e(this):"input"===s?o(t,l,this):l!==h&&m(this)}}Array.prototype.includes||(Array.prototype.includes=function(t){var e=!1;return this.forEach(function(n){n===t&&(e=!0)}),e});var w=[],b=["click","focusin","keydown","input"],S=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],g=["January","February","March","April","May","June","July","August","September","October","November","December"],M={t:"top",r:"right",b:"bottom",l:"left"};return t});

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return nextShow; });
var dropdown = {
    inserted: function inserted(el, binding) {
        el.addEventListener('click', function (e) {
            var target = document.querySelector('[dropdown=\'' + binding.value + '\']'),
                ev = e.target,
                rect = el.getClientRects()[0];
            target.style.cssText = 'right: ' + (rect.right - rect.x) + 'px;top: ' + (ev.offsetTop + rect.height) + 'px;display:block';
        }, false);
    }
};
var nextShow = {
    inserted: function inserted(el, binding) {
        el.addEventListener('click', function (e) {
            var ev = e,
                rect = el.getClientRects()[0];
            el.nextElementSibling.style.cssText = 'right: ' + (rect.right - rect.x) + 'px;top:' + ev.pageY + 'px;display:block';
        }, false);
    }
};

/***/ })

},[1209]);