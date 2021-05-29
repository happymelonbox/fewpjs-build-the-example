// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeHeart = document.getElementsByClassName('like-glyph')
for (i=0; i<likeHeart.length; i++){
  likeHeart[i].addEventListener('click', function(){
    mimicServerCall()
    .then(response => {return response.json})
    .then((json) => {
      if (likeHeart[i] !== EMPTY_HEART){
        console.log(likeHeart)}
  })
    .catch((reject) => {
      let modal = document.getElementById('modal')
      modal.removeAttribute('class', 'hidden')
      modal.getElementsByTagName('p').innerHTML = reject
      console.log(reject)
  })

})
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
