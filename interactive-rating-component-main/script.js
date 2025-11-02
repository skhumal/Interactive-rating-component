const stars = document.querySelectorAll('.star');
const submitBtn = document.querySelector('.submit');
const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');
const selectedRating = document.getElementById('selected-rating');

let rating = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    // Remove active state from all
    stars.forEach(s => s.classList.remove('selected'));
    // Add to clicked one
    star.classList.add('selected');
    // Store rating value
    rating = star.textContent;
  });
});

submitBtn.addEventListener('click', () => {
  if (rating === 0){
    alert('Please select a rating before submitting.');
    return;
  }

  selectedRating.textContent = rating;
  ratingState.style.display = 'none';
  thankYouState.style.display = 'flex';
});