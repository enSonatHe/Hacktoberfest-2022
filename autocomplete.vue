<template>
    <div class="dropdown" v-if="this.isVisible">
        <div class="dropdown-menu show w-100 border">
            <span class="dropdown-item" v-for="item in items" :key="item.id" v-on:click="selectValue(item)">
                {{getValue(item)}}
                <span class="float-end fa fa-check text-primary" v-if="this.selected_object.find(o=>o.key === item[this.key_id]) !== undefined"></span>
            </span>
        </div>
    </div>
    <div class="input-group form-control p-0 mb-1">
        <div class="input-group-prepend pt-2 parent px-1">
            <span class="badge bg-primary me-1 text-capitalize"  v-for="(obj, index) in selected_object" :key="obj.id">
                <small>{{obj.value}}</small>
                <span class="ps-1 cursor-pointer" @click="removeValue(index)">&#10006;</span>
            </span>
        </div>
        <Field type="text" class="form-control border-0 shadow-none pl-2" 
            :disabled="disabled" v-model="search" @keyup="getList"
            @keydown.delete="removeLastValue" :id="id" :rules="rules" :name="name"
        />
    </div>
    <ErrorMessage class="text-danger text-sm mt-2" :name="name"/>
</template>

<script>
import { ErrorMessage } from 'vee-validate';
import { Field } from 'vee-validate';
export default {
    name: "AutoComplete",
    components: {
        ErrorMessage,
        Field,
    },
    props: {
        endpoint: {
            type: String,
            default: '',
        },
        multiple: {
            type: Boolean,
            default: false
        },
        key_id: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            default: ''
        },
        key_value: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: "",
        },
        rules: {
            type: String,
            default: '',
        },
        selectedClientId: {
            type: String,
            default: '',
        },
        selectedClientName: {
            type: String,
            default: '',
        },
        selectedUserId: {
            type: String,
            default: '',
        },
        selectedUserName: {
            type: String,
            default: '',
        },
    },
    data(){
        return{
            search: '',
            isVisible: false,
            selected_object: [],
            selected_keys: [],
            items: [],
            disabled: false,
            selected_data:[]
        }
    },
    methods: {
        selectValue: function(obj) {
            let exist = this.selected_object.find(o=>o.key === obj.id)
            if(obj[this.key_value]) {
                if(exist == undefined) {
                    let object = {
                        'key': obj[this.key_id],
                        'value': obj[this.key_value]
                    }
                    this.selected_object.push(object)
                    this.search = ''
                    this.isVisible = !this.isVisible
                    this.checkMultiple()
                    this.passEvent()
                }
            }
        },
        removeValue: function(index){
            this.selected_object.splice(index, 1)
            this.checkMultiple()
        },
        removeLastValue: function(){
            if(this.search == ''){
                this.selected_object.pop()
                this.checkMultiple()
            }
        },
        checkMultiple(){
            if(!this.multiple){
                if(this.selected_object.length >= 1) {
                    this.disabled = true
                } else {
                    this.disabled = false
                }
            }
        },
        getList: function() {
            this.API.get(`${this.endpoint}?search=${this.search}&limit=10`).then((response) => {
                this.items = response.data.results
                if(this.items.length < 1) {
                    this.isVisible = false
                } else {
                    this.isVisible = true
                }
            })
        },
        getValue(item) {
            return item[this.key_value]
        },
        getKey(item) {
            return item[this.key]
        },
        passEvent() {
            this.selected_object.forEach((item) => {
                this.selected_keys.push(item['key'])
            })
            this.$emit('clientid', this.selected_keys[0])
            this.$emit('userid', this.selected_keys[0])
        },
        close(e) {
            if (!this.$el.contains(e.target)) {
                this.isVisible = false
            }
        },
    },
    mounted() {
        document.addEventListener('click', this.close)
        if(this.selectedClientId && this.selectedClientName != '') {
            let selected_obj = {
                'key': this.selectedClientId,
                'value': this.selectedClientName
            }
            this.selected_object.push(selected_obj)
        }

        if(this.selectedUserId && this.selectedUserName != '') {
            let selected_obj = {
                'key': this.selectedUserId,
                'value': this.selectedUserName
            }
            this.selected_object.push(selected_obj)
        }
    },
    beforeUnmount() {
        document.removeEventListener('click',this.close)
    }
};
</script>

<style scoped>
.input-group .form-control:focus {
    border-left:0 !important;
    border-right:0 !important;
}

.form-control:disabled {
    background-color: #fff;
}
</style>