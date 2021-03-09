/* First attemp to perform Object-oriented programming (OOP)

1) Function / Variable Names do describe what they do
2) As many Functions as Possible
3) First all possible functions then Variables then code

*/

var TotalCookies = 0        // Total amout of Cookies
var CookieMult = 1          // Total Cookie Multiplicator
var CookiesPerSec = 0       // Cookies per Second

var Cookie2Bought = 0
var Cookies2PerClick = 1000

var PriceBtn1 = 20
var PriceBtn2 = 60
var PriceBtn3 = 260
var PriceBtn4 = 660
var PriceCookie2Btn = 40000


var Cookie2MainBtnPrice = 40000

document.getElementById("PriceBtn1").style.color = "#8F0000";       // Change the color of the Price Tags
document.getElementById("PriceBtn2").style.color = "#8F0000";
document.getElementById("PriceBtn3").style.color = "#8F0000";
document.getElementById("PriceBtn4").style.color = "#8F0000";

var MultBtn1 = 0.5
var MultBtn2 = 1
var MultBtn3 = 2
var MultBtn4 = 4
var MultBtn5 = 1000



// Start of the Functions



// If main Cookie Clicked
function CookieClicked() {
    TotalCookies = TotalCookies + CookieMult

    UpdateTotalCookies()
    ChangePriceColor4in1()
}



// All of the functions when the buy Buttons are clicked
function Upgrade1Bought() {
    if (TotalCookies >= PriceBtn1) {                        // Check if the Player has enough Cookies
        TotalCookies = TotalCookies - PriceBtn1             // Extract the Cookies from this wallet
        MultBtn1 = MultBtn1 + 0.1
        CookieMult = CookieMult + MultBtn1                  // Increase the Multiplier for the cookie earning
        PriceBtn1 = PriceBtn1 * 1.8                        // Increase the rice for the cookie              
        document.getElementById("ShowCookiesPerClick").innerHTML = CookieMult.toFixed(1) + " Cookies Per Click"

        document.getElementById("PriceBtn1").innerHTML = "Price: " + PriceBtn1.toFixed(1)           // Change the Text for the button

        UpdateTotalCookies()
        UpdateBtns()
        ChangePriceColor4in1()
    }
    return TotalCookies, CookieMult, MultBtn1, PriceBtn1 // Return variables
}

function Upgrade2Bought() {
    if (TotalCookies >= PriceBtn2) {                        // Check if the Player has enough Cookies
        TotalCookies = TotalCookies - PriceBtn2             // Extract the Cookies from this wallet
        MultBtn2 = MultBtn2 + 0.2
        CookieMult = CookieMult + MultBtn2                  // Increase the Multiplier for the cookie earning
        PriceBtn2 = PriceBtn2 * 1.8                         // Increase the rice for the cookie               
        document.getElementById("ShowCookiesPerClick").innerHTML = CookieMult.toFixed(1) + " Cookies Per Click"

        document.getElementById("PriceBtn2").innerHTML = "Price: " + PriceBtn2.toFixed(1)          // Change the Text for the button

        UpdateTotalCookies()
        UpdateBtns()
        ChangePriceColor4in1()
    }
    return TotalCookies, CookieMult, MultBtn2, PriceBtn2 // Return variables
}

function Upgrade3Bought() {
    if (TotalCookies >= PriceBtn3) {                        // Check if the Player has enough Cookies
        TotalCookies = TotalCookies - PriceBtn3             // Extract the Cookies from this wallet
        MultBtn3 = MultBtn3 + 0.4
        CookieMult = CookieMult + MultBtn3                  // Increase the Multiplier for the cookie earning
        PriceBtn3 = PriceBtn3 * 1.8                        // Increase the rice for the cookie               
        document.getElementById("ShowCookiesPerClick").innerHTML = CookieMult.toFixed(1) + " Cookies Per Click"

        document.getElementById("PriceBtn3").innerHTML = "Price: " + PriceBtn3.toFixed(1)           // Change the Text for the button

        UpdateTotalCookies()
        UpdateBtns()
        ChangePriceColor4in1()
    }
    return TotalCookies, CookieMult, MultBtn3, PriceBtn3 // Return variables
}

function Upgrade4Bought() {
    if (TotalCookies >= PriceBtn4) {                        // Check if the Player has enough Cookies
        TotalCookies = TotalCookies - PriceBtn4             // Extract the Cookies from this wallet
        MultBtn4 = MultBtn4 + 0.8
        CookieMult = CookieMult + MultBtn4                    // Increase the Multiplier for the cookie earning
        PriceBtn4 = PriceBtn4 * 1.8                        // Increase the rice for the cookie        
        document.getElementById("ShowCookiesPerClick").innerHTML = CookieMult.toFixed(1) + " Cookies Per Click"

        document.getElementById("PriceBtn4").innerHTML = "Price: " + PriceBtn4.toFixed(1)           // Change the Text for the button

        UpdateTotalCookies()
        UpdateBtns()
        ChangePriceColor4in1()
        
    }
    return TotalCookies, CookieMult, MultBtn4, PriceBtn4 // Return variables
}




