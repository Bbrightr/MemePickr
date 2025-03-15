import { catsData } from '/data.js'

const emotionRadios = document.getElementById('emotion-radios')

function getEmotionsArray(cats){
    const emotionsArray = []
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            emotionsArray.push(emotion)
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
