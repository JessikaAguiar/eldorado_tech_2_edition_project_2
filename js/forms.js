const agenda = new Agenda()
const save = document.getElementById("save")
const edit = document.getElementById("edit")
const name = document.getElementById("name")
const email = document.getElementById("email")
const fone = document.getElementById("fone")
const status = document.getElementById("status")
const type = document.getElementById("type")
const saveOrEdit = localStorage.getItem('editContactId')
const id = JSON.parse(saveOrEdit)
header()

if(saveOrEdit) {
    save.style.display = "none"
    initEdit(id)
} else {
    edit.style.display = "none"
    const formSelectStatus = document.getElementById("formSelectStatus")
    formSelectStatus.style.display = "none"

}

function saveContact() {
    const id = getNewId()
    let newContact = new Contact(
        id,
        name.value,
        email.value,
        fone.value,
        "active",
        type.value,
    )
    agenda.saveContact(newContact)
    window.location.href = '../index.html'
}
function getNewId() {
    let contacts = agenda.listarContactAll()
    return contacts.length + 1
}
function initEdit(id) {
    const contact = agenda.buscarContactId(id)
    name.value = contact.getName()
    email.value = contact.getEmail()
    fone.value = contact.getFone()
    status.value = contact.getStatus()
    type.value = contact.getType()
}
function editContact() {
    let editContact = new Contact(
        id,
        name.value,
        email.value,
        fone.value,
        status.value,
        type.value
    )
    agenda.editContact(editContact)
    window.location.href = '../index.html'
}
