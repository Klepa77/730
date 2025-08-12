let editId = localStorage.getItem('editId')
let shoes = JSON.parse(localStorage.getItem('shoes'))??[]
let editing = shoes.find(el=>el.id==editId)
console.log(editing)

