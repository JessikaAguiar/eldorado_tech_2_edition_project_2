class Contact {
    constructor(id, name, email, telefone, status, type) {
        this._id = id
        this._name = name
        this._email = email
        this._fone = telefone
        this._status = status
        this._type = type
    }

    getId() {
        return this._id
    }

    getName() {
        return this._name
    }

    getEmail() {
        return this._email
    }

    getFone() {
        return this._fone
    }

    getStatus() {
        return this._status
    }

    getType() {
        return this._type
    }
}
