import React, { useState } from 'react'
import short from 'short-uuid'
import { Table, TBody, THead } from '~components/table'
import { Input, Label, FormElement } from '~components/form'
import { Button } from '~components/button'
import styled from 'styled-components'
import { useLocalStorage } from '~utils/useLocalStorage'

const ActionButton = styled.td`
    text-align: center;
    &:hover {
        cursor: pointer;
        color: #ef5777;
    }
`

function UseStatePage() {
    const [users, setUsers] = useLocalStorage('formValues', [])
    // const [users, setUsers] = useState([])

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        company: '',
    })

    const handleChange = (e) => {
        const target = e.target
        setFormValues((form) => ({ ...form, [target.name]: target.value }))
    }

    const addUser = (e) => {
        e.preventDefault()
        setUsers((userArray) => [
            ...userArray,
            { id: short.generate(), ...formValues },
        ])
        setFormValues({
            name: '',
            email: '',
            company: '',
        })
    }

    const removeUser = (userId) => {
        setUsers((userArray) => {
            const unfilteredUsers = userArray.filter(
                (user) => user.id !== userId
            )
            return unfilteredUsers
        })
    }

    return (
        <div>
            <h1>useState Hook</h1>
            <form onSubmit={addUser}>
                <FormElement>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        required
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                </FormElement>
                <FormElement>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        required
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </FormElement>
                <FormElement>
                    <Label htmlFor="company">Company</Label>
                    <Input
                        type="text"
                        name="company"
                        value={formValues.company}
                        onChange={handleChange}
                    />
                </FormElement>
                <FormElement>
                    <Button>Submit</Button>
                </FormElement>
            </form>
            <Table>
                <THead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Remove</th>
                    </tr>
                </THead>
                <TBody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.company}</td>
                            <ActionButton onClick={() => removeUser(user.id)}>
                                ❌
                            </ActionButton>
                        </tr>
                    ))}
                </TBody>
            </Table>
        </div>
    )
}

export default UseStatePage
