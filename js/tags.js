riot.tag2('blog-entries', '<blog url="https://www.w3schools.com/w3images/woods.jpg" alt="Nature" heading="TITLE HEADING" post_date="April 7 2018" title_discription="Title description, " content="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."></blog> <blog url="https://www.w3schools.com/w3images/bridge.jpg" alt="Norway" heading="BLOG ENTRY" post_date="May 2 2018" title_discription="Title description, " content="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."></blog>', '', '', function(opts) {
});

riot.tag2('blog-header', '<h1><b>My blog</b></h1> <div class="row"> <div class="col-4"> <a type="button" class="btn btn-primary" href="/">Home</a> </div> <div class="col-4"> <p>welcome to blog of <span class="w3-tag">{opts.blogger_name}</span></p> </div> <div class="col-4"> <a type="button" class="btn btn-primary" href="/newpost">Make a New Post</a> </div> </div>', 'blog-header .btn-primary,[data-is="blog-header"] .btn-primary{ margin-left:100px; }', '', function(opts) {
});
riot.tag2('blog', '<div class="w3-card-4 w3-margin w3-white"> <img riot-src="{opts.url}" alt="{opts.alt}" style="width:100%"> <div class="w3-container"> <h3><b>{opts.heading}</b></h3> <h5>{opts.title_discription}<span class="w3-opacity">{opts.post_date}</span></h5> </div> <div class="w3-container"> <p>{opts.content}</p> <div class="w3-row"> <div class="w3-col m8 s12"> <p><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p> </div> <div class="w3-col m4 w3-hide-small"> <p><span class="w3-padding-large w3-right"><b>Comments </b> <span class="w3-tag">0</span></span></p> </div> </div> </div> </div> <hr>', '', '', function(opts) {
});
riot.tag2('home', '<div class="w3-row"> <div class="w3-col l8 s12"> <blog-entries></blog-entries> </div> <div class="w3-col l4"> <profile></profile> <side-post-list></side-post-list> <post-tags></post-tags> </div> </div><br> </div>', '', '', function(opts) {
});
riot.tag2('new-post-form', '<form onsubmit="{addpost}"> <div class="form-group"> <label for="post title">Post Title</label> <input type="text" class="form-control" ref="post_title" placeholder="Your Post Title"> </div> <div class="form-group"> <label for="image url">Image URL</label> <input type="text" class="form-control" ref="image_url" placeholder="Your Image URL"> </div> <div class="form-group"> <label for="post description">Post Description</label> <input type="text" class="form-control" ref="post_description" placeholder="Your Image URL"> </div> <div class="form-group"> <label for="post content">Post Content</label> <textarea type="text" class="form-control" ref="post_content"></textarea> </div> <input type="submit" class="btn btn-primary pull-right" value="Publish My Post Now!"> </form>', '', '', function(opts) {


this.addpost = (e)=>{
    e.preventDefault();
    var newpost = {
        post_title:this.refs.post_title.value,
        image_url:this.refs.image_url.value,
        post_description:this.refs.post_description.value,
        post_content:this.refs.post_content.value

    };

   this.posts.push(newpost);
   console.log(this.posts);
}
});
riot.tag2('newpost', '<h2>Create New Post</h2> <new-post-form></new-post-form>', '', '', function(opts) {
});
riot.tag2('post-tag', '<span class="w3-tag w3-light-grey w3-small w3-margin-bottom">{opts.tag_name}</span>', '', '', function(opts) {
});
riot.tag2('post-tags', '<div class="w3-card w3-margin"> <div class="w3-container w3-padding"> <h4>Tags</h4> </div> <div class="w3-container w3-white"> <p> <post-tag tag_name="Travel"></post-tag> <post-tag tag_name="New York"></post-tag> <post-tag tag_name="London"></post-tag> <post-tag tag_name="Ideas"></post-tag> <post-tag tag_name="News"></post-tag> <post-tag tag_name="Sports"></post-tag> <post-tag tag_name="Games"></post-tag> <post-tag tag_name="Clothing"></post-tag> <post-tag tag_name="Baby"></post-tag> </p> </div> </div>', '', '', function(opts) {
});
riot.tag2('profile', '<div class="w3-card w3-margin w3-margin-top"> <img src="https://www.w3schools.com/w3images/avatar_g.jpg" style="width:100%"> <div class="w3-container w3-white"> <h4><b>My Name</b></h4> <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p> </div> </div><hr>', '', '', function(opts) {
});
riot.tag2('side-post-list', '<div class="w3-card w3-margin"> <div class="w3-container w3-padding"> <h4>Popular Posts</h4> </div> <ul class="w3-ul w3-hoverable w3-white"> <li class="w3-padding-16"> <side-post side_post_url="https://www.w3schools.com/w3images/workshop.jpg" side_post_alt="Image" side_post_head="Lorem" side_post_content="Sed mattis nunc"></side-post> </li> <li class="w3-padding-16"> <side-post side_post_url="https://www.w3schools.com/w3images/gondol.jpg" side_post_alt="Image" side_post_head="Ipsum" side_post_content="Praes tinci sed"></side-post> </li> <li class="w3-padding-16"> <side-post side_post_url="https://www.w3schools.com/w3images/skies.jpg" side_post_alt="Image" side_post_head="Dorum" side_post_content="Ultricies congue"></side-post> </li> <li class="w3-padding-16"> <side-post side_post_url="https://www.w3schools.com/w3images/rock.jpg" side_post_alt="Image" side_post_head="Mingsum" side_post_content="Lorem ipsum dipsum"></side-post> </li> </ul> </div> <hr>', '', '', function(opts) {
});
riot.tag2('side-post', '<img riot-src="{opts.side_post_url}" alt="{opts.side_post_alt}" class="w3-left w3-margin-right" style="width:50px"> <span class="w3-large">{opts.side_post_head}</span><br> <span>{opts.side_post_content}</span>', '', '', function(opts) {
});
riot.tag2('web-footer', '<button class="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">Previous</button> <button class="w3-button w3-black w3-padding-large w3-margin-bottom">Next »</button> <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>', '', '', function(opts) {
});