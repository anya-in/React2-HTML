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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error:SOmething went wrong');
            }
        }, 2000);
    });
}

//createPost({ title: 'Book 3', body: 'This is book 3' }), then.(getPosts).catch(err => console.log(err));


//promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;

// Promise.all([promise1, promisee2]).then(values => console.log(values));


//Async /Await
async function init() {
    await createPost({ title: 'Book 3', body: 'This is post 3' });
    getPosts();
}

//init();

//Async / await /Fetch


//async function fetchUsers() {
