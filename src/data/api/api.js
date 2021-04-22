const moment = require('moment');

//Created the function formatDate, to make it usable everywhere, to make the code cleaner
module.exports.formatDate = function formatDate(date) {
    if (moment(date).isValid()) return moment(date).format('YYYY-MM-DD HH:mm:ss');
    else return moment(parseInt(date)).format('YYYY-MM-DD HH:mm:ss');
}