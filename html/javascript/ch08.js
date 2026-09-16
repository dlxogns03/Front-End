// document.importNode(template.content, true) 객체를 복사해서 넣을 때 사용

//클래스가 load-posts 인 버튼을 클릭하면 https://jsonplaceholder.typicode.com/posts
//의 데이터를 fetch해 .posts에 채운다. (async & await 사용 )
// template: post-tem template사용
onload = function () {
  //post 불러오기 추가 작성
  const postbutton = document.querySelector(".load-posts");

  postbutton.onclick = function () {
    function postload(postlist) {
      const template = document.querySelector("#post-item-template");
      const postcomments = document.querySelector(".posts");

      postcomments.innerHTML = "";
      console.log(template.childNodes.length);
      postlist.forEach(function ({ id, title, body, userId }) {
        const postDom = document.importNode(template.content, true);

        postDom.querySelector("li").dataset.userId = userId;
        postDom.querySelector("li").dataset.id = id;
        postDom.querySelector(".title").innerText = title;
        postDom.querySelector(".body").innerText = body;
        postcomments.append(postDom);
      });
    }
    (async function () {
      try {
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
        const body = await posts.json();
        console.log(body);
        postload(body);
      } catch (e) {
        console.log(e.message);
      }
    })();
  };

  const commentsbutton = document.querySelector(".load-comments");

  commentsbutton.onclick = function () {
    function fillComments(commentList) {
      const template = document.querySelector("#comments-item-template");
      const comments = document.querySelector(".comments");

      comments.innerHTML = "";
      console.log(comments.children.length);

      commentList.forEach(function ({ postId, name, email, body }) {
        const commentDom = document.importNode(template.content, true);
        commentDom.querySelector("li").dataset.postId = postId;
        commentDom.querySelector(".name").innerText = name;
        commentDom.querySelector(".email").innerText = email;
        commentDom.querySelector(".body").innerText = body;

        comments.append(commentDom);
      });
    }

    (async function () {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments",
        );
        const body = await response.json();
        console.log(body);
        fillComments(body);
      } catch (e) {
        console.log(e.message);
      }
    })();
  };
};
