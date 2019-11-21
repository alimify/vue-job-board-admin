import '../app'
import { child ,findParent } from '../helper'
import {tableMixin, directive} from '../mixin'
import db1 from '../db1';
const addCategory  = new Vue({
    el: '#app-add-category',
    data: {
        tDrop: false,
        searchType: 'Professionals',
        modalAddSkills: false,
        uploading:0,
        uploadRes:'',
        form: {
            skillName: '',
            category: ''
        },
        multiAdd:{
            all: [],
            input:'',
        },
        db: db1
    },
    mixins: [tableMixin,directive],
    computed: {
        tableData(){
            return this.table.data[this.table.pagination.now]
            
        },
    },
    methods: {
        newSkill(e) {
            // axios.post('path', form).then(Response => {

            // }).catch(error => {

            // })
            child(e.target,'button.primary').disabled = 'disabled'
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
        pushNew(){
            this.multiAdd.all.push(this.multiAdd.input);
            this.multiAdd.input = '';
        },
        removeThis(el){
            this.multiAdd.all.splice(this.multiAdd.all.indexOf(el),1)
        },
        createFocus(e){
            child(e.target,'input').focus()
        },
    }
})