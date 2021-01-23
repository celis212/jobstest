// La parte práctica de la prueba consiste en desarrollar un script usando javascript, el cual
// debe extraer título del empleo, locación y url cuando lo ejecutemos por la consola del
// navegador. El website que usarás es el siguiente:

/*https://www.arrivia.com/careers/job-openings/*/

// x[0].textContent
// x[0].innerText.replace(/\s{2,}/g,', ')
// x[0].innerHTML
// y=x[0].innerText


// let urlPage = document.getElementsByClassName("job-btn-container col-xs-12 col-sm-4")

//DEBE MANDARSE SIN EL LET OJO
// let jobs = []
// let elementsPage = document.getElementsByClassName("col-xs-12 col-sm-8")
// for (let i = 0; i < elementsPage.length ; i++) {
//     let fulltext = elementsPage[i].innerText
//     let rest = fulltext.split("\n\n")
//     let jobName = rest[0]
//     let globalPosition = rest[1]
//     let urlPage = document.getElementsByClassName("job-btn-container col-xs-12 col-sm-4")[i].getElementsByTagName('a')[0].href
//     let info = {
//         title : jobName,
//         url : urlPage,
//         location : globalPosition,
//     }
//     jobs.push(info)
// }
// console.log(jobs)


const jobs = []
const elementsPage = document.getElementsByClassName("job-search-result")
for (let i = 0; i < elementsPage.length ; i++) {
    const fulltext = elementsPage[i].children[0].innerText
    const [jobName, globalPosition] = fulltext.split("\n\n")
    const urlPage = elementsPage[i].children[1].getElementsByTagName('a')[0].href
    const info = {
        title : jobName,
        url : urlPage,
        location : globalPosition,
    }
    jobs.push(info)
}
console.log(jobs)


// class Jobs {
//     constructor (title, url, location) {
//         this.title = title
//         this.url = url
//         this.location = location
//     }
// }