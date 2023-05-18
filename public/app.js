fetch('/api/posts')
.then(response => response.json())
.then(posts => {
    const postDiv = document.getElementById('posts');
    postDiv.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.textContent = `Post ID: ${post.id}, User ID: ${post.user_id}, Content: ${post.content}`;
        postDiv.appendChild(postDiv);
    });
}).catch(error => console.error('Error:', error));