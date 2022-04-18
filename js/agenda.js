class Agenda {
    constructor() {
        this._contacts = []
    }

    initAgenda() {
        if(!localStorage.getItem('contactList')) {
            const names = [
                "jessika",
                "ericton",
                "apollo",
                "joão vinicius",
                "maria",
                "joão carlos",
                "henrique",
                "thati",
                "pedro",
                "arthur",
                "damarys",
                "jose",
                "bianca",
                "bernardo",
                "fernando",
                "fernanda",
                "lucia",
                "atena",
                "thor",
                "paula",
                "paulo"
            ]
            let status = ["active","block"]
            let type = ["friend", "work", "other"]
            let fone = []
            for (let i = 0 ; i < 20 ; i++) {
                for (let x = 0; x < 8 ; x++) {
                    fone[x] = getRandomInt(1, 9)
                }
                this._contacts.push(new Contact(
                    i,
                    names[i],
                    `${names[i]}@gmail.com`,
                    `${fone.join('')}`,
                    `${status[getRandomInt(0,1)]}`,
                    `${type[getRandomInt(0,2)]}`
                ))
            }
            localStorage.setItem("contactList", JSON.stringify(this._contacts))
        }
  }

    saveContact(newContact) {
        if (newContact instanceof Contact) {
            this._contacts.push(newContact)
            localStorage.setItem("contactList", JSON.stringify(this._contacts))
        }
    }

    editContact(editContact) {
        if (editContact instanceof Contact) {
           this._contacts = this._contacts.map(contact => {
                if(contact.getId() === editContact.getId()) {
                    return editContact
                }
                return contact
            })
            localStorage.setItem("contactList", JSON.stringify(this._contacts))
        }
    }

    listarContactAll() {
        let contacts = localStorage.getItem("contactList")
        let contactClass = JSON.parse(contacts)
        this._contacts = contactClass.map(
            contact => new Contact(
                contact._id,
                contact._name,
                contact._email,
                contact._fone,
                contact._status,
                contact._type)
        )
        return [...this._contacts]
    }

    listarContactActive() {
        let contacts = localStorage.getItem("contactList")
        let contactClass = JSON.parse(contacts)
        const result = contactClass.filter(contact => {
            if (contact._status === "active") {
                return contact
            }
        })
        this._contacts = result.map(
           contact => new Contact(
               contact._id,
               contact._name,
               contact._email,
               contact._fone,
               contact._status,
               contact._type)
        )
        return [...this._contacts]
    }

    listarContactBlocked() {
        let contacts = localStorage.getItem("contactList")
        let contactClass = JSON.parse(contacts)
        const result = contactClass.filter(contact => {
            if (contact._status === "block") {
                return contact
            }
        })
        this._contacts = result.map(
            contact => new Contact(
                contact._id,
                contact._name,
                contact._email,
                contact._fone,
                contact._status,
                contact._type)
        )
        return [...this._contacts]
    }

    removerContact(id) {
        this._contacts = this._contacts.filter(contact => contact.getId() != id)
        localStorage.setItem("contactList", JSON.stringify(this._contacts))
    }

    buscarContactId(id) {
        let listContacts = this.listarContactAll()
        let result = listContacts.find(contact => {
            if(contact.getId() === id) {
                return contact
            }
        })
        return result
    }

    qtdFriends() {
        const contacts = this.listarContactAll()
        const friend = contacts.filter( contact => contact.getType() === "friend")
        return friend.length
    }

    qtdWork() {
        const contacts = this.listarContactAll()
        const work = contacts.filter( contact => contact.getType() === "work")
        return work.length
    }

    qtdOther() {
        const contacts = this.listarContactAll()
        const other = contacts.filter( contact => contact.getType() === "other")
        return other.length
    }

}
