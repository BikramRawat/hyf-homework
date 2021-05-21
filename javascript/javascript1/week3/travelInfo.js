const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function findTravelTime(travelInformation) {
  const time = travelInformation.destinationDistance / travelInformation.speed;
  const hours = Math.floor(time);
  const minutes = Math.floor((time - hours) * 60);
  return `Total travel time is: ${hours} hours and ${minutes} minutes`;
}
const travelTime = findTravelTime(travelInformation);
console.log(travelTime);