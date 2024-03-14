document.addEventListener('DOMContentLoaded', () => {


    const menuItems = [
        { name: "Startsida", link: "/index.html" },
        { name: "Parfymhistoria", link: "/parfymhistoria.html" },
        { name: "Parfymguide", link: "/parfymguide.html" },
        { name: "Media", link: "/media.html" }
    ];
    
    
    const menu = document.createElement("ul");
    menu.className = "menu";


    menuItems.forEach(item => {
        const menuItem = document.createElement("li");

        const menuLink = document.createElement("a");
        menuLink.href = item.link;
        menuLink.textContent = item.name;
        menuItem.appendChild(menuLink);
        menu.appendChild(menuItem);
        
    });

    
    const topNav = document.querySelector(".top-nav");
    if (topNav) {
        topNav.appendChild(menu);
    }

   
    const searchForm = document.createElement('form');
    searchForm.className = 'search-form';

    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('placeholder', 'Sök...');

    const searchButton = document.createElement('button');
    searchButton.setAttribute('type', 'submit');
    searchButton.textContent = 'Sök';

    
    searchForm.appendChild(searchInput);
    searchForm.appendChild(searchButton);

    
    if (topNav) {
        topNav.appendChild(searchForm);
    }
});
