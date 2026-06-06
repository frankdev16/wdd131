let numReviews = Number(window.localStorage.getItem("reviewCounter-ls")) || 0;
numReviews++;
window.localStorage.setItem("reviewCounter-ls", numReviews);
document.getElementById("reviewCounter").textContent = numReviews;