const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function findTravelTime(travelInformarion){
      let time = travelInformarion.destinationDistance/travelInformation.speed;
       return `${Math.floor(time)} hours and ${Math.floor((time-Math.floor(time)) * 60)} minutes`;
  }
  const travelTime = findTravelTime(travelInformation);
  console.log(travelTime); // 4 hours and 42 minutes