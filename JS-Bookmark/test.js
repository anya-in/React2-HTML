document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    //Get Form Values
    e.preventDefault();
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    // if (!validateForm(siteName, siteUrl)) {
    //     return false;
    // }
    var bookmark = {
        name: siteName,
        url: siteUrl
    }
    console.log(bookmark);
    //Local Storage Test
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    //localStorage.removeItem('test');
}

