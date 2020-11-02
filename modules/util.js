const zeroPlus = n => n < 10 ? '0' + n : n;
const getNowDate = () =>{
	return new Date().getDate();
}
console.log(zeroPlus(5),getNowDate());
module.exports = { zeroPlus, getNowDate}