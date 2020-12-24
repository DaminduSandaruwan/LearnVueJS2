new Vue({
    el:'#vue-app',
    data:{
        age:23,
        x: 0,
        y: 0,
    },
    methods:{
        add:function(inc){
            this.age+=inc;
        },
        substract: function(dec){
            this.age-=dec;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
            console.log(event)
        }
    }
});