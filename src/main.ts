type ObjectShape = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const requestUrl = "https://jsonplaceholder.typicode.com/posts";
const list = document.querySelector(".list");
let posts: ObjectShape[] = [];

const createPostsTemplate = (data: ObjectShape) => {
  return `
      <div class="post" data-id="${data.userId}">
          <div class="post__data">
              <h2 class="post__title">
                  ${data.title}
                      </h2>
              <p class="post__body">
                  ${data.body}
              </p>
          </div>
      </div>
      `;
};

function getPosts<T>(url: string): Promise<T> {
  return new Promise<T>((resolve: any, reject: any) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        posts = json;

        posts.forEach((post) => {
          if (list) list.innerHTML += createPostsTemplate(post);
        });
        resolve(json);
      })
      .catch((e) => new Error(e.message));
  });
}

getPosts(requestUrl);
