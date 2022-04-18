localStorage.removeItem('editContactId')
const agenda = new Agenda()
agenda.initAgenda()
const main = document.getElementById("main-contacts")
const contacts = agenda.listarContactAll()
const search = document.getElementById("search")

initCard(contacts)
header()

function filterTableName() {
    let filter, card, cardbody, i, txtValue
    filter = search.value.toUpperCase()
    card = main.querySelectorAll(".card")
    for (i = 0; i < card.length; i++) {
        cardbody = card[i].querySelector(".card-header")
        if (cardbody) {
            txtValue =  cardbody.textContent || cardbody.innerText
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                card[i].style.display = ""
            } else {
                card[i].style.display = "none";
            }
        }
    }
}
