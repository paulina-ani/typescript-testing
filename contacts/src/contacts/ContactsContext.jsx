import React from 'react'
import { fetchContacts } from './contactActions'

const Context = React.createContext({})

export default class ContactsContextProvider extends React.Component {
    state = {
        contacts: {}
    }

    componentDidMount() {
        const contacts = fetchContacts()
        this.setState({ contacts })
    }

    addContact = contact => {
        const contacts = Object.assign({}, this.state.contacts)
        contacts[contact.id] = contact
        this.setState({
            contacts
        })
    }

    render() {
        const context = {
            contactsById: this.state.contacts,
            addContact: this.addContact
        }
        return (
            <Context.Provider value={context}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const withContacts = Component => props => {
    return (
        <Context.Consumer>
            {contactsContext =>
                React.createElement(Component, {
                    ...props,
                    contactsContext
                })
            }
        </Context.Consumer>
    )
}
