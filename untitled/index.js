document.addEventListener('click', (event) => {
   if (event.target.closest('a')) {
       let a = event.target.closest('a');
       event.preventDefault();
       let agree = confirm(`Are you sure that you want to leave us to ${a.getAttribute('href')}`);
       if (agree) {
           location.href = a.href;
       }
   }
});