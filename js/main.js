function header () {
    const friend = document.getElementById("friends")
    const works = document.getElementById("works")
    const others = document.getElementById("others")

    friend.innerHTML = agenda.qtdFriends()
    works.innerHTML = agenda.qtdWork()
    others.innerHTML = agenda.qtdOther()
}
function initCard(contacts) {
    for (const contact of contacts) {
        let card = document.createElement('div')
        card.className = "card"
        card.style.width = "350px"
        card.style.margin = "10px"
        if(contact.getStatus() === "active") {
            card.style.backgroundColor = "#dda0dd"
        } else {
            card.style.backgroundColor = "#928b90"
        }

        const cardHeader = document.createElement('div')
        cardHeader.className = "card-header"
        cardHeader.innerHTML = contact.getName()
        card.appendChild(cardHeader)

        const cardBody = document.createElement('div')
        cardBody.className = "card-body"
        cardBody.innerHTML = `<p>Email: ${contact.getEmail()}</p> <p>Fone: ${contact.getFone()}</p>`
        card.appendChild(cardBody)

        const cardFooter = document.createElement('div')
        cardFooter.className = "card-footer"
        cardFooter.innerHTML =  contact.getType()
        card.appendChild(cardFooter)


        // const columnAction = document.createElement('td')
        // columnAction.innerHTML =
        //     `<button class='btn' onclick='openModal(${contact.getId()})'>
        //         <i class='fa-solid fa-eye'></i>
        //     </button>` +
        //     `<a href='../pages/forms-contact.html' class="btn" onclick='saveEditContactId(${contact.getId()})'>
        //         <i class='fa-solid fa-user-pen'></i>
        //     </a>` +
        //     `<button class='btn' onclick='removeContact(${contact.getId()})'>
        //         <i class="fa-solid fa-trash-can"></i>
        //     </button>`

        // line.appendChild(columnAction)

        main.appendChild(card)
    }
}
function initTable(contacts) {
    for (const contact of contacts) {
        let line = document.createElement('tr')

        const columnId = document.createElement('td')
        columnId.innerHTML = contact.getId()
        line.appendChild(columnId)

        const columnName = document.createElement('td')
        columnName.innerHTML = contact.getName()
        line.appendChild(columnName)

        const columnEmail = document.createElement('td')
        columnEmail.innerHTML = contact.getEmail()
        line.appendChild(columnEmail)

        const columnFone = document.createElement('td')
        columnFone.innerHTML = contact.getFone()
        line.appendChild(columnFone)

        const columnStatus = document.createElement('td')
        columnStatus.innerHTML = contact.getStatus()
        line.appendChild(columnStatus)

        const columnAction = document.createElement('td')
        columnAction.innerHTML =
            `<button class='btn' onclick='openModal(${contact.getId()})'>
                <i class='fa-solid fa-eye'></i>
            </button>` +
            `<a href='../pages/forms-contact.html' class="btn" onclick='saveEditContactId(${contact.getId()})'>
                <i class='fa-solid fa-user-pen'></i>
            </a>` +
            `<button class='btn' onclick='removeContact(${contact.getId()})'>
                <i class="fa-solid fa-trash-can"></i>
            </button>`

        line.appendChild(columnAction)

        bodyTable.appendChild(line)
    }
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
