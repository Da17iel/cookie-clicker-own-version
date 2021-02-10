var TotalCookies = 0        // Total amout of Cookies
var CookieMult = 1          // Cookie Multiplier


function CookieClicked() {
    TotalCookies = TotalCookies + CookieMult
    document.getElementById("ShowCookieNumber").innerHTML = TotalCookies + " Cookies"
    console.log(TotalCookies)
}


function Upgrade1Bought() {
    if (TotalCookies >= 10); {
        TotalCookies = TotalCookies - 10
        CookieMult = CookieMult + 1
        document.getElementById("ShowCookieNumber").innerHTML = TotalCookies + " Cookies"
    }
    return TotalCookies, CookieMult
}