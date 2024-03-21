document.addEventListener('DOMContentLoaded', () => {


    const menuItems = [
        { name: "Startsida", link: "index.html" },
        { name: "Parfymhistoria", link: "parfymhistoria.html" },
        { name: "Parfymguide", link: "parfymguide.html" },
        { name: "Myter och fakta", link: "myterochfakta.html" }
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




document.addEventListener('DOMContentLoaded', () => {

    // Array med menyobjekt
    const menuItems = [
        { name: "Startsida", link: "index.html" },
        { name: "Parfymhistoria", link: "parfymhistoria.html" },
        { name: "Parfymguide", link: "parfymguide.html" },
        { name: "Myter och fakta", link: "myterochfakta.html" }
    ];
    
    // Skapa en ny ul-lista för footermenyn
    const footerMenu = document.createElement("ul");
    footerMenu.className = "footer-menu";

    // Lägg till rubrik för footermenyn
    const footerMenuHeader = document.createElement("h3");
    footerMenuHeader.textContent = "Navigera";

    // Lägg till rubrik i footern
    const footer = document.querySelector("footer");
    if (footer) {
        footer.appendChild(footerMenuHeader);
        footer.appendChild(footerMenu);
    }

    // Loopa igenom menyobjekten och skapa menyelement med länkar
    menuItems.forEach(item => {
        const menuItem = document.createElement("li");
        const menuLink = document.createElement("a");
        menuLink.href = item.link;
        menuLink.textContent = item.name;
        menuItem.appendChild(menuLink);
        footerMenu.appendChild(menuItem);
    });

 
    
});


function toggleContent(sectionId) {
    var content = document.getElementById(sectionId);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}


document.addEventListener("DOMContentLoaded", function() {
    var footerLogoLink = document.getElementById('footer-logo-link');
    footerLogoLink.addEventListener('click', function(event) {
        event.preventDefault(); // Förhindra standard beteende (att navigera till sidan angiven i href-attributet)
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Rulla till toppen av sidan med smooth scroll-effekt
    });
});




document.addEventListener("DOMContentLoaded", function() {
    var headerLogoLink = document.getElementById('header-logo-link');
    headerLogoLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});







