// const posts = [
//     { title: 'Book 1', body: 'This is Book 1' },
//     { title: 'Book 2', body: 'This is Book 2' }
// ]

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// getPosts();


// const posts = [
//     { title: 'Book 1', body: 'This is Book 1' }, { title: 'Book 2', body: 'This is Book 2' }
// ]

// function getPosts() {

//     setTimeout(() => {
//         let output = '';
//         posts.forEach(post => {
//             output = `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;

//     }, 1000);
// }


// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// createPost({ title: 'Post three', body: 'This is post three' }, getPosts);


const posts = [{ Title: 'Book 1', body: 'This is Book 1' }, { Title: 'Book 2', body: 'This is Book 2' }];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output = `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);

}

createPost({ title: 'Book 3', body: 'This is book 3' }, getPosts);