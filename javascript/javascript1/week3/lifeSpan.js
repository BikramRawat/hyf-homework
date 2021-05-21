const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];
  const lifeDurationInMinutes = 80 * 365 * 24 * 60 ;
  let sumSeriesTIme = 0;
  function logOutSeriesText(seriesDurations) {
    for(let i =0;i<seriesDurations.length;i++){
        seriesTimeInMinutes = (seriesDurations[i].days  * 24 * 60) + (seriesDurations[i].hours * 60) + (seriesDurations[i].minutes);
        console.log(`${seriesDurations[i].title} took ${((seriesTimeInMinutes/lifeDurationInMinutes)*100).toFixed(3)} % of my life.`);
        sumSeriesTIme += (seriesTimeInMinutes/lifeDurationInMinutes)*100 ;
    }
    console.log(`In Total that is ${sumSeriesTIme.toFixed(3)} % of my life`);
  }
  
  logOutSeriesText(seriesDurations);