var makeFriendlyDates = function (dates) {
  var firstDate = dates[0];
  var secondDate = dates[1];
  var firstDay = firstDate.substr(8,2);
  var secondDay = secondDate.substr(8,2);
  var firstMonth = firstDate.substr(5,2);
  var secondMonth = secondDate.substr(5,2);
  var firstYear = firstDate.substr(0,4);
  var secondYear = secondDate.substr(0,4);
  friendlyDates = [];

  if(isCurrentYear() && sameMonth() && sameDay()) {
    var firstFriendlyDate = findMonth(firstMonth) + ' ' + findOrdinalDay(firstDay);
    friendlyDates.push(firstFriendlyDate);
  } else if (isCurrentYear() && sameMonth()) {
    var firstFriendlyDate = findMonth(firstMonth) + ' ' + findOrdinalDay(firstDay);
    var secondFriendlyDate =  findOrdinalDay(secondDay);
    friendlyDates.push(firstFriendlyDate, secondFriendlyDate);
  } else if(isCurrentYear()) {
    var firstFriendlyDate = findMonth(firstMonth) + ' ' + findOrdinalDay(firstDay);
    var secondFriendlyDate = findMonth(secondMonth) + ' ' + findOrdinalDay(secondDay);
    friendlyDates.push(firstFriendlyDate, secondFriendlyDate);
  } else if (sameYear() && sameMonth() && sameDay()) {
    var firstFriendlyDate = findMonth(firstMonth) + ' ' + findOrdinalDay(firstDay) + ', ' + firstYear;
    friendlyDates.push(firstFriendlyDate);
  } else if (sameYear() && sameMonth()) {
    var firstFriendlyDate = findMonth(firstMonth) + ' ' + findOrdinalDay(firstDay) + ', ' + firstYear;
    var secondFriendlyDate = findOrdinalDay(secondDay);
    friendlyDates.push(firstFriendlyDate, secondFriendlyDate);
  } else if(sameYear()) {
    var firstFriendlyDate = findMonth(firstMonth) + ' ' + findOrdinalDay(firstDay) + ', ' + firstYear;
    var secondFriendlyDate = findMonth(secondMonth) + ' ' + findOrdinalDay(secondDay);
    friendlyDates.push(firstFriendlyDate, secondFriendlyDate);
  }

  return friendlyDates;

  function isCurrentYear() {
    return firstYear == 2016 && secondYear == 2016;
  }

  function sameMonth() {
    return firstMonth == secondMonth;
  }

  function sameDay() {
    return firstDay == secondDay;
  }

  function sameYear() {
    return firstYear == secondYear;
  }
}

var findMonth = function (month) {
  var months = {'01': 'Jan', '02': 'Feb', '03': 'March', '05': 'May', '06': 'June', '07': 'July', '08': 'Aug', '09': 'Sept',
                '10': 'Oct', '11': 'Nov', '12': 'Dec'}
  return months[month];
}

var findOrdinalDay = function (day) {
  if(endsWithSt(day)) {
    return getStOrdinal(day);
  } else if(endsWithNd(day)) {
    return getNdOrdinal(day);
  } else if(endsWithRd(day)) {
    return getRdOrdinal(day);
  } else {
    return getThOrdinal(day);
  }
}

function endsWithSt(day) {
  return parseInt(day[1], 10) == 1;
}

function getStOrdinal(day) {
  if(day[0] == 0) {
    return day[1] + 'st';
  } else {
    return day + 'st';
  }
}

function getThOrdinal(day) {
  if(day[0] == 0) {
    return day[1] + 'th';
  } else {
    return day + 'th';
  }
}

  function endsWithNd(day) {
    return parseInt(day[1], 10) == 2;
  }

  function getNdOrdinal(day) {
    if(day[0] == 0) {
      return day[1] + 'nd';
    } else {
      return day + 'nd';
    }
  }

  function endsWithRd(day) {
    return parseInt(day[1], 10) == 3;
  }

  function getRdOrdinal(day) {
    if(day[0] == 0) {return day[1] + 'rd';}
    else {return day + 'rd';}
  }