// Change the text on the Buttons
function UpdateBtns() {
    var CookieMultText = (CookieMult + (MultBtn1 * 1.1))                                        // Predict the Future Price for the Upgrade
    document.getElementById("BtnOne").innerHTML = "Next Upgrade Multiplier = " + CookieMultText.toFixed(1)

    var CookieMultText = (CookieMult + (MultBtn2 * 1.1))                                        // Predict the Future Price for the Upgrade
    document.getElementById("BtnTwo").innerHTML = "Next Upgrade Multiplier = " + CookieMultText.toFixed(1)

    var CookieMultText = (CookieMult + (MultBtn3 * 1.1))                                        // Predict the Future Price for the Upgrade
    document.getElementById("BtnThree").innerHTML = "Next Upgrade Multiplier = " + CookieMultText.toFixed(1)

    var CookieMultText = (CookieMult + (MultBtn4 * 1.1))                                        // Predict the Future Price for the Upgrade
    document.getElementById("BtnFour").innerHTML = "Next Upgrade Multiplier = " + CookieMultText.toFixed(1)
}


// Update the total Cookies shown
function UpdateTotalCookies() {
    document.getElementById("ShowCookieNumber").innerHTML = TotalCookies.toFixed(1) + " Cookies"
    if (Cookie2Bought >= 2) {
        document.getElementById("ShowCookie2Number").innerHTML = TotalCookies.toFixed(1) + " Cookies"
    }
}

// Change the color of the Price tag. 
function ChangePriceColor(PriceInBtn, IdOfText) {
    if (TotalCookies >= PriceInBtn){
        document.getElementById(IdOfText).style.color = "#00ff00";
    } else {
        document.getElementById(IdOfText).style.color = "#8F0000";
    }
}

function ChangePriceColor4in1() {               // everytime soomething is made, execute this funciton
    ChangePriceColor(PriceBtn1, "PriceBtn1")    // Changes all of the price tags
    ChangePriceColor(PriceBtn2, "PriceBtn2")
    ChangePriceColor(PriceBtn3, "PriceBtn3")
    ChangePriceColor(PriceBtn4, "PriceBtn4")

    ChangePriceColor(PriceBtn4, "PriceBtn4")    // Colors for the next cookie
    ChangePriceColor(PriceBtn4, "PriceBtn4")
}


var Cookie2div = document.createElement("div")
Cookie2div.setAttribute("id", "CookieArea2")

var Cookie2img = document.createElement("img")
Cookie2img.setAttribute("src", "MainCookie.png")
Cookie2img.setAttribute("alt", "Second Cookie")
Cookie2img.setAttribute("src", "MainCookie.png")
Cookie2img.setAttribute("width", "200")
Cookie2img.setAttribute("height", "200")
Cookie2img.setAttribute("id", "SecondCookie")
Cookie2img.setAttribute("onclick", "NextCookieClicked()")
Cookie2div.appendChild(Cookie2img)

var ShowCookie2Number = document.createElement("p")
ShowCookie2Number.setAttribute("id", "ShowCookie2Number")
ShowCookie2Number.innerHTML = TotalCookies + " Cookies"
Cookie2div.appendChild(ShowCookie2Number)

var ShowCookies2PerClick = document.createElement("p")
ShowCookies2PerClick.setAttribute("id", "ShowCookies2PerClick")
ShowCookies2PerClick.innerHTML = "1000.0 Cookies Per Click"
Cookie2div.appendChild(ShowCookies2PerClick)

var UpgradeCookie2MainBtn = document.createElement("button")
UpgradeCookie2MainBtn.setAttribute("id", "ShopCookie2Btn")
UpgradeCookie2MainBtn.setAttribute("class", "ShopCookie2Btn")
UpgradeCookie2MainBtn.setAttribute("onclick", "UpgradeCookie2Main()")
UpgradeCookie2MainBtn.innerHTML = "Cookies Per Click + 1000"

var UpgradeCookie2MainLabel = document.createElement("p")
UpgradeCookie2MainLabel.setAttribute("class", "inline")
UpgradeCookie2MainLabel.setAttribute("id", "UpgradeCookie2MainLabel")
UpgradeCookie2MainLabel.innerHTML = "Price: 40000"


function NextCookie() {
    if (TotalCookies >= 10000) {
        TotalCookies = TotalCookies - 10000
        document.body.appendChild(Cookie2div);
        Cookie2Bought = 2

        document.getElementById("BtnNextCookie").remove();          // Removes the two Buttons
        document.getElementById("NextCookieLabel").remove();        // after Purchase

        document.getElementById("UpgradeClickerBtn").appendChild(UpgradeCookie2MainBtn);
        document.getElementById("UpgradeClickerBtn").appendChild(UpgradeCookie2MainLabel);
    }
    return Cookie2Bought
}

function NextCookieClicked() {
    TotalCookies = TotalCookies + Cookies2PerClick
    UpdateTotalCookies()

    ChangePriceColor4in1()
}

function UpgradeCookie2Main() {

    if (TotalCookies >= PriceCookie2Btn) {
        TotalCookies = TotalCookies - PriceCookie2Btn
        Cookies2PerClick = Cookies2PerClick + MultBtn5

        MultBtn5 = MultBtn5 * 1.05
        PriceCookie2Btn = PriceCookie2Btn * 1.1

        document.getElementById("ShowCookies2PerClick").innerHTML = Cookies2PerClick.toFixed(1) + " Cookies Per Click"

        UpdateTotalCookies()
        
    }
    return TotalCookies, PriceCookie2Btn
}



/*function CookiesPerSecond() {    
    setTimeout(function() {
        for (i = 0; i <= 5; i++) {
            TotalCookies = TotalCookies + CookiesPerSec;
            document.getElementById("ShowCookieNumber").innerHTML = TotalCookies.toFixed(1) + " Cookies";
            console.log(CookiesPerSec);
            console.log(i)
        }
    }, 2000) 
}

CookiesPerSecond()*/