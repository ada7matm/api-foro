const communityName = document.getElementById('community-name');
const communityDescription = document.getElementById('community-description');
const postsContainer = document.getElementById('posts');
const postModel = document.getElementsByClassName('post')[0];

const communityId = window.location.search.split('=')[1];

const getCommunityInfo = () => {
    axios
    .get(`http://localhost:3000/communities/${communityId}`)
    .then(response => {
        updateCommunityInfo(response.data);
    })
    .catch(error => console.log(error.message))
}

const updateCommunityInfo = community => {
    communityName.innerText = community.name;
    communityDescription.innerText = community.description;
}

const getPosts = () => {
    postsContainer.innerHTML = '';
    axios
    .get(`http://localhost:3000/posts/?community=${communityId}`)
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
    newPost.children[1].firstChild.nodeValue = post.body;
    newPost.children[1].children[1].children[1].children[0].href = `profile.html?id=${post.user.id}`;
    newPost.children[1].children[1].children[1].children[0].innerText = post.user.username;
    postsContainer.appendChild(newPost);
}

const updatePage = () => {
    getCommunityInfo();
    getPosts();
}

updatePage();