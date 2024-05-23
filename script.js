const form = document.querySelector("form");
const nome = document.getElementById("nom");
const emaile = document.getElementById("email");
const numeroe = document.getElementById("numero");
const messagee = document.getElementById("Message");
const sujet = document.getElementById("sujet");

function envoyermail() {
    const bodymessage = 'nom_compte: ${nome.value}<br>  Email: ${emaile.value}<br> Numerophone: ${numeroe.value}<br>   Message: ${messagee.value}<br>';


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mauricemiema90@gmail.com",
        Password : "490E3B33247C180F747ED5FA2C4D10594A96",
        To : 'mauricemiema90@gmail.com',
        From : "mauricemiema90@gmail.com",
        Subject : sujet.value,
        Body : bodymessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    envoyermail()
})


document.addEventListener('DOMContentLoaded', (event) => {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });

    // Optional: Close the menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.add('hidden');
        }
    });
});

