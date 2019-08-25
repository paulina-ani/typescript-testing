import React from 'react'
import styles from './ContactElement.module.css'

function ContactElement(props) {
    const { contact } = props
    return (
        <div className={styles.root}>
            <div className={styles.name}>
                {contact.firstName + ' ' + contact.lastName}
            </div>
            <div className={styles.details}>
                {contact.phoneNumber && (
                    <div>
                        <span className={styles.key}>Tel.: </span>
                        <span className={styles.value}>
                            {contact.phoneNumber}
                        </span>
                    </div>
                )}
                {contact.email && (
                    <div>
                        <span className={styles.key}>E-mail: </span>
                        <span className={styles.value}>{contact.email}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ContactElement
