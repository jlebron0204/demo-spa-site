$(document).ready(function(){
    
    
    
    $("#learn-more-skin").click(function(){
        $("#modal-title").text("Skin Care");
        
        $("#modal-text").html("<table class='table table-striped'><thead><tr><th>Service</th><th>Price</th></tr></thead><tbody><tr><td>Sircuit Facials</td><td>$32.00 – $54.00</td></tr> <tr><td>Teen Facial</td><td>$32.00 – $54.00</td></tr> <tr><td>Cranberry Crush</td><td>$67.00 – $97.00</td></tr> <tr><td>Double Trouble</td><td>$67.00 – $97.00</td></tr> <tr><td>Vacation</td><td>$67.00 – $97.00</td></tr></tbody></table>");
    });
    
    
    $("#learn-more-massage").click(function(){
        $("#modal-title").text("Massage");
        
        $("#modal-text").html("<table class='table table-striped'><thead><tr><th>Service</th><th>Length</th><th>Price</th></tr></thead><tbody> <tr><td>Relaxation Spa Massage</td><td>50 min</td><td>$62.00 – $74.00</td></tr> <tr><td>Deep Tissue Massage</td><td>50 min</td><td>$72.00 – $84.00</td></tr> <tr><td>Warm Stone Massage</td><td>50 min</td><td>$96.00 – $105.00</td></tr> <tr><td>Aromatherapy Massage</td><td>50 min</td><td>$68.00 – $79.00</td></tr> <tr><td>Neck, Shoulder, & Back Massage</td><td>25 min</td><td>$47.00 – $62.00</td></tr></tbody></table>");
    });
    
    
    $("#learn-more-waxing").click(function(){
        $("#modal-title").text("Waxing");
        
        $("#modal-text").html("<table class='table table-striped'><thead><tr><th>Service</th><th>Price</th></tr></thead><tbody><tr><td>Eyebrows</td><td>$9.00 – $18.00</td></tr> <tr><td>Lip</td><td>$6.00 – $14.00</td></tr> <tr><td>Chin</td><td>$6.00 – $18.00</td></tr> <tr><td>Full Face</td><td>$28.00 – $52.00</td></tr><tr><td>Bikini (Sides)</td><td>$32.00 – $52.00</td></tr><tr><td>Under Arms</td><td>$17.00 – $37.00</td></tr><tr><td>Brazilian</td><td>$47.00 – $77.00</td></tr><tr><td>Half Leg</td><td>$42.00 – $62.00</td></tr><tr><td>Full Leg</td><td>$72.00 – $92.00</td></tr></tbody></table>");
    });
    
    
    $("#learn-more-tanning").click(function(){
        $("#modal-title").text("Tanning");
        
        $("#modal-text").html("<table class='table table-striped'><thead><tr><th>Service</th><th>Price</th></tr></thead><tbody><tr><td>Pura Sunless Tanning</td><td>$62.00 – $78.00</td></tr> <tr><td>Spray Tanning</td><td>$46.00 – $64.00</td></tr> <tr><td>Tanning Bed</td><td>$36.00 – $48.00</td></tr></tbody></table>");
    });
    
//API Key AIzaSyBDXNNcm7dF5DArgkHFgA4BmEJLr4wZpqs    

//    
//var XHR = new XMLHttpRequest();    
//    
//    XHR.onreadystatechange = function(){
//        if(XHR.readyState == 4 && XHR.status == 200) {
//            var url = JSON.parse(XHR.responseText);
//            
//            console.log(url);
//            
//        }
//    }
//        
//    XHR.open("GET", "https://data.energystar.gov/resource/8bjc-dg2y.json?energy_star_partner=SATCO/NUVO");
//    XHR.send();        
//    
    
    
}); //document ready function ends