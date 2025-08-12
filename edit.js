let editId = localStorage.getItem('editId')
let shoes = JSON.parse(localStorage.getItem('shoes'))??[]
let editing = shoes.find(el=>el.id==editId)
let article = document.getElementById('article')
let color = document.getElementById('color')
let size = document.getElementById('size')
let leftSize = document.getElementById('left-size')
let rightSize = document.getElementById('right-size')
let otherPairArticle = document.getElementById('other-pair-article')
let otherColorPair = document.getElementById('other-pair-color')
let otherLeftSize = document.getElementById('other-left-size')
let otherRightSize = document.getElementById('other-right-size')
let place = document.getElementById('place')
let form = document.querySelector('.container-create')

article.value = editing.article
color.value = editing.color
size.value = editing.size
leftSize.value = editing.leftSize
rightSize.value = editing.rightSize
otherPairArticle.value = editing.otherPairArticle
otherColorPair.value = editing.otherColorPair
otherLeftSize.value = editing.otherLeftSize
otherRightSize.value = editing.otherRightSize
place.value = editing.place



form.addEventListener('submit',function(event){
    event.preventDefault()
    
    let obj = {
        article:article.value,
        color:color.value,
        size:size.value,
        leftSize:leftSize.value,
        rightSize:rightSize.value,
        otherPairArticle:otherPairArticle.value,
        otherColorPair:otherColorPair.value,
        otherLeftSize:otherLeftSize.value,
        otherRightSize:otherRightSize.value,
        place:place.value,
        id:editId,
        
    }
 let newarray = shoes.map(el=>{
        if(el.id==editing.id){
         return obj   
        }else{
            return el
        }


    })
    localStorage.setItem('shoes', JSON.stringify(newarray))
    window.location.href='index.html'
})
