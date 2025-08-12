const api_url = "https://dummyjson.com/quotes/random";
const quote = document.getElementById('quote');
const author = document.getElementById('author');


async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
    console.log(data);
}

function tweet(){
    window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML , "Tweet Window" ,"width=600 , height=300" )
}