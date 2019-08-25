import React from 'react'
import styles from './ContactForm.module.css'
import { storeContact } from './contactActions'
import { withContacts } from './ContactsContext'
import uuid from 'uuid'

class ContactForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        errorMessage: ''
    }

    resetForm = () => {
        this.setState({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            errorMessage: ''
        })
    }

    handleFirstNameChange = e => {
        this.setState({
            firstName: e.currentTarget.value
        })
    }

    handleLastNameChange = e => {
        this.setState({
            lastName: e.currentTarget.value
        })
    }

    handlePhoneNumberChange = e => {
        this.setState({
            phoneNumber: e.currentTarget.value
        })
    }

    handleEmailChange = e => {
        this.setState({
            email: e.currentTarget.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.formIsValid()) {
            const { firstName, lastName, phoneNumber, email } = this.state
            const contact = {
                id: uuid(),
                firstName,
                lastName,
                phoneNumber,
                email
            }
            try {
                storeContact(contact)
                this.props.contactsContext.addContact(contact)
                this.resetForm()
            } catch (e) {
                this.setErrorMessage()
            }
        } else {
            this.setErrorMessage()
        }
    }

    formIsValid = () => {
        const { firstName, lastName } = this.state
        return !!firstName && !!lastName
    }

    setErrorMessage = () => {
        this.setState({
            errorMessage: 'Could not save a contact.'
        })
    }

    render() {
        const {
            firstName,
            lastName,
            phoneNumber,
            email,
            errorMessage
        } = this.state
        return (
            <div className={styles.root}>
                {errorMessage && <div>{errorMessage}</div>}
                <form>
                    <div className={styles.label}>First name:</div>
                    <input
                        className={styles.input}
                        autoFocus={true}
                        onChange={this.handleFirstNameChange}
                        value={firstName}
                    ></input>
                    <div className={styles.label}>Last name: </div>
                    <input
                        className={styles.input}
                        onChange={this.handleLastNameChange}
                        value={lastName}
                    ></input>
                    <div className={styles.label}>Phone: </div>
                    <input
                        className={styles.input}
                        onChange={this.handlePhoneNumberChange}
                        value={phoneNumber}
                    ></input>
                    <div className={styles.label}>E-mail: </div>
                    <input
                        className={styles.input}
                        onChange={this.handleEmailChange}
                        value={email}
                    ></input>

                    <div>
                        <button
                            className={styles.button}
                            onClick={this.handleSubmit}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withContacts(ContactForm)
