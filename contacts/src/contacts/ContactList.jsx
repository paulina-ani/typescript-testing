import React from 'react'
import styles from './ContactList.module.css'
import ContactElement from './ContactElement'
import { withContacts } from './ContactsContext'

class ContactList extends React.Component {
    render() {
        const contacts = Object.values(this.props.contactsContext.contactsById)
        return (
            <div className={styles.root}>
                {contacts.length === 0 && (
                    <div className={styles.header}>
                        The contact list is empty
                    </div>
                )}
                {contacts.length > 0 && (
                    <div className={styles.header}>Your contacts</div>
                )}
                {contacts.map((contact, key) => (
                    <ContactElement contact={contact} key={key} />
                ))}
            </div>
        )
    }
}

export default withContacts(ContactList)
