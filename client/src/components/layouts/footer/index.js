import React from 'react'
import { Container, Wrapper, Row, Column, Link, Title } from './styles/footer'

export default function Footer({ children, ...restProp}) {
    return <Container {...restProp}>{children}</Container>
}

Footer.Wrapper = function FootWrapper({children, ...restProps}) {   
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FootRow({children, ...restProps}) {
    return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FootColumn({children, ...restProps}) {   
    return <Column {...restProps}>{children}</Column>
}

Footer.Link = function FootLink({children, ...restProps}) {   
    return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FootTitle({children, ...restProps}) {   
    return <Title {...restProps}>{children}</Title>
}