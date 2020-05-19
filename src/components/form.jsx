import styled from 'styled-components'

const Label = styled.label`
    margin-bottom: 1rem;
`

const Input = styled.input`
    background: #fff;
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0),
        inset 0 0 0 1px rgba(16, 22, 26, 0.15),
        inset 0 1px 1px rgba(16, 22, 26, 0.2);
    color: #182026;
    font-size: 14px;
    font-weight: 400;
    height: 30px;
    line-height: 30px;
    outline: none;
    padding: 0 10px;
    vertical-align: middle;
    &:focus {
        box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3),
            inset 0 1px 1px rgba(16, 22, 26, 0.2);
    }
`

const FormElement = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
`

export { Input, Label, FormElement }
