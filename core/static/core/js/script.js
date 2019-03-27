$(document).ready(function() {
    $('.logo').click(function() {
        document.getElementById("logo").scrollIntoView({behavior: "smooth"});
        return false;
    });

    $('.about').click(function() {
        document.getElementById("about").scrollIntoView({behavior: "smooth"});
        return false;
    });
    $('.podcast').click(function() {
        document.getElementById("podcast").scrollIntoView({behavior: "smooth"});
        return false;
    });
    $('.lambe-lambes').click(function() {
        document.getElementById("lambe-lambes").scrollIntoView({behavior: "smooth"});
        return false;
    });
    $('.contact').click(function() {
        document.getElementById("contact").scrollIntoView({behavior: "smooth"});
        return false;
    });

});
