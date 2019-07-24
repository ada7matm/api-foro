const body = document.getElementById('body');
const postBtn = document.getElementById('post-btn');

const commentId = window.location.search.split('=')[1];

const updateCommentInfo = () => {
    axios
    .get(`http://localhost:3000/comments/${commentId}`)
    .then(response => {
        body.value = response.data.body; 
    })
    .catch(error => console.log(error.message))
}

postBtn.onclick = () => {
    axios
    .put(`http://localhost:3000/comments/${commentId}`, {
        body: body.value,
    })
    .then(response => window.location.href = `post.html?id=${response.data.postId}`)
    .catch(error => alert('There was an error, please try again'))
}

updateCommentInfo();