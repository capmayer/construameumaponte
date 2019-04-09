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

    $('.f0').click(function() {
      document.getElementById("f0").hidden = false;
      document.getElementById("f1").hidden = true;
      document.getElementById("f2").hidden = true;
      document.getElementById("f3").hidden = true;
      document.getElementById("f4").hidden = true;
      document.getElementById("f5").hidden = true;
    });
    $('.f1').click(function() {
      document.getElementById("f0").hidden = true;
      document.getElementById("f1").hidden = false;
      document.getElementById("f2").hidden = true;
      document.getElementById("f3").hidden = true;
      document.getElementById("f4").hidden = true;
      document.getElementById("f5").hidden = true;
    });
    $('.f2').click(function() {
      document.getElementById("f0").hidden = true;
      document.getElementById("f1").hidden = true;
      document.getElementById("f2").hidden = false;
      document.getElementById("f3").hidden = true;
      document.getElementById("f4").hidden = true;
      document.getElementById("f5").hidden = true;
    });
    $('.f3').click(function() {
      document.getElementById("f0").hidden = true;
      document.getElementById("f1").hidden = true;
      document.getElementById("f2").hidden = true;
      document.getElementById("f3").hidden = false;
      document.getElementById("f4").hidden = true;
      document.getElementById("f5").hidden = true;
    });
    $('.f4').click(function() {
      document.getElementById("f0").hidden = true;
      document.getElementById("f1").hidden = true;
      document.getElementById("f2").hidden = true;
      document.getElementById("f3").hidden = true;
      document.getElementById("f4").hidden = false;
      document.getElementById("f5").hidden = true;
    });
    $('.f5').click(function() {
      document.getElementById("f0").hidden = true;
      document.getElementById("f1").hidden = true;
      document.getElementById("f2").hidden = true;
      document.getElementById("f3").hidden = true;
      document.getElementById("f4").hidden = true;
      document.getElementById("f5").hidden = false;
    });
});
