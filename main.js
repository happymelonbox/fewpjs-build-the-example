
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeHeart = document.getElementsByClassName('like-glyph')
for (i=0; i<likeHeart.length; i++){
  likeHeartI = likeHeart[i]
  likeHeartI.addEventListener('click', function(){
    mimicServerCall()
    .then(resolve => {
      alert("You liked this post!")
      console.log(resolve)
      console.log(likeHeartI.innerHTML = FULL_HEART)
      likeHeartI.setAttribute('class', 'activated-heart')
    })
    .catch((reject) => {
      let modal = document.getElementById('modal')
      modal.removeAttribute('class', 'hidden')
      modal.getElementsByTagName('p').innerHTML = reject
      alert("Random server error!")
      console.log(reject)
  })
return mimicServerCall()
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
