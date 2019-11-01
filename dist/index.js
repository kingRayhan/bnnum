'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The function for translating number to Bengali
 * @param {int} num Number to convert in Bengali
 * @param {boolean | false} [komma=false] komma notation on number
 * @return {string} Translated bangla number
 *
 * @author King Rayhan <md.raihan095@northsouth.edu>
 *  @example
 *      import bnNum from "bnnum"
 *
 *      console.log(bnNum(4587))
 *      // => ৪৫৮৭
 *
 *      console.log(bnNum(4587 , true))
 *      // => ৪,৫৮৭
 *
 */
var bnNum = function bnNum(num) {
  var komma = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return ('' + num.toLocaleString('fullwide', { useGrouping: komma })).replace('1', '১').replace('2', '২').replace('3', '৩').replace('4', '৪').replace('5', '৫').replace('6', '৬').replace('7', '৭').replace('8', '৮').replace('9', '৯').replace('0', '০');
};
exports.default = bnNum;