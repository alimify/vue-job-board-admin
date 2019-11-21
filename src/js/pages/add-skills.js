import '../app'
import { child, findParent } from '../helper'
import { tableMixin, directive } from '../mixin'
import db1 from '../db1';
const AppAddSkill = new Vue({
    el: '#app-add-skill',
    data: {
        tDrop: false,
        searchType: 'Professionals',
        modalAddSkills: false,
        form:{
            skillName: '',
            category:''
        },
        db:db1
    },
    mixins: [tableMixin, directive],
    computed: {
        tableData() {
            return this.table.data[this.table.pagination.now]
        },
    },
    methods: {
        newSkill(){
            axios.post('path',form).then(Response=>{

            }).catch(error=>{

            })
        }
    }
})
