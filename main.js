const bar = document.querySelector(".bar");
const icons = document.querySelector("#dropdownList");
bar.onclick = ()=>{
    icons.classList.toggle("show");
}


function toggleDropdown() {
  const dropdown = document.getElementById("dropdownList");
  dropdown.classList.toggle("show");
}

// Close the dropdown if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('.menu-button') && !event.target.closest('.menu-button')) {
    const dropdowns = document.getElementsByClassName("dropdown-list");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}