//comments
const commentsBtn = document.querySelectorAll(".comments__icon");
const tabsItems = document.querySelectorAll(".comments__main");

commentsBtn.forEach(function(itemC){
  itemC.addEventListener(`click`, function(){
    let currentBtn = itemC;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);


    commentsBtn.forEach(function(itemC){
      itemC.classList.remove("active");

    });


    tabsItems.forEach(function(itemC){
      itemC.classList.remove("active");

    });



    currentBtn.classList.add("active");
    currentTab.classList.add("active");
  })
});









