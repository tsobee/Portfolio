$(document).ready(function () {

    sendEmail();

    function sendEmail(tema, sadrzaj) {
        window.open(`strugarevic.alekssa@gmail.com?subject=${tema}&body=${sadrzaj}`);
    }
})