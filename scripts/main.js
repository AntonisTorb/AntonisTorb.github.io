let r = document.querySelector(':root');
    let rs = getComputedStyle(r)
    
    function lightmode(){
        r.style.setProperty("--mainTextColor", rs.getPropertyValue("--mainTextColor-light"));
        r.style.setProperty("--secondaryTextColor", rs.getPropertyValue("--secondaryTextColor-light"));
        r.style.setProperty("--mainLinkColor", rs.getPropertyValue("--mainLinkColor-light"));
        r.style.setProperty("--mainBorderColor", rs.getPropertyValue("--mainBorderColor-light"));
        r.style.setProperty("--mainBgColor", rs.getPropertyValue("--mainBgColor-light"));
        r.style.setProperty("--secondaryBgColor", rs.getPropertyValue("--secondaryBgColor-light"));
        document.getElementById("dark").style.setProperty("background-color", rs.getPropertyValue("--mainBgColor"))
        document.getElementById("light").style.setProperty("background-color", rs.getPropertyValue("--mainBorderColor"))
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
    }