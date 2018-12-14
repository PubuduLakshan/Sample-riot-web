<new-post-form>

<form onsubmit={addpost}>
  <div class="form-group">
    <label for="post title">Post Title</label>
    <input type="text" class="form-control" ref="post_title" placeholder="Your Post Title" >
  </div>
  <div class="form-group">
    <label for="image url">Image URL</label>
    <input type="text" class="form-control" ref="image_url" placeholder="Your Image URL" >
  </div>
   <div class="form-group">
    <label for="post description">Post Description</label>
    <input type="text" class="form-control" ref="post_description" placeholder="Your Image URL" >
  </div>
  <div class="form-group">
    <label for="post content">Post Content</label>
    <textarea type="text" class="form-control" ref="post_content" ></textarea>
  </div>
  <input type="submit" class="btn btn-primary pull-right" value="Publish My Post Now!">
</form>

<script>


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
</script>

</new-post-form>