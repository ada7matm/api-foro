const username = document.getElementById('username');
const answers = document.getElementById('answers');
const questions = document.getElementById('questions');
const postsContainer = document.getElementById('posts');
const postModel = document.getElementsByClassName('post')[0];
const title = document.getElementById('title');

const userId = window.location.search.split('=')[1];

const getProfileInfo = () => {
    axios
    .get(`http://localhost:3000/users/${userId}`)
    .then(response => {
        updateProfileInfo(response.data);
    })
    .catch(error => console.log(error.message))
}

const updateProfileInfo = profile => {
    username.innerText = profile.username;
    title.innerText = profile.username;
    username.href = `profile.html?id=${profile.id}`;
    questions.innerText = profile.questions;
    answers.innerText = profile.answers;
}

const getPosts = () => {
    postsContainer.innerHTML = '';
    axios
    .get(`http://localhost:3000/posts/?user=${userId}`)
    .then(response => {
        for(const post of response.data) {
            addPost(post);
        }
    })
    .catch(error => console.log(error.message))
}

const addPost = post => {
    const newPost = postModel.cloneNode(true);
    newPost.children[0].children[0].href = `post.html?id=${post.id}`;
    newPost.children[0].children[0].innerText = post.title;
    newPost.children[0].children[1].href = `community.html?id=${post.community.id}`;
    newPost.children[0].children[1].innerText = `/${post.community.name}`;
    newPost.children[1].firstChild.nodeValue = post.body;
    newPost.children[1].children[1].href = `edit_post.html?id=${post.id}`;
    newPost.children[1].children[2].onclick = () => {
        deletePost(post.id);
    }

    postsContainer.appendChild(newPost);
}

const deletePost = id => {
    axios
    .delete(`http://localhost:3000/posts/${id}`)
    .then(response => getPosts())
    .catch(error => alert('There was an error, please try again'))
}

const updatePage = () => {
    getProfileInfo();
    getPosts();
}

updatePage();