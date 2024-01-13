  
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll('.navbar-nav .dropdown.dropend');
  
    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener('click', function (event) {
        event.stopPropagation();
  
        const menu = this.querySelector('.dropdown-menu');
        const isOpen = this.classList.contains('clicked');
  
        dropdowns.forEach(function (otherDropdown) {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove('clicked');
          }
        });
  
        if (!isOpen) {
          this.classList.add('clicked');
        } else {
          this.classList.remove('clicked');
        }
  
        // Toggle the dropdown menu visibility
        menu.style.display = isOpen ? 'none' : 'block';
      });
  
      dropdown.addEventListener('mouseenter', function () {
        const menu = this.querySelector('.dropdown-menu');
        if (!this.classList.contains('clicked')) {
          menu.style.display = 'block';
        }
      });
  
      dropdown.addEventListener('mouseleave', function () {
        const menu = this.querySelector('.dropdown-menu');
        if (!this.classList.contains('clicked')) {
          menu.style.display = 'none';
        }
      });
    });
  
    document.addEventListener('click', function () {
      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove('clicked');
       });
    });
  });
  
 