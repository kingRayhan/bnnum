/**
 * The function for translating number to Bengali
 * @param {int} num Number to convert in Bengali
 * @param {boolean | false} [komma=false] komma notation on number
 * @return {string} Translated bangla number
 *
 * @author King Rayhan <me@rayhan.info>
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
const bnNum = (num, komma = false) => {
	const banglaNumber = {
		'0': '০',
		'1': '১',
		'2': '২',
		'3': '৩',
		'4': '৪',
		'5': '৫',
		'6': '৬',
		'7': '৭',
		'8': '৮',
		'9': '৯'
	}
	let str = `${num.toLocaleString('bn-BD', { useGrouping: komma })}`

	for (var x in banglaNumber) {
		str = str.replace(new RegExp(x, 'g'), banglaNumber[x])
	}
	return str
}
export default bnNum
