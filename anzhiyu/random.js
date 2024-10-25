var posts=["2024/10/25/hello-world/","2024/10/24/旧帖灌水-深度学习笔记/","2024/10/25/旧帖灌水-最小生成树/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };