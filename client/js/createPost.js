const title = document.getElementById('title');
const body = document.getElementById('body');
const communities = document.getElementById('communities');
const postBtn = document.getElementById('post-btn');

const userId = localStorage.getItem('userId');

const getCommunities = () => {
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
    const option = document.createElement('option');
    option.value = community.id;
    option.innerText = community.name;
    communities.appendChild(option);
}

postBtn.onclick = () => {
    axios
    .post('http://localhost:3000/posts', {
        title: title.value,
        body: body.value,
        communityId: communities.value,
        userId: userId
    })
    .then(response => window.location.href = `community.html?id=${communities.value}`)
    .catch(error => alert('There was an error, please try again'))
}

getCommunities();