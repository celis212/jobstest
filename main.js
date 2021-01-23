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


// const jobs = []
// const elementsPage = document.getElementsByClassName("job-search-result")
// for (let i = 0; i < elementsPage.length ; i++) {
//     const fulltext = elementsPage[i].children[0].innerText
//     const [jobName, globalPosition] = fulltext.split("\n\n")
//     const urlPage = elementsPage[i].children[1].getElementsByTagName('a')[0].href
//     const info = {
//         title : jobName,
//         url : urlPage,
//         location : globalPosition,
//     }
//     jobs.push(info)
// }
// console.log(jobs)

const elementsPage = document.querySelectorAll(".job-search-result")//node list
const jobs = Array.from(elementsPage).map((element) => {
    const fulltext = element.children[0].innerText
    const [jobName, globalPosition] = fulltext.split("\n\n")
    const urlPage = element.children[1].getElementsByTagName('a')[0].href
    return {
        title : jobName,
        url : urlPage,
        location : globalPosition,
    }
})
console.log(jobs)


// var mytable = “<table><tr>”;
// for (var CELL of ARRAY) {  mytable += “<td>” + CELL + “</td>”; }
// mytable += “</tr></table>”;
// document.getElementById(“ID”).innerHTML = mytable;


// let mytable = "<table><tr><th>#</th><th>Job Title</th><th>Location</th><th>Job URL</th></tr>";
// jobs.forEach((job, index) => {
//   	mytable += `<tr><td>${index}</td><td>${job.title}</td><td>${job.location}</td><td>${job.url}</td></tr>`;
// }) 
// mytable += "</table>"
// document.querySelector("#fl-main-content").insertAdjacentHTML("beforebegin",mytable)


let mytable = "<img style='margin: 1rem;' src='https://mx.talent.com/public/assets/img/talent_logo_purple_220.png' alt='logo of talent.com' /><section style='background-color: #000000; width: 100%; height: 5rem; margin-bottom: 1.5rem;'><p style='color: #ffffff; font-size: 2rem; font-weight: 500; line-height: 1.5rem; padding-top: 1.8rem; padding-left: 1.5rem;'>TEST: CESAR AUGUSTO CELIS MARIN</p></section><section style='width: 100%; height: 2.5rem; margin-bottom: 1.5rem;'><p style='color: #000000; font-size: 1.3rem; font-weight: 500; line-height: 1.5rem; padding-top: 0.5rem; padding-left: 1.5rem;'>JOBS</p></section><hr style='border-top: 0.5px solid #000000'><table style='padding-top: 1.5rem; color: #000000; display: flex; justify-content: center;'><tr style='border-style: solid none none none; border-width: 1px;'><th style='padding: 2rem;'>#</th><th>Job Title</th><th>Location</th><th>Job URL</th></tr>";
jobs.forEach((job, index) => {
  	mytable += `<tr style='border-style: solid none none none; border-width: 1px;'><td style='padding: 2rem;'>${index}</td><td style='table-layout: fixed; width: 40rem;'>${job.title}</td><td>${job.location}</td><td><a href="${job.url}">${job.url}</a></td></tr>`;
}) 
mytable += "</table>"
document.querySelector("#fl-main-content").insertAdjacentHTML("beforebegin",mytable)