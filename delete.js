let deleteitem = localStorage.getItem('deleteId')
console.log(deleteitem)
let shoes = JSON.parse(localStorage.getItem('shoes'))??[]

let btnDelete = document.querySelector('.btn__delete')
btnDelete.addEventListener('click',function(){
    localStorage.setItem('shoes',JSON.stringify(shoes.filter(el=>el.id!=deleteitem)))
    window.location.href="index.html"

})