export const fetchContacts = () => {
    const stored = localStorage.getItem('contacts')
    return stored ? JSON.parse(stored) : {}
}

export const storeContact = contact => {
    const storedContacts = fetchContacts()
    storedContacts[contact.id] = contact
    localStorage.setItem('contacts', JSON.stringify(storedContacts))
}
