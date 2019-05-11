function getFormattedDate(date) {
    var d = date.slice(0, 10).split('-');
    return d[1] + '/' + d[2] + '/' + d[0];
}
Date.prototype.getMonthFormatted = function () {
    var month = this.getMonth() + 1;
    return month < 10 ? '0' + month : '' + month; // ('' + month) for string result
};
Date.prototype.getDayFormatted = function () {
    var day = this.getDay() + 1;
    return day < 10 ? '0' + day : '' + day; // ('' + month) for string result
};

var date = new Date();
//Date Formatter Functions

var monthDateToUse = date.getFullYear() + "-" + date.getMonthFormatted();
var newDate = new Date();
var dateToUseInForm = newDate.getFullYear() + "-" + newDate.getMonthFormatted() + "-" + newDate.getDayFormatted();

if (sessionStorage.getItem("dateSelected") === null) {
    monthDateToUse = date.getFullYear() + "-" + date.getMonthFormatted();
}
else {
    monthDateToUse = sessionStorage.getItem("dateSelected");
}
document.getElementById("mainInputMonth").value = monthDateToUse;
