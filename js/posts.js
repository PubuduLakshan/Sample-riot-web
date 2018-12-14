riot.mixin({

    init:function(){

        if(!localStorage.getItem('posts')){
            localStorage.setItem('posts','[]');
        }
        this.posts = JSON.parse(localStorage.getItem('posts'));
    },
    save:function(){
        let post_str = JSON.stringify(this.posts);
        localStorage.setItem('posts',post_str);

    }
})