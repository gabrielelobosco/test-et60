addEventListener("scroll", (event) => {
    // scrollY > element.getBoundingClientRect().top + window.scrollY
    
    var titlesGroup = document.getElementById("titlesGroup");

    var sections = document.getElementsByClassName("sections");

    if (window.scrollY > sections[0].getBoundingClientRect().bottom/2) {
        titlesGroup.classList.add("titleWhite");
    }
    if (window.scrollY < sections[0].getBoundingClientRect().bottom/2) {
        titlesGroup.classList.remove("titleWhite");
    }

    var leftBox = document.getElementById("leftBox");
    var rightBox = document.getElementById("rightBox");

    if (window.scrollY > sections[0].getBoundingClientRect().bottom/2) {
        leftBox.classList.add("aboutUsLeftBox");
        rightBox.classList.add("aboutUsRightBox");
    }
    if (window.scrollY < sections[0].getBoundingClientRect().bottom/2 || sections[1].getBoundingClientRect().bottom < 350) {
        leftBox.classList.remove("aboutUsLeftBox");
        rightBox.classList.remove("aboutUsRightBox");
    }


    var contactUsTitle = document.getElementById("contactUsTitle");
    var contactUsSubtitle = document.getElementById("contactUsSubtitle");
    var contactUsForm = document.getElementById("contactUsForm");

    if (sections[3].getBoundingClientRect().top < 250) {
        contactUsTitle.classList.add("contactUsTextAnimation");
        contactUsSubtitle.classList.add("contactUsTextAnimation");
        contactUsForm.classList.add("contactUsFormAnimation");
    }
    if (sections[3].getBoundingClientRect().top > 450) {
        contactUsTitle.classList.remove("contactUsTextAnimation");
        contactUsSubtitle.classList.remove("contactUsTextAnimation");
        contactUsForm.classList.remove("contactUsFormAnimation");
    }
});