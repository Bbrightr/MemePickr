import { catsData } from '/data.js'

const emotionRadios = document.getElementById('emotion-radios')

emotionRadios.addEventListener("change", activateSelection)

function activateSelection(e){
    const highLighted = document.getElementsByClassName('radio')
    for (let removeHighlighted of highLighted){
        removeHighlighted.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getEmotionsArray(cats){
    const emotionsArray = []
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}


function renderEmotionsRadios(cats){
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
        <label for="${emotions}">${emotion}</label>
        <input type="radio"
        value="${emotion}"
        name="emotions"
        id="${emotion}">
        </div>
        `

    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)
