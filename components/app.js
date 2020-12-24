var data = {
    name: 'Yoshi'
}

Vue.component('greeting',{
    template: '<p> Hey there! .. I\'m resuable component {{name}} . <button v-on:click="changeName()">Click Me</button> </p>',
    data: function(){
        return data
    },

    methods:{
        changeName:function(){
            this.name = 'Sandaruwan';
        }
    }

})


var one = new Vue({
    el:'#vue-app-one',
    data:{
        
    },
    methods:{
        
    },
    computed:{
        greet: function(){
            
        }
    }
});

var two = new Vue({
    el:'#vue-app-two',
    data:{
        
    },
    methods:{        
        
    },
    computed:{
        
        
    }
});
