const username = document.getElementById('username');
const answers = document.getElementById('answers');
const questions = document.getElementById('questions');
const communityName = document.getElementById('community-name');
const commentsContainer = document.getElementById('comments');
const commentModel = document.getElementsByClassName('comment')[0];
const commentInput = document.getElementById('comment');
const commentBtn = document.getElementById('comment-btn');

const postId = window.location.search.split('=')[1];
const userId = localStorage.getItem('userId');

const getPostInfo = () => {
    axios
    .get(`http://localhost:3000/posts/${postId}`)
    .then(response => {
        communityName.innerText = response.data.community.name;
        updateAuthorInfo(response.data.user);
        addComment(response.data);
    })
    .catch(error => console.log(error.message))
}

const updateAuthorInfo = profile => {
    username.innerText = profile.username;
    username.href = `profile.html?id=${profile.id}`;
    questions.innerText = profile.questions;
    answers.innerText = profile.answers;
}

const getComments = () => {
    postsContainer.innerHTML = '';
    axios
    .get(`http://localhost:3000/comments?post=${postId}`)
    .then(response => {
        for(const comment of response.data) {
            addComment(comment);
        }
    })
    .catch(error => console.log(error.message))
}

const addComment = comment => {
    const newComment = commentModel.cloneNode(true);
    newComment.children[1].firstChild.nodeValue = comment.title ? comment.title : comment.body;
    newComment.children[0].children[0].children[1].children[0].href = `profile.html?id=${comment.user.id}`;
    newComment.children[0].children[0].children[1].children[0].innerText = comment.user.username;
    commentsContainer.appendChild(newComment);
}

commentBtn.onclick = () => {
    axios
    .post('http://localhost:3000/comments/', {
        postId: postId,
        userId: userId,
        body: commentInput.value
    })
    .then(response => {
        commentInput.value = '';
        getComments();
    })
    .catch(error => alert('There was an error, please try again'))
}

const updatePage = () => {
    getPostInfo();
    getComments();
}

updatePage();