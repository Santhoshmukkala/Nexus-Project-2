function showContent(sectionId) {
const navButtons = document.querySelectorAll('.nav-button');
const contents = document.querySelectorAll('.content');
const targetContent = document.getElementById(sectionId);
navButtons.forEach((button) => {
    if (button.textContent.toUpperCase() === sectionId.toUpperCase()) {
        button.style.color = 'blue'; 
    } else {
        button.style.color = ''; 
    }
});
contents.forEach((content) => {
    content.classList.remove('visible');
});
targetContent.classList.add('visible');
window.scrollTo(0, 0);
document.body.style.opacity = 0;
setTimeout(() => {
    document.body.style.opacity = 1;
}, 0);
}

function redirectToEmail() {
    window.open('mailto:mukkalasanthosh@gmail.com', '_blank');
}
function submitFeedback(event) {
    event.preventDefault();  
    const formData = new FormData(event.target);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    
    document.getElementById('feedbackForm').reset();
    showContent('home'); 
}


function toggleMenu() {
    const body = document.body;
    body.classList.toggle('visible-menu');
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              