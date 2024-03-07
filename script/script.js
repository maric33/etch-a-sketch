'use strict'

const mainContainer = document.createElement('div');
mainContainer.id = 'mainContainer';

const rowContainer = document.createElement('div');
rowContainer.id = 'rowContainer';

// const smallContainer = document.createElement('div');
// smallContainer.id = 'smallContainer';


document.body.appendChild(mainContainer);
mainContainer.appendChild(rowContainer);

for ( let i = 0; i <= 16; i++){
    let element = document.createElement('div');
    rowContainer.appendChild(element);
};
