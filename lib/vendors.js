'use strict';

console.log('123123');

require("jquery/dist/jquery");
require('./common.scss');
var moment = require('moment');
console.log(moment.locale('zh-cn'));
console.log(moment().format('llll'));