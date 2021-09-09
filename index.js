
  const billiardRoom=  "Billiard Room";
  const kitchen =  "Kitchen";
  const library =  "Library";
  const conservatory=  "Conservatory";
  const hall= "Hall";
  const diningRoom=  "Dining Room";
  let rooms="";
  rooms+=billiardRoom+',';
  rooms+=kitchen+',';
  rooms+=library+',';
  rooms+=conservatory+',';
  rooms+=hall+',';
  rooms+=diningRoom;
 
  const libraryIndex=rooms.indexOf('Library');
  const librarySubstring=rooms.substring(libraryIndex, libraryIndex+library.length)
  console.log(librarySubstring);
  const leftSide=rooms.slice(0,libraryIndex-1);
  const rightside=rooms.slice(libraryIndex+library.length+1)
  console.log(rightside+rightside)
  console.log(rooms)

  //console.log(rooms.replace('Library',''));
  