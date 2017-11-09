// John Dulaney
// This js file sends article strings to our Dashboard

//imports
const articleFactory = require("./articleFactory")
const Database = require("./Database")

// get article
const articleEl = document.getElementById("XXXXXXXXXXx")

articleEl.innerHTML += `
<article>

<section class="article__form">
<input type="datetime-local" name='articleForm__date' id="">
<input type="text" name='articleForm__url'>
<textarea name="'articleForm__note'" id="" cols="30" rows="10"></textarea>
</section>

`
//function for scope
const articleDOM = (article) => {
    article.forEach(artPush => {
        articleEl.innerHTML += `
        <article id=${Database.article.id}>
        <div>${Database.article.userID}</div>
        <div>${Database.article.url}</div>
        <div>${Database.article.note}</div>
        <div>${Database.article.date}</div>
        <br>
        </article>
        `
    })
}

module.exports = articleDOM