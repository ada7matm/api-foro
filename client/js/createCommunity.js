const name = document.getElementById('title');
const description = document.getElementById('body');
const createBtn = document.getElementById('create-btn');

createBtn.onclick = () => {
    axios
    .post('http://localhost:3000/communities', {
        name: name.value,
        description: description.value,
    })
    .then(response => window.location.href = `community.html?id=${response.data.id}`)
}