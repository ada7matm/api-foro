const communityLinks = document.getElementById('community-links');
const communityLink = document.getElementsByClassName('community-link')[0];
const username = document.getElementById('username');
const answers = document.getElementById('answers');
const questions = document.getElementById('questions');
const postsContainer = document.getElementById('posts');
const postModel = document.getElementsByClassName('post')[0];

const userId = localStorage.getItem('userId');

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
    username.href = `profile.html?id=${profile.id}`;
    questions.innerText = profile.questions;
    answers.innerText = profile.answers;
}

const getCommunities = () => {
    communityLinks.innerHTML = '';
    axios
    .get('http://localhost:3000/communities/')
    .then(response => {
        for(const community of response.data) {
            addCommunity(community);
        }
    })
    .catch(error => console.log(error.message))
}

const addCommunity = community => {
    const newCommunityLink = communityLink.cloneNode(true);
    newCommunityLink.firstElementChild.firstElementChild.href = `community.html?id=${community.id}`;
    newCommunityLink.firstElementChild.firstElementChild.innerText = community.name;
    communityLinks.appendChild(newCommunityLink);
}

const getPosts = () => {
    postsContainer.innerHTML = '';
    axios
    .get('http://localhost:3000/posts/')
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
    newPost.children[0].children[0].children[0].innerText = post.title;
    newPost.children[0].children[1].href = `community.html?id=${post.community.id}`;
    newPost.children[0].children[1].innerText = `/${post.community.name}`;
    newPost.children[1].firstChild.nodeValue = post.body;
    newPost.children[1].children[1].children[1].children[0].href = `profile.html?id=${post.user.id}`;
    newPost.children[1].children[1].children[1].children[0].innerText = post.user.username;
    postsContainer.appendChild(newPost);
}

const updatePage = () => {
    getProfileInfo();
    getCommunities();
    getPosts();
}

updatePage();
