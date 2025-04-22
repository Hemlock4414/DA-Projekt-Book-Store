function getCommentsTemplate(commentIndex, bookIndex) {
        return `          
            <tr>
                <th>${books[bookIndex].comments[commentIndex].name}:</th>
                <td>${books[bookIndex].comments[commentIndex].comment}</td>
            </tr>
        `;
}

function getBooksTemplate(bookIndex) {

    return `
            <div class="book-card">
                <div class="book-title">
                    <h2>${books[bookIndex].name}</h2>
                </div>
                <hr class="solid">
                <div class="book-image">
                     <img src="./assets/img/book_640.png" alt="">
                </div>
                <hr class="solid">
                <div class="book-info">
                    <div class="book-price-bar">
                        <div class="book-price">${books[bookIndex].price} €</div>

                        <div class="like-number-img">
                            <div id="likes-count-${bookIndex}" class="book-likes">${books[bookIndex].likes}</div>
                            
                            <div class="heart-container" onclick="toggleLike(${bookIndex})">
                                <img class="heart-icon default-heart ${books[bookIndex].liked ? "hidden" : ""}" src="./assets/icons/love_32.png" alt="">
                                <img class="heart-icon hover-heart hidden" src="./assets/icons/heart_32.png" alt="">
                                <img class="heart-icon liked-heart ${books[bookIndex].liked ? "" : "hidden"}" src="./assets/icons/heart_32.png" alt="">
                            </div>
                        </div>    
                    </div>  
                    <table>
                        <tr>
                            <th>Autor</th>
                            <td>: ${books[bookIndex].author}</td>
                        </tr>
                        <tr>
                            <th>Erscheinungsjahr</th>
                            <td>: ${books[bookIndex].publishedYear}</td>
                        </tr>
                        <tr>
                            <th>Genre</th>
                            <td>: ${books[bookIndex].genre}</td>
                        </tr>
                    </table>
                </div>
                <hr class="solid">
                <div class="book-comments">
                    <h3>Kommentare:</h3>
                    <table id="book-comment-${bookIndex}"></table>
                    <div class ="new-comment">
                        <input type="text" placeholder="Neuen Kommentar hinzufügen">
                        <div class="submit-comment">
                            <input type="text" placeholder="Dein Benutzername">
                            <button type="submit">Abschicken</button>
                        </div>
                    </div>
                </div>
            </div>
    `;
}