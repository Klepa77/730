const formEdit = document.querySelector('.container-create')
const btnAdd  = document.querySelector('.btn-form')
const input  = document.querySelectorAll('input')
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
let ShoesArr = JSON.parse(localStorage.getItem('shoes'))??[]

formEdit.addEventListener('submit',function(event){
    event.preventDefault()
    let shoesObj = {
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
        id: Date.now(),


    }

    ShoesArr.push(shoesObj)
    
    localStorage.setItem('shoes',JSON.stringify(ShoesArr))
    window.location.href="index.html"




})