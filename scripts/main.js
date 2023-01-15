let r = document.querySelector(':root');
let rs = getComputedStyle(r)

function tabSwitch(evt, tab){
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none"
    }

    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace("active", "");
        tablinks[i].style.setProperty("background-color", rs.getPropertyValue("--mainBorderColor"));
    }

    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
    evt.currentTarget.style.setProperty("background-color", rs.getPropertyValue("--activeTabColor"));
}

function updateTabOnModeChange(){
    let tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++){
        tablinks[i].style.setProperty("background-color", rs.getPropertyValue("--mainBorderColor"));
    }
    document.getElementsByClassName("active")[0].style.setProperty("background-color", rs.getPropertyValue("--activeTabColor"));
}

function lightmode(){
    r.style.setProperty("--mainTextColor", rs.getPropertyValue("--mainTextColor-light"));
    r.style.setProperty("--secondaryTextColor", rs.getPropertyValue("--secondaryTextColor-light"));
    r.style.setProperty("--mainLinkColor", rs.getPropertyValue("--mainLinkColor-light"));
    r.style.setProperty("--mainBorderColor", rs.getPropertyValue("--mainBorderColor-light"));
    r.style.setProperty("--mainBgColor", rs.getPropertyValue("--mainBgColor-light"));
    r.style.setProperty("--secondaryBgColor", rs.getPropertyValue("--secondaryBgColor-light"));
    document.getElementById("dark").style.setProperty("background-color", rs.getPropertyValue("--mainBgColor"))
    document.getElementById("light").style.setProperty("background-color", rs.getPropertyValue("--mainBorderColor"))
    updateTabOnModeChange();
}

function darkmode(){
    r.style.setProperty("--mainTextColor", rs.getPropertyValue("--mainTextColor-dark"));
    r.style.setProperty("--secondaryTextColor", rs.getPropertyValue("--secondaryTextColor-dark"));
    r.style.setProperty("--mainLinkColor", rs.getPropertyValue("--mainLinkColor-dark"));
    r.style.setProperty("--mainBorderColor", rs.getPropertyValue("--mainBorderColor-dark"));
    r.style.setProperty("--mainBgColor", rs.getPropertyValue("--mainBgColor-dark"));
    r.style.setProperty("--secondaryBgColor", rs.getPropertyValue("--secondaryBgColor-dark"));
    document.getElementById("light").style.setProperty("background-color", rs.getPropertyValue("--mainBgColor"))
    document.getElementById("dark").style.setProperty("background-color", rs.getPropertyValue("--mainBorderColor"))
    updateTabOnModeChange();
}

window.onload = function(){
    document.getElementById("tab--main").click()
}