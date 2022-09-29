var searchBar = document.getElementById('searchBar')
const animeCharacters = []
var searchBtn = document.getElementById('search-button')

function getByChar () {
  var input = document.getElementById('search-input');
  var charName = input.value;
            console.log(charName)
            let queryUrl = "https://animechan.vercel.app/api/quotes/character?name=" + charName
            try {
             fetch(queryUrl)
            .then(response => response.json())
            .then(quotes => {
              const quoteDiv = document.getElementById("quotes")
              const quote = quotes[0];
               if(!quote) {
                const quoteDiv = document.getElementById("quotes")
                return quoteDiv.innerHTML += `<li class="failed"> couldnt find a quote from ${charName} </li>`
               }
              console.log(quote)
              return quoteDiv.innerHTML +=`<ul>
              <li class="character">${quote.character}</li>
              <li class="anime">${quote.anime}</li>
              <li>quote:</li>
              <q class="quote">${quote.quote}</q>
              </ul>`
            })
            } catch(err) {
              const quoteDiv = document.getElementById("quotes")
              quoteDiv.innerHTML +=`<li class="failed"> couldnt find a quote from ${charnName} </li>`
            }
}
searchBtn.addEventListener('click', getByChar)