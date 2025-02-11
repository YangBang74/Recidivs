const tabsBtn = document.querySelectorAll('.products__btn');
const tabsItems = document.querySelectorAll('.products__tab');
const burgerMenu = document.querySelector('.burger__menu');
const header = document.querySelector('.header');
const body = document.querySelector('body');
tabsBtn.forEach(onTabClick);

function onTabClick(item){
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("date-tab");
        let currentTab = document.querySelector(tabId);

        if ( ! currentBtn.classList.contains('active')){
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function(item){
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
        
    })
}
burgerMenu.addEventListener("click", () =>{
        burgerMenu.classList.toggle("click");
        header.classList.toggle("click");
        body.classList.toggle("click");
    })
