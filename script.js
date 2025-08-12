let ShoesArr = JSON.parse(localStorage.getItem('shoes'))??[]
 let tbody = document.querySelector('tbody')

function load(){
    ShoesArr.forEach(el=>{
        let tr = document.createElement('tr')
        let article = `<td>${el.article}</td>`
        let color = `<td>${el.color}</td>`
        let size = `<td>${el.size}</td>`
        let leftSize = `<td>${el.leftSize}</td>`
        let rightSize = `<td>${el.rightSize}</td>`
        let otherPairArticle = `<td>${el.otherPairArticle}</td>`
        let place = `<td>${el.place}</td>`
        let otherColorPair = `<td>${el.otherColorPair}</td>`
        let otherLeftSize = `<td>${el.otherLeftSize}</td>`
        let otherRightSize = `<td>${el.otherRightSize}</td>`
        let btnDelete =  document.createElement('button') 
        let btnEdit = document.createElement('button')
        btnEdit.textContent='Редактировать'
        btnEdit.className='edit'
        let tdEdit = document.createElement('td')
        btnEdit.id = el.id
        tdEdit.appendChild(btnEdit)
        btnDelete.textContent='Удалить'
        btnDelete.className='delete'
        let td = document.createElement('td')
        btnDelete.id = el.id
        td.appendChild(btnDelete)
        tr.innerHTML+=article
        tr.innerHTML+=color
        tr.innerHTML+=size
        tr.innerHTML+=leftSize
        tr.innerHTML+=rightSize
        tr.innerHTML+=otherPairArticle
        tr.innerHTML+=otherColorPair
        tr.innerHTML+=otherLeftSize
        tr.innerHTML+=otherRightSize
        tr.innerHTML+=place
        tr.appendChild(tdEdit)
        tr.appendChild(td)
       
        tbody.appendChild(tr)
        

    
        
    })
}
load()
 let buttons = document.querySelectorAll('.delete')
 buttons.forEach(button=>{
    button.addEventListener('click',function(){
        localStorage.setItem('deleteId',button.id)
        window.location.href="modal.html"

        

    })
 })

 
let buttonsEdit = document.querySelectorAll('.edit')
buttonsEdit.forEach(btnEd=>{
    btnEd.addEventListener('click',function(){
        localStorage.setItem('editId',btnEd.id)
        window.location.href='edit.html'

    })
})


