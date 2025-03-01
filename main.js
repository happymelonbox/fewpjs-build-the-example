
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likeHeart = document.getElementsByClassName('like-glyph')
for (i=0; i<likeHeart.length; i++){
  let likeHeartI = likeHeart[i]
  likeHeartI.addEventListener('click', function(){
    mimicServerCall()
    .then(resolve => {
      if (likeHeartI.innerHTML === EMPTY_HEART){
      alert("You liked this post!")
      console.log(resolve)
      console.log(likeHeartI.innerHTML = FULL_HEART)
      likeHeartI.setAttribute('class', 'activated-heart')
      likeHeartI.setAttribute('style', "cursor: pointer")
    } else if (likeHeartI.innerHTML === FULL_HEART){
      likeHeartI.removeAttribute('class', 'activated-heart')
      likeHeartI.innerHTML = EMPTY_HEART
    }
  })
    .catch((reject) => {
      let modal = document.getElementById('modal')
      modal.removeAttribute('class', 'hidden')
      document.getElementById('modal-message').innerHTML = reject
      console.log(reject)
      setTimeout(function(){
        modal.setAttribute('class', 'hidden')
      }, 5000)
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
