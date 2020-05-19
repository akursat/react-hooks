import styled from 'styled-components'

const Table = styled.table`
    border-spacing: 0;
    font-size: 14px;
    margin: 25px;
    width: 100%;
    letter-spacing: 0;
    line-height: 1.28581;
    text-transform: none;
    color: #182026;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu,
        Helvetica Neue, sans-serif;
`

const THead = styled.thead`
    display: table-header-group;
    vertical-align: middle;
    > th {
        padding-bottom: 6px;
        padding-top: 6px;
        color: #182026;
        font-weight: 600;
        adding: 11px;
        text-align: left;
        vertical-align: top;
    }
`

const TBody = styled.tbody`
    display: table-row-group;
    vertical-align: middle;
    > tr > td {
        background: rgba(191, 204, 214, 0.15);
        padding-bottom: 6px;
        padding-top: 6px;
    }
`

export { Table, THead, TBody }
