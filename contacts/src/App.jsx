import React from 'react'
import styles from './App.module.css'
import ContactList from './contacts/ContactList'
import ContactForm from './contacts/ContactForm'
import ContactsContextProvider from './contacts/ContactsContext'

function App() {
    return (
        <ContactsContextProvider>
            <div className={styles.root}>
                <div className={styles.form}>
                    <ContactForm />
                </div>
                <div className={styles.list}>
                    <ContactList />
                </div>
            </div>
        </ContactsContextProvider>
    )
}

export default App
