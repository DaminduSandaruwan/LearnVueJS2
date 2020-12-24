new Vue({
    el:'#vue-app',
    data:{
        name:'Damindu',
        job : 'Developer',
        website : 'https://github.com/DaminduSandaruwan',
        websiteTag:'<a href="https://github.com/DaminduSandaruwan"> GitHub Link</a>'
    },
    methods:{
        greet: function(time){
            return 'Good ' +time
        }
    }
});