const space1 = document.querySelector('.one');
const space2 = document.querySelector('.two');
const space3 = document.querySelector('.three');
const space4 = document.querySelector('.four');
const space5 = document.querySelector('.five');
const space6 = document.querySelector('.six');
const space7 = document.querySelector('.seven');
const space8 = document.querySelector('.eight');
const space9 = document.querySelector('.nine');
const button = document.querySelector('.button');


button.addEventListener('click', checkWinner);


// function to determine winner
function checkWinner() {
if(space1.value !== '' && space1.value === space2.value && space3.value === space2.value) {
    alert ('You Won!!!!')
    clearSpaces()
} else if(space1.value !== '' && space1.value === space4.value && space7.value === space4.value) {
    alert ('You Won!!!!')
    clearSpaces()
} else if(space1.value !== '' && space1.value === space5.value && space9.value === space5.value) {
    alert ('You Won!!!!')
    clearSpaces()
} else if(space3.value !== '' && space3.value === space5.value && space7.value === space5.value) {
    alert ('You Won!!!')
    clearSpaces()
} else if(space3.value !== '' && space3.value === space6.value && space9.value === space6.value) {
    alert ('you Won!!!')
    clearSpaces()
} else if(space4.value !== '' && space4.value === space5.value && space6.value === space5.value) {
    alert ('You Won!!!')
    clearSpaces()
} else if(space2.value !== '' && space2.value === space5.value && space8.value === space5.value) {
    alert ('You Won!!!')
    clearSpaces()
} else if(space7.value !== '' && space7.value === space8.value && space8.value === space9.value) {
    alert('You Won!!!')
    clearSpaces()
}
}

function clearSpaces() {
    space1.value = '';
    space2.value = '';
    space3.value = '';
    space4.value = '';
    space5.value = '';
    space6.value = '';
    space7.value = '';
    space8.value = '';
    space9.value = '';
}
