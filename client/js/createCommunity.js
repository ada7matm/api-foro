const name = document.getElementById('name');
const description = document.getElementById('description');
const createBtn = document.getElementById('create-btn');

createBtn.onclick = () => {
    axios
    .post('http://localhost:3000/communities', {
        name: name.value,
        description: description.value,
    })
    .then(response => window.location.href = `community.html?id=${response.data.id}`)
    .catch(error => alert('There was an error. Please try again'))
}