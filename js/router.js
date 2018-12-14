
route.base('/');
route.start(true);

route('/',function(){
    riot.mount('#view','home');
});

route('/newpost',function(){
    riot.mount('#view','newpost');
});