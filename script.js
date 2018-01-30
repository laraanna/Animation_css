const tagline = document.getElementById('tagline');
const taglineText = tagline.innerHTML;
const taglineArray = taglineText.split('');
tagline.innerHTML = '';
let span;
let letter;


for(let i=0;i<taglineArray.length;i++){
  span = document.createElement("span");
  letter = document.createTextNode(taglineArray[i]);
  console.log(span)
  if(taglineArray[i] == ' ') {
    tagline.appendChild(letter);
  } else {
		span.appendChild(letter);
  	tagline.appendChild(span);
  }
}
