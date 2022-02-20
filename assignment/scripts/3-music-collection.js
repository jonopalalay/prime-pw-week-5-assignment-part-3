console.log('***** Music Collection *****')

let collection = []


function addToCollection(title, artist, yearPublished, tracks){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks,
  }
  collection.push(album);
  return album;
}


console.log(addToCollection('Bleed American', 'Jimmy eat World', '2001', 'The Middle: 2:46' ));
console.log(addToCollection('Hybrid Theory', 'Linkin Park', '2000', 'In the End: 3:36'));
console.log(addToCollection('Late Registration', 'Kanye West', '2005', 'Heard Em Say: 3:24' ));
console.log(addToCollection('Graduation', 'Kanye West', '2007', 'Flashing Lights: 3:58'));
console.log(addToCollection('Forest', 'J Cole', '2014', 'Wet Dreamz: 3:59' ));
console.log(addToCollection('1989', 'Taylor Swift', '2014', 'Shake It Off: 3:39' ));
console.log(collection);


function showCollection(array){
    console.log('The length of the array:', array.length);
    for(let i=0;i<array.length; i++){
      console.log(`${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished}
${array[i].tracks}`);
    }//updated tracks to show up in the collection
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




function search(searchArtist, searchYear, searchTracks){
  let searchArray = [];
  const searchCriteria = {
    artist: searchArtist,
    year:  searchYear,
    tracks: searchTracks
}

if(searchCriteria.artist === undefined && searchCriteria.year === undefined && searchArtist === undefined && searchTracks === undefined){
  return collection;
}
  for(let i=0; i<collection.length; i++){
    if( collection[i].artist === searchArtist && collection[i].yearPublished === searchYear && collection[i].tracks === searchTracks){
    searchArray.push(collection[i]);
      }
    }
    return searchArray;
  }


console.log(search('Ray Charles', '1957')); //shows empty array because no results
console.log(search()); //returns collection because the search was empty
console.log(search('Linkin Park','2000', 'In the End: 3:36')); //shows if it is in the collection
