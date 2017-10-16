var search = document.getElementById('film_search');

function filterSearch() {
   var filter, mainBlock, blocks, block, name;

   filter = search.value.toLowerCase();

   mainBlock = document.getElementsByClassName('teachers-box')[0];
   blocks = mainBlock.getElementsByClassName('teachers-block');

   /*Object.keys(mainBlock).forEach(function(item) {
    if (name.innerHTML.toLowerCase().indexOf(filter) > -1 ) {
    item.style.display = "";
    } else {
    item.style.display = "none";
    }
    item.style.dispay = "none";
    });*/

   for (var i=0; i<blocks.length; i++) {
      name = blocks[i].getElementsByTagName('span')[0];

      if (name.innerHTML.toLowerCase().indexOf(filter) > -1 ) {
         blocks[i].style.display= "";
      } else {
         blocks[i].style.display= "none";
      }
   }

    /*console.log(filter);*/
   /*console.log(name);*/
}

search.addEventListener("input", filterSearch);

