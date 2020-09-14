import React from 'react'
import Footer from '../components/layouts/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row> 
                    <Footer.Column>
                        <Footer.Title>Contact Us</Footer.Title>
                        <Footer.Link href="#">Email:mailto</Footer.Link>
                        <Footer.Link href="#">Something</Footer.Link>
                        <Footer.Link href="#">Something</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Private Policy</Footer.Title>
                        <Footer.Link href="#">Press</Footer.Link>
                        <Footer.Link href="#">FQA</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-copyright" />Mona Assemi Jewelry</Footer.Link>
                    </Footer.Column> 
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="#"><Icon className="fab fa-twitter-square" />Twitter</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-facebook-square" />Facebook</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    </Footer.Column>  
                </Footer.Row>
            </Footer.Wrapper>    
        </Footer>    
    )
}
