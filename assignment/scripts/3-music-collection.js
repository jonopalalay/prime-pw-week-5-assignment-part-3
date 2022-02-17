console.log('***** Music Collection *****')

let collection = []


function addToCollection(title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(album);
  return album;
}


console.log(addToCollection('Bleed American', 'Jimmy eat World', '2001' ));
console.log(addToCollection('Hybrid Theory', 'Linkin Park', '2000' ));
console.log(addToCollection('Late Registration', 'Kanye West', '2005' ));
console.log(addToCollection('Graduation', 'Kanye West', '2007' ));
console.log(addToCollection('Forest', 'J Cole', '2014' ));
console.log(addToCollection('1989', 'Taylor Swift', '2014' ));
console.log(collection);


function showCollection(array){
    console.log('The length of the array:', array.length);
    for(let i=0;i<array.length; i++){
      console.log(`${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished}`);
    }
}
showCollection(collection);

function findByArtist(artist){

let results = [];
  for(let i=0; i<collection.length; i++){
    if( artist === collection[i].artist){
      console.log('artist found! ', artist)
      results.push(collection[i]);
    }
  }
  return results;
  }


console.log(findByArtist('Jimmy eat World'));
console.log(findByArtist('J Cole'));
console.log(findByArtist('Muse'));
console.log(findByArtist('Kanye West'));
