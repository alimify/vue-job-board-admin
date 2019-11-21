import { findParent,child } from "./helper";
export const tableMixin = {
    data: {
        table: {
            checkbox: {
                checked: {},
                all: false,
            },
            pagination: {
                prev: null,
                next: 0,
                chunks: [],//paginations arrays for creating tabs
                tabLimit: 5, //numbers of pagination tab to be displayed at once
                now: 0, //current rows
                from: 0,
                to: 5,
                show: 5, //numbers of rows to display at once
            },
            data: [] // table data
        },
    },
    methods: {
        sortTable(where, e) {

            var sortType = e.target.attributes['aria-sort'],
                _this = e.target,
                toSort = this.table.data[this.table.pagination.now];
            if (sortType.value === 'ascending') {
                toSort = toSort.sort((a, b) => a[where] < b[where])
                sortType.value = 'decending'
                toggleFocus(_this, 'desc')

            } else {
                toSort = toSort.sort((a, b) => a[where] > b[where])
                sortType.value = 'ascending'
                toggleFocus(_this, 'asc')
            }
            function toggleFocus(ele, clas) {
                [...ele.parentElement.children].forEach(s => {
                    s.classList.contains('asc') ? s.classList.remove('asc') : ''
                    s.classList.contains('desc') ? s.classList.remove('desc') : ''
                })
                ele.classList.add(clas)
            }

        },
        updateShow(e) {
            //Update the table rows limit to this.value
            //and call the paginate method to update the table data chunks
            
            const _this = e.target
            this.table.pagination.show = parseInt(_this.value)
            // this.table.pagination.now = 0;
            this.paginate(this.db)
        },
        paginate(data) {

            
            
            this.table.data = _.chunk(data, this.table.pagination.show)
            this.table.pagination.chunks = [...Array(this.table.data.length).keys()]
            //split the raw data into chunks
            

            //Create arrays for pagination tabs base on the data.length
           
        },
        pagCheck(e) {
            //pull the data store in this element dataset attribute and parse into valid object
            var p = JSON.parse(e.target.dataset.info);

            //display all the items in the table data array base on this 
            //element value
            this.table.pagination.now = p.value

            if (p.index > this.table.pagination.tabLimit - 1) {

                if (!(p.value >= this.table.pagination.chunks.length - 1)) {
                    this.table.pagination.from += 1
                    this.table.pagination.to += 1
                }

            } else if (p.index <= 1) {

                if (!(p.value <= this.table.pagination.chunks[0])) {
                    this.table.pagination.from -= 1
                    this.table.pagination.to -= 1
                }

            }
        },
        backOrFront(arg) {
            var n = this.table.pagination,
                d = this.table.data;
            if (arg === 'back' && d[n.now] !== d[0]) {
                n.now -= 1
            } else if (arg === 'front' && d[n.now] !== d[d.length - 1]) {
                n.now += 1
            }
        },
        tableCheckBoxAll(e) {
            const _this = e.target,
                table = findParent(_this, 'table'),
                vm = this;
            vm.table.checkbox.checked = {}
            child(table, "tbody tr>td:nth-child(1n) input[type='checkbox'", true).forEach(box => {
                vm.table.checkbox.checked[box.name] = vm.table.checkbox.all
            })
        },
        filterStatus(type) {
            let f = this.db.filter(el => type == el.status)
            this.table.pagination.now = 0;
            this.filterTab = type
            if (type == 'all') {
                this.paginate(this.db)
                return false;
            }
            this.paginate(f)
        }
    },
    computed: {
        
        pagIndexing() {
            return _.slice(this.table.pagination.chunks,
                this.table.pagination.from,
                this.table.pagination.to
            )
        },
        tableShowing() {
            var total = [],
                d = this.table.data,
                p = this.table.pagination.now,
                l = 4,//this.table.data[p].length,
                to, from;
            if (d[p] !== d[d.length - 1]) {
                to = (p + 1) * this.table.pagination.show
                from = to - this.table.pagination.show + 1
            } else if (d[p] === d[0]) {
                to = l
                from = 1
            } else {
                to = (p * this.table.pagination.show) + l
                from = to - l
            }
            this.table.data.forEach(a => total.push(...a))
            return {
                total: total.length,
                from,
                to
            }
        },
        end() {
            var n = this.table.pagination,
                d = this.table.data;
            return d[n.now] !== d[d.length - 1]
        }
    },
    created() {
        this.paginate(this.db)
    },
} 
export const directive = {
    directives: {
        linkactive: {
            inserted(el) {
                let path = location.pathname;
                [...el.children].forEach(a => {
                    a.attributes.href.value == path ? a.classList.add('active') : ''
                })
            }
        },
    },
}