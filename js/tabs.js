


// let tabs = document.querySelectorAll(".tabs__button"),
//     contents = document.querySelectorAll('.tabs__content');

// tabs.forEach((tab, index) => {
//     tab.addEventListener('click', () => {
//         contents.forEach((content) => {
//             content.classList.remove('is-active');
//         });
//         tabs.forEach((content) => {
//             tab.classList.remove('is-active');
//         });

//         contents[index].classList.add('is-active');
//         tabs[index].classList.add('is-active');
//     });
// });




// function setupTabs () {
//     document.querySelectorAll(".tabs__button")
//     .forEach(button => {
//         button.addEventListener("click", () => {
//             const sideBar = button.parentElement;
//             const tabsContainer = sideBar.parentElement;
//             const tabNumber = button.dataSet.forTab;
//             const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}]`)
        
//             sideBar.querySelectorAll(".tabs__button")
//             .forEach(button => {
//                 button.classList.remove("tabs__button--active");
//             });

//             tabsContainer.querySelectorAll(".tabs__content")
//             .forEach(tab => {
//                 tab.classList.remove("tabs__content--active");
//             });

//             button.classList.add("tabs__button--active");
//             tabToActivate.classList.add("tabs__content--active");
        
        
//         });
//     })
// }

// document.addEventListener("DOMContentLoaded", () => {
//     setupTabs();
// });