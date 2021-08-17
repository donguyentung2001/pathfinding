function findCoordinates(i) { 
    var x_coordinate = (i-1)%20; 
    var y_coordinate = Math.floor(((i-1)/20));
    return [x_coordinate, y_coordinate]; 
  }

 function findDistance(i, j) { 
    var i_coordinate = findCoordinates(i); 
    var j_coordinate = findCoordinates(j);
    var distance = Math.sqrt(Math.pow((i_coordinate[0] - j_coordinate[0]),2) + Math.pow(i_coordinate[1] - j_coordinate[1], 2))
    return distance 
  }

  function notVertical(i, j) { 
    var vertical_candidates = [i-1, i+1, i-20, i+20]
    if (vertical_candidates.includes(j)) { 
      return false; 
    }
    else { 
      return true;  
    }
  }

  console.log(notVertical(102, 100))