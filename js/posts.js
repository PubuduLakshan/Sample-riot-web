riot.mixin({

    init:function(){

        if(!localStorage.getItem('posts')){
            localStorage.setItem('posts','[]');
        }
        this.posts = JSON.parse(localStorage.getItem('posts'))
    }
})