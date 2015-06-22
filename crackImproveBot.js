/*
 6. Open lingualeo page in new tab in the same browser
 e.g. https://lingualeo.com/ru/dashboard
 7. paste to the browser console next script
 8.it is better to close browser consoles then
 */

improveBotLevel();

var content_id = 387300;

function improveBotLevel() {
    var contentsCountToLearn = 100;
    var alreadyLearnt = 0;
    console.log("telling bot to learn smth");
    setTimeout(function () {
        setPageLearnt();
        alreadyLearnt++;
        console.log("bot learnt " + alreadyLearnt + " contents");
        if (alreadyLearnt == contentsCountToLearn) {
            console.log("bot has been improved");
            content_id = 387300;
            alreadyLearnt = 0;
        }
    }, 11000);
}

function setPageLearnt() {
    content_id--;
    console.log("bot  is learning content id: " + content_id);
    $.ajax({
        type: 'POST',
        url: "http://lingualeo.com/content/setpagelearned",
        data: {page: 1, content_id: content_id},
        async: true,
        xhrFields: {
            withCredentials: true
        },
        complete: function () {
            console.log('success');
            improveBotLevel();
        }
    });
}


