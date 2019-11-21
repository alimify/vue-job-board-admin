import '../app'
import { child, findParent } from '../helper'
import { directive } from '../mixin'
import moment from 'moment'
import db from '../faker';
function caty(type){
    return (db.mails.filter(e => e.category === type)).length
}
const AppAddSkill = new Vue({
    el: '#app-mails',
    data: {
        cc: false,
        bcc: false,
        tDrop: false,
        searchType: 'Professionals',
        inbox: caty('inbox'),
        sent: caty('sent'),
        draft: caty('draft'),
        important: caty('important'),
        trash: caty('trash'),
        currentView: 'inbox',
        display: 'mails',
        read : null,
        mailEditor: '',
        editor: '',
        table: {
            rowLimit: 10,
            data: null,
            pag:{
                of: null,
                from: null,
                to: null,
                now: 0
            },
            checkbox: {
                checked: {},
                all: false,
            }
        },
        rawData: ''
    },
    mixins: [directive],
    computed: {
        emails() {
            return this.table.data[this.table.pag.now]
        },
        reading(){
            if (this.display === 'read') {
                let mailToRead = this.table.data[this.table.pag.now].filter(e => e.id === this.read)
                return mailToRead[0]
            }
            
        }
    },
    methods: {
        newSkill() {
            axios.post('path', form).then(Response => {

            }).catch(error => {

            })
        },
        format(val){
           return moment(val).format("MMM Do YY");
        },
        readDate(val){
            return moment(val).format("MMM Do YY - hh:mm a");
        },
        updateRowLimit(e){
            //Add all the chunk together then chunk it again base on the row limit
            let c = _.concat([], ...this.table.data)
            this.table.rowLimit = parseInt(e.target.value)
            this.chunkData(c)
        },
        chunkData(data){
            //Spread the data into chunk base on the rowlimit
            this.table.data = _.chunk(data, this.table.rowLimit)
            this.table.pag.of = _.concat([], ...this.table.data).length;
            this.pagProgress()
        },
        loadView(ele,e){
            this.display = 'mails'
            //display only the those that belong to this category
            this.table.pag.now = 0
            this.currentView = ele
            this.chunkData(mails.filter(mail => mail.category === ele))
        },
        cView(ele){
            if (this.currentView === ele) 
            return 'active'
        },
        pagProgress(){
            let d = this.table.data,
                now = this.table.pag.now,
                limit = this.table.rowLimit;
            this.table.pag.to = now === 0 ? d[now].length : (now * limit) + d[now].length
            this.table.pag.from = now === 0 ? 1 : (now * limit) + 1
        }
        ,
        tableCheckBoxAll(e) {
            
            const _this = e.target,
                table = findParent(_this, 'table'),
                vm = this;
            vm.table.checkbox.checked = {}
            child(table, "tbody tr>td:nth-child(1n) input[type='checkbox'", true).forEach(box => {
                vm.table.checkbox.checked[box.name] = vm.table.checkbox.all
            })
        },
        move(type){
            if (type == 'back') {
                this.table.pag.now == 0 ? '' : this.table.pag.now--
            }else if(type == 'front'){
                (this.table.pag.now +1) == this.table.data.length ? '' : this.table.pag.now++
            }
            this.pagProgress()
        },
        makeImportant(id,e){
            //some ajax class
            e.target.classList.toggle('active')
        },
        readMail(id){
            this.read = id
            this.display = 'read'
        },
        reply(id){
            this.display = 'compose'
            let mailInfo = this.table.data[this.table.pag.now].filter(e => e.id === id),
            vm = this,
                mail1 = `<blockquote style="border-left: 2px solid #ccc;padding-left: .8em;font-size:12px"><p>${mailInfo[0].message}</p><time>${this.readDate(mailInfo[0].date)}</time></blockquote>`
            console.dir(mailInfo[0])
            setTimeout(()=>{
                vm.editor.content.set(mail1)
            },2000)
            
        },
        postMail(e){
            
            console.log(this.editor.content.get())
        }

    },
    created(){
        this.chunkData(db.mails.filter(mail => mail.category === this.currentView))
    },
    watch:{
        display(ol,ne){
            // 
            if (ol === 'compose') {
                this.$nextTick(()=>{
                    $('#editor').summernote({
                        height: 300,                 // set editor height
                        minHeight: null,             // set minimum height of editor
                        maxHeight: null,             // set maximum height of editor
                        focus: true,
                        toolbar: [
                            ['style', ['bold', 'italic', 'underline', 'clear']],
                            ['font', ['strikethrough', 'superscript', 'subscript']],
                            ['fontsize', ['fontsize']],
                            ['color', ['color']],
                            ['para', ['ul', 'ol', 'paragraph']],
                            ['height', ['height']]
                        ]         
                    });
                })
                
            }
        }
        
    }
})
