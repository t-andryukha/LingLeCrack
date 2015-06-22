/*
 1.Clear cache, open web browser, open any html page without javascript(for more reliability)
 for example: http://www.this-page-intentionally-left-blank.org/
 2.Paste into browser console and type enter next part:
 */
var jq2 = document.createElement('script');
jq2.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq2);
/*
 3. change constants as you need
 */
var botsNeededCount = 100;
var login = "tarandex";
/*
 4.Set your invitation url
 */
var invitationUrl = "http://lingualeo.com/ru/r/98dklm";
/*
 5. Paste remaining part of script and don't close this tab
 */
logOutBot();
var accountId = 1;
var botsCreatedCount = 0;
var timeout = 2000;
var logOutTimeout = 360000;

function logOutBot() {
    console.log("logOutBot");
    $.ajax({
        type: 'GET',
        url: "http://lingualeo.com/logout",
        async: true,
        xhrFields: {
            withCredentials: true
        },
        complete: function () {
            console.log("logout complete");
            setTimeout(getInvitationPage, timeout);
        }
    });
}

function getInvitationPage() {
    console.log("getInvitationPage");
    $.ajax({
        type: 'GET',
        url: invitationUrl,
        async: true,
        xhrFields: {
            withCredentials: true
        },
        complete: function () {
            console.log("invitation page complete");
            if (botsCreatedCount < botsNeededCount) {
                setTimeout(registerBot, timeout);
            }
        }
    });
}


function registerBot() {
    accountId++;
    var email = login + accountId + "@mail.ru";
    console.log("registering bot: " + email);
    $.ajax({
        type: 'POST',
        url: "http://lingualeo.com/ru/register",
        data: {r_email: email, r_password: 'fdsa69675734'},
        xhrFields: {
            withCredentials: true
        },
        async: true,
        complete: function () {
            console.log('registration complete');
            botsCreatedCount++;
            setTimeout(logOutBot, logOutTimeout);
        }
    });
}