const dateFromInput = document.getElementById('date-from');
const dateToInput = document.getElementById('date-to');
const calendarContainer = document.querySelector('.calendar-container');
const calendarButtons = document.querySelectorAll('.date-input-calendar-btn');
const statusFilterContainer = document.querySelector('.status-filter');
const statusOptionsContainer = document.querySelector('.status-options-container');
const statusSelect = document.getElementById('order-status')

document.addEventListener('click', (e) => {

    if(dateFromInput.contains(e.target) || dateToInput.contains(e.target) ||
        calendarButtons[0].contains(e.target) || calendarButtons[1].contains(e.target)
    ){
        calendarContainer.style.display = 'flex';
    } else if(!calendarContainer.contains(e.target)){
        calendarContainer.style.display = 'none'
    }

    if(statusFilterContainer.contains(e.target)) {
        statusOptionsContainer.style.display = 'flex';
    } else if (!statusOptionsContainer.contains(e.target)){
        statusOptionsContainer.style.display = 'none';
    }
});

statusOptionsContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('status-option')){
       statusSelect.value = e.target.innerText.toLowerCase();
    }
});

const generateDays = () => {
  const dayContainer = document.querySelector('.calendar-grid');
  const daysInMonth = 30;
  for(let i = 1; i <= daysInMonth; i++){
    let dayNumber = document.createElement('span');
    dayNumber.classList.add('day-number');
      dayNumber.innerText = i;
       dayContainer.append(dayNumber)
  }
};

generateDays()

const colors = ['#ffffff', '#ff5733', '#33ff57', '#3357ff', '#ff33a6', '#33ffd5', '#f0e68c', '#ff8c69'];
let currentTheme = 0;

document.getElementById('themeButton').addEventListener('click', function() {
currentTheme = (currentTheme + 1) % colors.length;
document.body.style.backgroundColor = colors[currentTheme];
document.body.style.color = (currentTheme % 2 === 0) ? '#000' : '#fff';
});
