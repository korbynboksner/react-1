function addCommas() {
  
  let numStr = number.toString();

 
  const [integerPart, decimalPart] = numStr.split('.');

  
  let formattedIntegerPart = '';
  for (let i = 0; i < integerPart.length; i++) {
    if (i > 0 && (integerPart.length - i) % 3 === 0) {
      formattedIntegerPart += ',';
    }
    formattedIntegerPart += integerPart[i];
  }

  
  const formattedNumber = decimalPart
    ? `${formattedIntegerPart}.${decimalPart}`
    : formattedIntegerPart;

  return formattedNumber;



}

module.exports = addCommas;