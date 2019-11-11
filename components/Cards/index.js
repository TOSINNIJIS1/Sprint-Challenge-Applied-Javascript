// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    const responseData = response.data.articles;
    console.log(responseData);   

    const cardsContainer = document.querySelector('.cards-container');

    const arrayNumbers = Object.keys(responseData);
    
    arrayNumbers.forEach(e => {
        const loopResult = response.data.articles[e];
        console.log(loopResult);

        loopResult.forEach(f => {
            const newCard = allCard(f);
            cardsContainer.appendChild(newCard);
        })
    });
})




function allCard (compoArticle){
    const card = document.createElement('div');
    const cardHeadLine = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardImageContainer = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardSpan = document.createElement('span');
  

    card.appendChild(cardHeadLine);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(cardImageContainer);
    cardImageContainer.appendChild(cardImage);
    cardAuthor.appendChild(cardSpan);



    card.classList.add('card');
    cardHeadLine.classList.add('headline');
    cardAuthor.classList.add('author');
    cardImageContainer.classList.add('img-container');


    cardHeadLine.textContent = compoArticle.headline;
    cardImage.src = compoArticle.authorPhoto;
    cardSpan.textContent = `By ${compoArticle.authorName}`;
  
    
    return card;
}

