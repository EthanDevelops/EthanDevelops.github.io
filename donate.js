var donateButton = document.getElementById('donateButton')
var amount = document.getElementById('amount').value

function donate() {
    donateButton.onclick(() => {
        var url = ('https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=8E6YRAYW977NU&currency_code=USD&amount=' + amount)
        console.log(url)
    })
}