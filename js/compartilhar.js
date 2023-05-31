const link = encodeURI(window.location.href);
const msg = encodeURIComponent('Hey, I found this article');
const title = encodeURIComponent('Article or Post Title Here');

const fb = document.getElementById('facebook');
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const twitter = document.getElementById('twitter');
twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

const linkedIn = document.getElementById('linkedin');
linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`;
