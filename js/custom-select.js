Vue.component('custom-select',{
    data: function() {
        return{
            opened: false,
            current: ""
        }
    },
    props: ['items', 'default'],
    mounted(){
        //we have the combined options inside current
        this.current = this.items[0].value?this.default:this.items[1].value;
        this.$emit('changed', this.current);
    },
    computed:{
        currName: function() {
            for (let i = this.items.length - 1; i >= 0; i--) {
                if (this.items[i].value === this.current) return this.items[i].name
            }
        }
    },
    template: `\
<div class="custom-select">\
    <div class="select-selected" v-bind:class="{ 'select-arrow-active' : opened }" v-on:click="opened=!opened">{{ currName }}</div>\
    <div class="select-items" v-bind:class="{ 'select-hide': !opened }">\
        <div v-for="item in items" v-on:click="current=item.value; opened=false; $emit('changed', current);">{{ item.name }}</div>\
    </div>\
</div>`
});
