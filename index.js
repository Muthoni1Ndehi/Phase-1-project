const initializeDom=()=>{
document.getElementById('search_books').addEventListener('submit', searchBook)
function searchBook(e){
  e.preventDefault()
  
  let input=document.getElementById('books')
  console.log(input.value)

  fetch(`http://localhost:3000/books/${input.value}`)
  .then(response=>response.json())
  .then(books=>printOurbooks(books))

function printOurbooks(ourBooks){

  let p=document.getElementById('para')
  p.innerHTML=`${ourBooks.name} <br> ${ourBooks.Serial_No} <br> ${ourBooks.price}`

}
}










}
document.addEventListener('DOMContentLoaded', initializeDom)