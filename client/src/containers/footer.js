import React from 'react'
import Footer from '../components/layouts/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row> 
                    <Footer.Column>
                        <Footer.Title>Contact Us</Footer.Title>
                        <Footer.Link href="/search">Search</Footer.Link>
                        <Footer.Link href="#">Private Policy</Footer.Link>
                        <Footer.Link href="/shop">Shop</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-copyright" />&copy;{new Date().getFullYear()}></Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Private Policy</Footer.Title>
                        <Footer.Link href="/press">Press</Footer.Link>
                        <Footer.Link href="/faq">FQA</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-copyright" />Mona Assemi Jewelry</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-copyright" />All rights reserved</Footer.Link>
                    </Footer.Column> 
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="https://twitter.com/monaassemi"><Icon className="fab fa-twitter-square" />Twitter</Footer.Link>
                        <Footer.Link href="https://www.facebook.com/mona.assemi"><Icon className="fab fa-facebook-square" />Facebook</Footer.Link>
                        <Footer.Link href="https://www.instagram.com/mona_assemi/"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-copyright" />Terms of Service</Footer.Link>
                    </Footer.Column>  
                </Footer.Row>
            </Footer.Wrapper>    
        </Footer>    
    )
}
