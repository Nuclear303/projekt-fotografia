function sendEmail(){
    let imie = document.querySelector("input[name='name']").value;
    let nazwisko = document.querySelector("input[name='last-name']").value;
    let email = document.querySelector("input[name='e-mail']").value;
    let telefon = document.querySelector("input[name='phone']").value;
    let wiadomosc = document.querySelector("textarea").value;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "witoldsrutakontakt@gmail.com",
        Password : "FF5A94D1BF4900DA5A95941B77E5DD5F1BF4",
        To : 'witoldsrutakontakt@gmail.com',
        From : "witoldsrutakontakt@gmail.com",
        Subject : "Wiadomość ze strony",
        Body : `Imię:${imie} <br>
                Nazwisko: ${nazwisko}<br>
                E-mail: ${email}<br>
                Numer telefonu:${telefon}<br>
                Wiadomość:${wiadomosc}
                `
    }).then(
        message => alert("Dziękujemy za zgłoszenie :)")
    );
    
}