/* First attemp to perform Object-oriented programming (OOP)

1) Function / Variable Names do describe what they do
2) As many Functions as Possible
3) First all possible functions then Variables then code

*/


var TotalCookies = 0        // Total amout of Cookies
var CookieMult = 1          // Total Cookie Multiplicator
var CookiesPerSec = 0       // Cookies per Second

var PriceBtn1 = 10
var PriceBtn2 = 40
var PriceBtn3 = 200
var PriceBtn4 = 500

var MultBtn1 = 1
var MultBtn2 = 2
var MultBtn3 = 4
var MultBtn4 = 8


function CookieClicked() {
    TotalCookies = TotalCookies + CookieMult
    document.getElementById("ShowCookieNumber").innerHTML = TotalCookies.toFixed(1) + " Cookies"
}


function Upgrade1Bought() {
    if (TotalCookies >= PriceBtn1) {                        // Check if the Player has enough Cookies
        TotalCookies = TotalCookies - PriceBtn1             // Extract the Cookies from this wallet
        MultBtn4 = MultBtn1 * 1.1
        CookieMult = CookieMult + MultBtn1                  // Increase the Multiplier for the cookie earning
        PriceBtn1 = PriceBtn1 * 1.75                        // Increase the rice for the cookie
        document.getElementById("ShowCookieNumber").innerHTML = TotalCookies.toFixed(1) + " Cookies"                
        document.getElementById("ShowCookiesPerClick").innerHTML = CookieMult.toFixed(1) + " Cookies Per Click"

        document.getElementById("PriceBtn1").innerHTML = "Price: " + PriceBtn1.toFixed(1)           // Change the Text for the button

        var CookieMultText = (CookieMult + (MultBtn1 * 1.1))                                        // Predict the Future Price for the Upgrade
        document.getElementById("BtnOne").innerHTML = "Next Upgrade Multiplier = " + CookieMultText.toFixed(1)
    }
    return TotalCookies, CookieMult, MultBtn1, PriceBtn1 // Return variables
}

function Upgrade2Bought() {
    if (TotalCookies >= PriceBtn2) {                        // Check if the Player has enough Cookies
        TotalCookies = TotalCookies - PriceBtn2             // Extract the Cookies from this wallet
        MultBtn2 = MultBtn2 * 1.1
        CookieMult = CookieMult + MultBtn2                  // Increase the Multiplier for the cookie earning
        PriceBtn2 = PriceBtn2 * 1.75                        // Increase the rice for the cookie
        document.getElementById("ShowCookieNumber").innerHTML = TotalCookies.toFixed(1) + " Cookies"                
        document.getElementById("ShowCookiesPerClick").innerHTML = CookieMult.toFixed(1) + " Cookies Per Click"

        document.getElementById("PriceBtn2").innerHTML = "Price: " + PriceBtn2.toFixed(1)           // Change the Text for the button

        var CookieMultText = (CookieMult + (MultBtn2 * 1.1))                                        // Predict the Future Price for the Upgrade
        document.getElementById("BtnTwo").innerHTML = "Next Upgrade Multiplier = " + CookieMultText.toFixed(1)
    }
    return TotalCookies, CookieMult, MultBtn2, PriceBtn2 // Return variables
}

function Upgrade3Bought() {
    if (TotalCookies >= PriceBtn3) {                        // Check if the Player has enough Cookies
        TotalCookies = TotalCookies - PriceBtn3             // Extract the Cookies from this wallet
        MultBtn3 = MultBtn3 * 1.1
        CookieMult = CookieMult + MultBtn3                  // Increase the Multiplier for the cookie earning
        PriceBtn3 = PriceBtn3 * 1.75                        // Increase the rice for the cookie
        document.getElementById("ShowCookieNumber").innerHTML = TotalCookies.toFixed(1) + " Cookies"                
        document.getElementById("ShowCookiesPerClick").innerHTML = CookieMult.toFixed(1) + " Cookies Per Click"

        document.getElementById("PriceBtn3").innerHTML = "Price: " + PriceBtn3.toFixed(1)           // Change the Text for the button

        var CookieMultText = (CookieMult + (MultBtn3 * 1.1))                                        // Predict the Future Price for the Upgrade
        document.getElementById("BtnThree").innerHTML = "Next Upgrade Multiplier = " + CookieMultText.toFixed(1)
    }
    return TotalCookies, CookieMult, MultBtn3, PriceBtn3 // Return variables
}

function Upgrade4Bought() {
    if (TotalCookies >= PriceBtn4) {                        // Check if the Player has enough Cookies
        TotalCookies = TotalCookies - PriceBtn4             // Extract the Cookies from this wallet
        MultBtn4 = MultBtn4 * 1.1
        CookieMult = CookieMult + MultBtn4                    // Increase the Multiplier for the cookie earning
        PriceBtn4 = PriceBtn4 * 1.75                        // Increase the rice for the cookie
        document.getElementById("ShowCookieNumber").innerHTML = TotalCookies.toFixed(1) + " Cookies"                
        document.getElementById("ShowCookiesPerClick").innerHTML = CookieMult.toFixed(1) + " Cookies Per Click"

        document.getElementById("PriceBtn4").innerHTML = "Price: " + PriceBtn4.toFixed(1)           // Change the Text for the button

        var CookieMultText = (CookieMult + (MultBtn4 * 1.1))                                        // Predict the Future Price for the Upgrade
        document.getElementById("BtnFour").innerHTML = "Next Upgrade Multiplier = " + CookieMultText.toFixed(1)
    }
    return TotalCookies, CookieMult, MultBtn4, PriceBtn4 // Return variables
}

