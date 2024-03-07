'use strict'

const mainContainer = document.createElement('div');
mainContainer.id = 'mainContainer';

const rowContainer = document.createElement('div');
rowContainer.id = 'rowContainer';

document.body.appendChild(mainContainer);

for (let i = 0; i <=15; i++){
    let rowContainer = document.createElement('div');
    rowContainer.id = 'rowContainer';
    mainContainer.appendChild(rowContainer);
        for ( let i = 0; i <= 15; i++){
        let smallContainer = document.createElement('div');
        smallContainer.id= 'smallContainer';
        rowContainer.appendChild(smallContainer);
};
}













