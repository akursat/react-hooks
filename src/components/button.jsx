import styled from 'styled-components'

const Button = styled.button`
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
        inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    background-image: linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0.8),
        hsla(0, 0%, 100%, 0)
    );
    color: #182026;
    background-color: #f5f8fa;
    align-items: center;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
    justify-content: center;
    padding: 5px 10px;
    text-align: left;
    vertical-align: middle;
    min-height: 30px;
    min-width: 30px;
    width: fit-content;
    &:hover {
        background-clip: padding-box;
        background-color: #ebf1f5;
    }
`

export { Button }
