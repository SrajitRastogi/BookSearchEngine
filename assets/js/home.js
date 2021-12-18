const { json } = require("express/lib/response");

function findBook(){
    // document.getElementById('result').innerHTML="HEY";
    var userSearch=document.getElementById('userInput').value;
    var bookResult= document.getElementById('result');

    bookResult.innerHTML="";

    $.ajax({
        type:"GET",
        url:"https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
        dataType:"JSON",
        success:function(book){
            for(var i=0;i<book.items.length;i++){
                var wrapperDiv=document.createElement('div');
                wrapperDiv.className='media';
                // create img element for images
                var image=document.createElement('img');
                image.className='mr-3';
                image.src= book.items[i].volumeInfo.imageLinks.thumbnail; 
                // creating div element with class of media-body
                var div=document.createElement('div');
                div.className='media-body';
                // create header for body
                var header=document.createElement('h5');
                header.className='mt-0';
                header.innerHTML=book.items[i].volumeInfo.title;
                // append header to the body
                div.appendChild(header);
                wrapperDiv.appendChild(image);
                wrapperDiv.appendChild(div);
                // create h5 element for author
                var author=document.createElement('h6');
                author.innerHTML=book.items[i].volumeInfo.authors;
                div.appendChild(author);
                // create paragraph for country
                var country=document.createElement('p');
                country.innerHTML='Country :' +" "+ book.items[i].accessInfo.country;
                div.appendChild(country);
                // create element for description
                var desc=document.createElement('p');
                desc.innerHTML=book.items[i].volumeInfo.description;
                div.appendChild(desc);
                // create hr to seperate every books info
                var line=document.createElement('hr');
                // Make every elements as children of bookResult
                 bookResult.appendChild(wrapperDiv);
                 bookResult.appendChild(line);
            }
        }
    })
}