export const decimalToDMS = (decimal) => {
  let absDD = Math.abs(decimal);
  let degrees = Math.floor(absDD);
  let minutes = (absDD - degrees) * 60;
  let seconds = (minutes - Math.floor(minutes)) * 60;
  let dms = degrees + "°" + Math.floor(minutes) + "'" + seconds.toFixed(2) + '"';
  return dms;
}

// export const decimalToDMS = (coordinate) => {
//   const absolute = Math.abs(coordinate);
//   const degrees = Math.floor(absolute);
//   const minutesNotTruncated = (absolute - degrees) * 60;
//   const minutes = Math.floor(minutesNotTruncated);
//   const seconds = Math.floor((minutesNotTruncated - minutes) * 60);

//   return degrees + " " + minutes + " " + seconds;
// }

// export const dmsConverter = (lat, long) => {
//   const latitude = decimalToDMS(lat);
//   const latitudeCardinal = lat >= 0 ? "N" : "S";

//   const longitude = decimalToDMS(long);
//   const longitudeCardinal = long >= 0 ? "E" : "W";

//   return latitude + " " + latitudeCardinal + "\n" + longitude + " " + longitudeCardinal;
// }