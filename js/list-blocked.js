localStorage.removeItem('editContactId')
const agenda = new Agenda()
agenda.initAgenda()
const bodyTable = document.getElementById("body-contacts")
const modal = document.getElementById("modal")
const search = document.getElementById("search")
const contacts = agenda.listarContactBlocked()
initTable(contacts)
header()

function openModal(id) {
    modal.style.display = "block"
    const contact = agenda.buscarContactId(id)
    const name = document.getElementById("nameValue")
    const email = document.getElementById("emailValue")
    const fone = document.getElementById("foneValue")
    const status = document.getElementById("statusValue")

    name.innerHTML = contact._name
    email.innerHTML = contact._email
    fone.innerHTML = contact._fone
    status.innerHTML = contact._status
}
function closeModal() {
    modal.style.display = "none"
}
function saveEditContactId(id) {
    const saveId = JSON.parse(id)
    localStorage.setItem('editContactId', saveId)
}
function removeContact(id) {
    agenda.removerContact(id)
    document.location.reload(true)
}
function filterTableName() {
    let filter, tr, td, i, txtValue
    filter = search.value.toUpperCase()
    tr = bodyTable.getElementsByTagName("tr")
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1]
        if (td) {
            txtValue = td.textContent || td.innerText
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = ""
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
