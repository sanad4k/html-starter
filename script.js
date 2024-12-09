// Assuming the button elements
const button1 = document.getElementById('day');
const button2 = document.getElementById('week');
const button3 = document.getElementById('month');

// Assuming elements for day, week, and month
const day = document.getElementsByClassName('day');
const week = document.getElementsByClassName('week');
const month = document.getElementsByClassName('month');

// Button 1 Logic
button1.addEventListener('click', () => {
    for (let i = 0; i < day.length; i++) {
        // If the element has 'hidden' class, show it
        if (day[i].classList.contains('hidden')) {
            day[i].classList.remove('hidden');
            
            // Hide 'week' and 'month' elements if they are visible
            if (!week[i].classList.contains('hidden')) {
                week[i].classList.add('hidden');
            }
            if (!month[i].classList.contains('hidden')) {
                month[i].classList.add('hidden');
            }
        }
    }
});

// Button 2 Logic
button2.addEventListener('click', () => {
    for (let i = 0; i < week.length; i++) {
        // If the element has 'hidden' class, show it
        if (week[i].classList.contains('hidden')) {
            week[i].classList.remove('hidden');
            

            // Hide 'day' and 'month' elements if they are visible
            if (!day[i].classList.contains('hidden')) {
                day[i].classList.add('hidden');
            }
            if (!month[i].classList.contains('hidden')) {
                month[i].classList.add('hidden');
            }
        }
    }
});

// Button 3 Logic
button3.addEventListener('click', () => {
    for (let i = 0; i < month.length; i++) {
        // If the element has 'hidden' class, show it
        if (month[i].classList.contains('hidden')) {
            month[i].classList.remove('hidden');
           

            // Hide 'day' and 'week' elements if they are visible
            if (!day[i].classList.contains('hidden')) {
                day[i].classList.add('hidden');
            }
            if (!week[i].classList.contains('hidden')) {
                week[i].classList.add('hidden');
            }
        }
    }
});
