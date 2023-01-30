


console.dir(document);
var items= document.getElementsByClassName('list-group-item');
console.log(items);

//Make all the elements in the list have bold color font

for( var i=0; i< items.length ; i++) {
    items[i].style.fontWeight = 'bold' ;
}

//Make the 3 rd element in the list have green background color

var thirdItem= document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color = 'green';


