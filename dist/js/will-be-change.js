webpackJsonp([8],{

/***/ 1213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(4);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }


var vm = new Vue({
    el: '#app',
    data: {
        tab: 'completedContracts',
        tDrop: false,
        searchType: 'Professionals',
        jobInvite: [{
            title: 'I want to develop a Instant Messenger',
            slug: 'i_want_to_develop_a_instant_messenger',
            posted_at: 'Posted 5 days 18 hours ago',
            posted_by: 'Customer Something',
            payment_type: 'fixed',
            budget: '15000.00',
            location: 'Nigeria',
            duration: '3 to 4 months',
            descriptions: 'I want to hire you for a job'
        }],
        activeContracts: [{
            title: 'I want to develop a Instant Messenger',
            slug: 'i_want_to_develop_a_instant_messenger',
            payment_type: 'fixed',
            earned: '15000.00',
            agreedPrice: '20000',
            commission: '1000',
            client: {
                name: 'Client\'s Name',
                profileLink: 'client_profile'
            },
            started_on: '1, Febuary 2018',
            willEnd: '28, Febuary 2018'
        }],
        completedContracts: [{
            title: 'I want to develop a Instant Messenger',
            slug: 'i_want_to_develop_a_instant_messenger',
            payment_type: 'fixed',
            earned: '15000.00',
            agreedPrice: '20000',
            commission: '1000',
            client: {
                name: 'Client\'s Name',
                profileLink: 'client_profile'
            },
            expired: '20, Febuary 2018'
        }],
        transactions: [{
            "pro": "Mrs.Marianna Lakin",
            "client": "Agustina Schulist",
            "deposit": 2979,
            "amount": 6708,
            "status": "due",
            "date": "0-01-2018",
            "action": "action"
        }, {
            "pro": "Jefferey Dooley",
            "client": "Prof.Brandt Kessler III",
            "deposit": 3235,
            "amount": 5205,
            "status": "due",
            "date": "1-01-2018",
            "action": "action"
        }, {
            "pro": "Chasity Hills",
            "client": "Casandra Walsh",
            "deposit": 7633,
            "amount": 12764,
            "status": "due",
            "date": "2-01-2018",
            "action": "action"
        }, {
            "pro": "Prof.Gerson Volkman",
            "client": "Prof.Dagmar Satterfield III",
            "deposit": 9001,
            "amount": 8026,
            "status": "due",
            "date": "3-01-2018",
            "action": "action"
        }, {
            "pro": "Brooks Stracke III",
            "client": "Brooks Stracke III",
            "deposit": 3442,
            "amount": 2537,
            "status": "released",
            "date": "4-01-2018",
            "action": "action"
        }, {
            "pro": "Mazie O 'Kon",
            "client": "Mrs.Marianna Lakin",
            "deposit": 4389,
            "amount": 37873,
            "status": "funded",
            "date": "5-01-2018",
            "action": "action"
        }, {
            "pro": "Mrs.Marianna Lakin",
            "client": "Casandra Walsh",
            "deposit": 8198,
            "amount": 43780,
            "status": "funded",
            "date": "6-01-2018",
            "action": "action"
        }, {
            "pro": "Wilford Armstrong",
            "client": "Prof.Kamille Barton",
            "deposit": 8916,
            "amount": 37390,
            "status": "due",
            "date": "7-01-2018",
            "action": "action"
        }, {
            "pro": "Jefferey Dooley",
            "client": "Prof.Pete Tromp",
            "deposit": 976,
            "amount": 43591,
            "status": "due",
            "date": "8-01-2018",
            "action": "action"
        }, {
            "pro": "Wilford Armstrong",
            "client": "Wilford Armstrong",
            "deposit": 4485,
            "amount": 17938,
            "status": "released",
            "date": "9-01-2018",
            "action": "action"
        }, {
            "pro": "Mrs.Marianna Lakin",
            "client": "Dr.Kyleigh Cartwright",
            "deposit": 9507,
            "amount": 44524,
            "status": "due",
            "date": "10-01-2018",
            "action": "action"
        }, {
            "pro": "Mazie O 'Kon",
            "client": "Elisabeth Baumbach",
            "deposit": 9856,
            "amount": 42233,
            "status": "released",
            "date": "11-01-2018",
            "action": "action"
        }, {
            "pro": "Prof.Dagmar Satterfield III",
            "client": "Prof.Brandt Kessler III",
            "deposit": 4100,
            "amount": 1391,
            "status": "due",
            "date": "12-01-2018",
            "action": "action"
        }, {
            "pro": "Jefferey Dooley",
            "client": "Prof.Brandt Kessler III",
            "deposit": 1893,
            "amount": 2133,
            "status": "due",
            "date": "13-01-2018",
            "action": "action"
        }, {
            "pro": "Chasity Hills",
            "client": "Prof.Dagmar Satterfield III",
            "deposit": 6463,
            "amount": 3181,
            "status": "due",
            "date": "14-01-2018",
            "action": "action"
        }, {
            "pro": "Mazie O 'Kon",
            "client": "Elisabeth Baumbach",
            "deposit": 3679,
            "amount": 26093,
            "status": "released",
            "date": "15-01-2018",
            "action": "action"
        }, {
            "pro": "Santino Ziemann",
            "client": "Wilford Armstrong",
            "deposit": 350,
            "amount": 43049,
            "status": "released",
            "date": "16-01-2018",
            "action": "action"
        }, {
            "pro": "Dr.Kyleigh Cartwright",
            "client": "Wilford Armstrong",
            "deposit": 9401,
            "amount": 45138,
            "status": "funded",
            "date": "17-01-2018",
            "action": "action"
        }, {
            "pro": "Prof.Kamille Barton",
            "client": "Prof.Kamille Barton",
            "deposit": 9162,
            "amount": 21554,
            "status": "funded",
            "date": "18-01-2018",
            "action": "action"
        }, {
            "pro": "Prof.Kamille Barton",
            "client": "Casandra Walsh",
            "deposit": 1644,
            "amount": 2244,
            "status": "released",
            "date": "19-01-2018",
            "action": "action"
        }, {
            "pro": "Shawna Eichmann",
            "client": "Henri Volkman",
            "deposit": 8848,
            "amount": 41803,
            "status": "due",
            "date": "20-01-2018",
            "action": "action"
        }]
    },
    computed: {},
    methods: {
        pushTab: function pushTab(newTab, e) {
            var parentSiblings = e.target.parentElement.parentElement.children,
                parent = e.target.parentElement;
            [].concat(_toConsumableArray(parentSiblings)).forEach(function (ele) {
                if (ele == parent) ele.classList.add('active');else ele.classList.contains('active') ? ele.classList.remove('active') : '';
            });
            this.tab = newTab;
        },
        toggleAccordion: function toggleAccordion(e) {
            e.target.nextElementSibling.classList.toggle('open');
            var c = e.target.classList;
            if (c.contains('fa-chevron-circle-down')) c.replace('fa-chevron-circle-down', 'fa-chevron-circle-up');else c.replace('fa-chevron-circle-up', 'fa-chevron-circle-down');
        },
        sDrop: function sDrop() {
            this.tDrop = !this.tDrop;
        },
        swap: function swap(e) {
            [].concat(_toConsumableArray(e.target.parentElement.children)).forEach(function (el) {
                el.classList.remove('active');
            });
            this.searchType = e.target.innerText;
            e.target.classList.add('active');
        },
        addActiveClass: function addActiveClass(e) {
            var path = location.pathname;
            if (e.target.pathname == path) {
                return true;
            }
            return false;
        }
    },
    directives: {
        linkactive: {
            inserted: function inserted(el) {
                var path = location.pathname;
                [].concat(_toConsumableArray(el.children)).forEach(function (a) {
                    a.attributes.href.value == path ? a.classList.add('active') : '';
                });
            }
        },
        sort: {
            inserted: function inserted(el) {
                // console.log(el)
                el.addEventListener('contextmenu', function (e) {
                    console.log(e);
                });
            }
        }
    }
});

/***/ })

},[1213]);