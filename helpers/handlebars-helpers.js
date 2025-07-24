const moment = require('moment');

// Register custom Handlebars helpers
module.exports = {
  // Format date using moment.js
  formatDate: function(date, format) {
    if (!date) return '';
    format = format || 'MMMM DD, YYYY'; // default format
    return moment(date).format(format);
  },

  // Check equality (used for status badges)
  eq: function(a, b) {
    return a === b;
  },
  
  // Greater than
  gt: function(a, b) {
    return a > b;
  },
  
  // Less than
  lt: function(a, b) {
    return a < b;
  },
  
  // Truncate text with ellipsis
  truncate: function(text, length) {
    length = length || 100;
    if (!text || text.length <= length) return text;
    return text.substring(0, length) + '...';
  }
}; 