function init() {

  renderBooks();

  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    renderComments(bookIndex); 
  }
}

function renderBooks() {

  let bookContent = document.getElementById('book-content');
  bookContent.innerHTML = "";

  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    bookContent.innerHTML += getBooksTemplate(bookIndex);
  }
}

function renderComments(bookIndex) {

  let commentRef = document.getElementById(`book-comment-${bookIndex}`);
  commentRef.innerHTML="";

  if (books[bookIndex].comments.length === 0) {
    return "";

  } else {

    for (let commentIndex = 0; commentIndex < books[bookIndex].comments.length; commentIndex++) {
        commentRef.innerHTML += getCommentsTemplate(commentIndex, bookIndex);
    } 
  }
}

function toggleLike(bookIndex) {

  if (books[bookIndex].liked == true) {
    books[bookIndex].liked = false;
    books[bookIndex].likes--;
  } else {
    books[bookIndex].liked = true;
    books[bookIndex].likes++;
  }

  liked(bookIndex);
  renderNumberLikes(bookIndex);
}

function liked(bookIndex) {
  let heartElement = document.getElementsByClassName('heart-container');

  if (books[bookIndex].liked == true) {
    heartElement[bookIndex].innerHTML = `
      <img class="heart" src="./assets/icons/heart_32.png" alt="">
    `;
  } else {
    heartElement[bookIndex].innerHTML = `
      <img class="heart" src="./assets/icons/love_32.png" alt="">
    `;
  }
}

function renderNumberLikes(bookIndex) {
  let likeNumberElement = document.getElementById(`likes-count-${bookIndex}`);

  likeNumberElement.innerHTML = books[bookIndex].likes;
}

function addComment(bookIndex) {
  const commentInput = document.getElementById(`comment-input-${bookIndex}`);
  const nameInput = document.getElementById(`name-input-${bookIndex}`);

  const commentText = commentInput.value;
  const userName = nameInput.value;

  if (commentText === '' || userName === '') {
    alert("Bitte gib Deinen Namen und einen Kommentar ein.");
    return;
  }

  books[bookIndex].comments.unshift({
    name: userName,
    comment: commentText
  });

  commentInput.value = '';
  nameInput.value = '';

  renderComments(bookIndex);
}
