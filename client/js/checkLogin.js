if (!localStorage.getItem('userId')) {
    window.location.href = 'login.html';
}

document.getElementById('logout').onclick = () => {
    localStorage.removeItem('userId');
    window.location.href = 'login.html';
}