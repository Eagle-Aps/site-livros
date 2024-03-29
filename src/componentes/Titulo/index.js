import styled from "styled-components"

export const Titulo = styled.h2`
    text-decoration: none;
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '18px;'};
    text-align: ${props => props.alinhamento || 'CENTER'};
    margin: 0;
`
