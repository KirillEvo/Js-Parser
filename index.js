// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Parser</h1>`;


let textNodes = [];

const body = document.querySelector('body');
function recursy (element){
    element.childNodes.forEach(node => {

        // console.log(node);
        // if (element.childNodes.length >1){
        //     recursy(node);
        // }

        // if (node.nodeName === "#text"){
        //     return;
        // } else {
        //     recursy(node);
        //     console.log(node);
        // }

        if (node.nodeName.match(/^H\d/)){
            const obj = {
                header: node.nodeName,
                content: node.textContent
            }
            textNodes.push(obj);
            // textNodes.push(node.textContent);
            // console.log(node);
        } else {
            recursy(node);
        }
    });
}
console.log(textNodes);
recursy(body);
// console.log(textNodes);
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(textNodes)
})
.then(response => response.json())
.then(json => console.log(json));