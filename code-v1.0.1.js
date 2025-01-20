// Navigation bar hiding and showing with scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else if (prevScrollpos < currentScrollPos) {
    document.getElementById("header").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

// Navigation bar toggle (Mobile)
/* Open the sidenav */
function openNav() {
  document.getElementById("sidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

function calculateJobDuration(startDate) {
	const now = new Date();
	const totalMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
	const years = Math.floor(totalMonths / 12);
	const months = totalMonths % 12;

	// Format the output
	let duration = "";
	if (years > 1) {
		duration += `${years} yrs `;
	} else if (years > 0) {
		duration += `${years} yr `;
	}
	
	if (months > 1) {
		duration += `${months} mos`;
	} else if (months > 0) {
		duration += `${months} mo`;
	}

	return duration.trim();
}

// Get the duration and update the HTML
const omiliaStartDate = new Date("2024-09-16");
const duration = calculateJobDuration(omiliaStartDate);
document.getElementById("omilia-duration").textContent = duration;
