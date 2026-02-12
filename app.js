 async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts= await response.json();
    const container = document.getElementById('postsContainer'); //Corrected ID//
    
    //Clear previous content if any
    container.innerHTML='';

    posts.forEach(post=> {
        const div = document.createElement('div');
        div.className= 'post'; //Apply Styling from CSS
        div.innerHTML=`<h2>${post.title}</h2><p>${post.body}</p>`;
        container.appendChild(div);
    });
}

//Example Usage: Cll this fuunction when button is clicked
document.getElementById('loadPostsBtn').addEventListener('click', fetchPosts);