webpackJsonp([6],{

/***/ 1207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__db1__ = __webpack_require__(7);




var AppAddSkill = new Vue({
    el: '#app-add-skill',
    data: {
        tDrop: false,
        searchType: 'Professionals',
        modalAddSkills: false,
        form: {
            skillName: '',
            category: ''
        },
        db: __WEBPACK_IMPORTED_MODULE_3__db1__["a" /* default */]
    },
    mixins: [__WEBPACK_IMPORTED_MODULE_2__mixin__["b" /* tableMixin */], __WEBPACK_IMPORTED_MODULE_2__mixin__["a" /* directive */]],
    computed: {
        tableData: function tableData() {
            return this.table.data[this.table.pagination.now];
        }
    },
    methods: {
        newSkill: function newSkill() {
            axios.post('path', form).then(function (Response) {}).catch(function (error) {});
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

/***/ })

},[1207]);