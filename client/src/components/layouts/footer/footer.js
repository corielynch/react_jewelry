import React from 'react'
import Footer from '../components/layouts/footer'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row> 
                    <Footer.Column>
                        <Footer.Title>Contact Us</Footer.Title>
                        <Footer.Link href="/Contact">Contact Us</Footer.Link>
                        <Footer.Link href="#">Private Policy</Footer.Link>
                        <Footer.Link href="/shop">Shop</Footer.Link>
                        <Footer.Link href="#"><className="fab fa-copyright" />&copy;{new Date().getFullYear()}></Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Link href="/press">Press</Footer.Link>
                        <Footer.Link href="/Faq">FQA</Footer.Link>
                        <Footer.Link href="#">Mona Assemi Jewelry</Footer.Link>
                        <Footer.Link href="#">All rights reserved</Footer.Link>
                    </Footer.Column> 
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="https://twitter.com/monaassemi">< className="fab fa-twitter-square" /></Footer.Link>
                        <Footer.Link href="https://www.facebook.com/mona.assemi">< className="fab fa-facebook-square" /></Footer.Link>
                        <Footer.Link href="https://www.instagram.com/mona_assemi/">< className="fab fa-instagram" /></Footer.Link>
                        <Footer.Link href="#">Terms of Service</Footer.Link>
                    </Footer.Column>  
                </Footer.Row>
            </Footer.Wrapper>    
        </Footer>    
    )
}
