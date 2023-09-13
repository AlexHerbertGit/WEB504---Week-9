// NOTE
// let current = document.querySelector('.current')
// let nextSibling = current.nextElementSibling

// while(nextSibling) {
//     nextSibling = nextSibling.nextElementSibling
// }

// let current = document.querySelector('.current')
// let prevSibling = currentNode.previousElementSibling

let getSiblings = function(e) {
    let siblings = []

    if(!e.parent) {
        return siblings
    }
    let sibling = e.parentNode.firstChild

    while(sibling) {
        if(sibling.nodeType == 1 && sibling !== e) {
            sibling.push(sibling)
        }
        sibling = sibling.nextSibling
    }
    return siblings
};

console.log(siblings);

// let menu = document.getElementById('menu')
// let items = menu.getElementsByClassName('item')

// let data = [].map.call(items, item => item.textContent)
// .map takes all of the results that are returned and parses into an empty array.
// .call takes the variables in the argument parameters and returns the results to the array.



// let btn = document.getElementById('btnRadio')
// let output = document.getElementById('output')

// btn.addEventListener('click', () => {
    // let languages = document.getElementsByName('language')
        // languages.forEach((language) => {
            // if(language.checked) {
                // output.innerText = `You code with : ${language.value}`
            // }
        // })
// });

// let btn = document.getElementById('btnCount')
// btn.addEventListener('click', () => {
//     let hTwoHeader = document.getElementsByTagName('h2')
//     alert(`The number of H2 tags are: ${hTwoHeader.length}`) 
// })