document.getElementById("submit_details").addEventListener("submit", myFunction);

function myFunction(e){
   e.preventDefault()
 alert("submitted")
}

fetch('http://localhost:3000/Book1')
.then(data => {
  return db.json()
})
.then(post => {
  console.log (post.name)
})

fetch('http://localhost:3000/book2')
.then(data => {
  return db.json()
})
.then(post => {
  console.log (post.name)
})

fetch('http://localhost:3000/book3')
.then(data => {
  return db.json()
})
.then(post => {
  console.log (post.name)
})

fetch(' http://localhost:3000/book4')
.then(data => {
  return db.json()
})
.then(post => {
  console.log (post.name)
})