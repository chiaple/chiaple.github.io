var posts=["2023/12/08/hello-world/","2023/11/03/test/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};