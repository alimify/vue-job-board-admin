import '../app'
import db from '../db1'
import { child, findParent } from '../helper'
import { tableMixin, directive } from '../mixin'
import datepicker from 'js-datepicker'
import { dropdown, nextShow } from '../directive';
Vue.directive('dropdown', dropdown)
Vue.directive('next-show', nextShow)
const addCategory = new Vue({
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
            input: '',
        },
       db,
       filterTab : 'all'
    },
    mixins: [tableMixin, directive],
    computed: {
        tableData() {
            return this.table.data[this.table.pagination.now]
        },
    },
    methods: {
     
        datepick(el, event) {
            const date = datepicker(event.target, {

                formatter: function (el, date) {
                    el.value = `${date.getDay()}-${date.getDate()}-${date.getFullYear()}`;
                },
                onSelect: function (instance) {
                    // Show which date was selected.
                    console.log(instance.dateSelected);
                },
                overlayPlaceholder: 'Enter year eg. 2018',
            })
        },
        tagsAddClass(status) {
            let clas;
            switch (status) {
                case 'active':
                case 'funded':
                    clas = 'success'
                    break;
                case 'due':
                    clas = 'info'
                    break;
                case 'tem-suspended':
                case 'perm-suspended':
                    clas = 'error'
                    break;
                default: clas = 'info'
                    break;
            }

            return clas

        }
    }
})