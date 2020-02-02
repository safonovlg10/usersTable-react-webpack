import React, { Component } from 'react';


class Footer extends Component{
    render() {

        return (
            <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <p className="pull-left">Copyright © 2020</p>
                            <p className="pull-right">UsersTable</p>
                        </div>
                    </div>
                </div>
            </footer>

        );

    }

}
export default Footer;