document.addEventListener('DOMContentLoaded', () => {
    const colorButton = document.getElementById('colorButton');
    const colors = ['#f0f2f5', '#e6e6fa', '#add8e6', '#f5f5dc'];
    let colorIndex = 0;
    
    colorButton.addEventListener('click', () => {
        colorIndex = (colorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[colorIndex];
    });

    const postsContainer = document.getElementById('posts-container');
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
        .then(response => response.json())
        .then(posts => {
            postsContainer.innerHTML = '';
            posts.forEach(post => {
                const postTitle = document.createElement('h3');
                postTitle.textContent = post.title;
                postsContainer.appendChild(postTitle);
            });
        })
        .catch(error => {
            postsContainer.innerHTML = 'Could not load posts.';
        });

    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        nameInput.classList.remove('error');
        nameInput.nextElementSibling.textContent = '';
        emailInput.classList.remove('error');
        emailInput.nextElementSibling.textContent = '';

        if (nameInput.value.trim() === '') {
            nameInput.classList.add('error');
            nameInput.nextElementSibling.textContent = 'Name is required.';
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            emailInput.classList.add('error');
            emailInput.nextElementSibling.textContent = 'Email is required.';
            isValid = false;
        }

        if (isValid) {
            alert('Thanks for submitting!');
            form.reset();
        }
    });
});