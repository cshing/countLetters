function countLetters(strArray){
    var returnObj = {};
    for (var i = 0; i < strArray.length; i++){
      noSpaces = strArray[i].split(' ').join('');
      for (var ii = 0; ii < noSpaces.length; ii++){
        if (returnObj[noSpaces.charAt(ii)] === undefined){
          returnObj[noSpaces.charAt(ii)] = 1;
        }else{
          returnObj[noSpaces.charAt(ii)] += 1;
        }
      }
    }
    return returnObj;
  }

  console.log(countLetters("lighthouse in the house"))
  
  //console.log(countLetters(process.argv.slice(2)));