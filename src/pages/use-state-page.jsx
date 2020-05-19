import React, { useState } from 'react'
import { Table, TBody, THead } from '~components/table'
import { Input, Label, FormElement } from '~components/form'
import { Button } from '~components/button'

function UseStatePage() {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        company: '',
    })

    const [users, setUsers] = useState([])

    const handleChange = (e) => {
        const target = e.target
        setFormValues((form) => ({ ...form, [target.name]: target.value }))
    }

    const addUser = (e) => {
        e.preventDefault()
        setUsers((userArray) => [...userArray, formValues])
        setFormValues({
            name: '',
            email: '',
            company: '',
        })
    }

    const removeUser = (userIndex) => {
        setUsers((userArray) => {
            const unfilteredUsers = userArray.filter(
                (val, index) => index !== userIndex
            )
            return unfilteredUsers
        })
    }

    return (
        <div>
            <h1>useState Hook</h1>
            <form onSubmit={addUser}>
                <h2>Form Example</h2>
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
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.company}</td>
                            <td>
                                <span onClick={() => removeUser(index)}>
                                    ❌
                                </span>
                            </td>
                        </tr>
                    ))}
                </TBody>
            </Table>
        </div>
    )
}

export default UseStatePage
