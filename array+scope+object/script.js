const numbers = [8,1,23,4,5,29,2,5,2,2,1,6];
const max = numbers [0];
const indexMax = 0;

// tang hieu suat cua ung dung
const lengthArray = numbers.lenght;
for(let i= 1; i< lengthArray; i++){
   if (max < numbers[i]) {
      max = numbers[i];
      indexMax = i;
   }
}

numbers.forEach(function () {
   
})


document.getElementById('kq-10').innerHTML = `số lớn nhất là : ${max} va index la: ${indexMax}`;