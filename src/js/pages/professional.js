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
    },
    mixins: [tableMixin, directive],
    computed: {
        tableData() {
            return this.table.data[this.table.pagination.now]
        },
    },
    methods: {
        newSkill(e) {
            // axios.post('path', form).then(Response => {

            // }).catch(error => {

            // })
            child(e.target, 'button.primary').disabled = 'disabled'
            this.uploading = 1
            this.uploadRes = `Saving <img src="./dist/images/loading.gif" alt="">`
            setTimeout(() => {
                this.uploading = 2
                this.uploadRes = `<span class="success feedback">Saved..</span>`
                child(e.target, 'button.primary').disabled = ''
                setTimeout(() => {
                    this.modalAddSkills = false
                    this.uploadRes = ''
                    this.uploading = false
                }, 500);
            }, 3000);
            // if error `< span class="error feedback" > error message</span >`
        },
        pushNew() {
            this.multiAdd.all.push(this.multiAdd.input);
            this.multiAdd.input = '';
        },
        removeThis(el) {
            this.multiAdd.all.splice(this.multiAdd.all.indexOf(el), 1)
        },
        createFocus(e) {
            child(e.target, 'input').focus()
        },
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
                case 'released':
                case 'funded':
                    clas = 'success'
                    break;
                case 'due':
                    clas = 'info'
                    break;
                case 'suspended':
                    clas = 'error'
                default: clas = 'info'
                    break;
            }

            return clas

        }
    }
})