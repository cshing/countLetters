function countLetters(strArray){
    var returnObj = {};
    for (var i = 0; i < strArray.length; i++){
      noSpaces = strArray[i].split(' ').join('');
      for (var x = 0; x < noSpaces.length; x++){
        if (returnObj[noSpaces.charAt(x)] === undefined){
          returnObj[noSpaces.charAt(x)] = 1;
        }else{
          returnObj[noSpaces.charAt(x)] += 1;
        }
      }
    }
    return returnObj;
  }

  console.log(countLetters("lighthouse in the house"))
  
  //console.log(countLetters(process.argv.slice(2)));