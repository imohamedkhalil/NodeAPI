const accessKey = '04a7fddcc290855a8f76dbacbcd4e3e16f48216c67659b956a1630d40a811788';
const query = '';
const input = document.getElementById('input-text');

function fetchPosts() {
    fetch(`https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${input.value}`)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        for(let i=0; i<json.results.length; i++) {
            let posts = document.getElementById('posts');
            let image = document.createElement('img');
            image.src = json.results[i].urls.small;
            posts.appendChild(image);
        }
    });
}

let searchButton = document.getElementById('search');
searchButton.addEventListener('click', function(){
    posts.innerHTML = '';
    fetchPosts();
});

