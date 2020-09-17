import React from "react";
import "./styles/footer.css"
const Footer = () => {
    return(
    <div className="main-footer">
        <div className="container">
        <div className="row">
            {/* column1 */}
            <div className="col">
                <h4>Mona Assemi Jewelry</h4>
                <ul className="list-unstyled">
                    <li>310-555-0735</li>
                    <li>Maryland, USA</li>
                </ul>
            </div>
            {/* column2 */}
            <div className="col">
            <h4>Contact</h4>
                <ul className="list-unstyled">
                    <li>Email:mailto</li>
                    <li>Love to here from you</li>
                </ul>
            </div>
            {/* column3 */}
            <div className="col">
            <h4>Social</h4>
                <ul className="list-unstyled">
                    <li>twitterHandle</li>
                    <li>Insta</li>
                </ul>
            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} Mona Assemi Jewelry | All rights reserved | Terms of Service | Privacy
                </p>
            </div>
            </div>
        </div>
    </div>
    )
}
export default Footer;