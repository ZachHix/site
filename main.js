const flavoursContainer = document.getElementById('row1');
const flavoursScrollWidth = flavoursContainer.scrollWidth;

window.addEventListener('load', () => {
  self.setInterval(() => {
	if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
	  flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
	}
  }, 15);
});

const val = document.querySelector('username').value;
  console.log(val);
  const val = document.querySelector('postinfo').value;
	console.log(val);


function 'poster'() {
	
	  const val = document.querySelector('username').value;
	  console.log(val);
	  const val = document.querySelector('postinfo').value;
		console.log(val);
}