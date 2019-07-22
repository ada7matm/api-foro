const title = document.getElementById('title');
const body = document.getElementById('body');
const postBtn = document.getElementById('post-btn');

const postId = window.location.search.split('=')[1];

const updatePostInfo = () => {
    axios
    .get(`http://localhost:3000/posts/${postId}`)
    .then(response => {
        title.value = response.data.title; 
        body.value = response.data.body; 
    })
}

postBtn.onclick = () => {
    axios
    .put(`http://localhost:3000/posts/${postId}`, {
        title: title.value,
        body: body.value,
    })
    .then(response => window.location.href = `post.html?id=${postId}`)
}

updatePostInfo();