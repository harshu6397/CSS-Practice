const shareBtn = document.querySelector('.share-btn');
const share = document.querySelector('.share');

shareBtn.addEventListener('click', () => {
    share.classList.toggle('active');
})
