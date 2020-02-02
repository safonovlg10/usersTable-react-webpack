import React, { Component } from 'react';
import '../header.componet/header.component.style.css';
import logo from '../../../img/perm_identity-24px.svg';


class Modal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        };
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    };

    handleSubmit =(event) => {

        this.props.addNewUser(this.state);
        this.setState({showModal:this.props.showModal});
        this.props.offShowModal();
        event.preventDefault();

    };
    render() {

        return (

            <div className="modal" id='exampleModal' data-toggle="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="logo-wrapper logo-wrapper-mar">
                            <img src={logo} alt="logo"/>

                            <div className="logo-name">User Table</div>
                        </div>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">

                                <div className="row">
                                    <div className="col-lg-12 col-lg-offset-2">
                                        <h3 className="text-center">Add new user</h3>


                                        <form id="contact-form" onSubmit={this.handleSubmit}  role="form">
                                            <div className="messages"></div>
                                            <div className="controls">

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_id">Id *</label>
                                                            <input id="form_id" type="number" name="id" value={this.state.id} onChange={this.handleChange}
                                                                   className="form-control"
                                                                   placeholder="Please enter your Id *"
                                                                   required="required"
                                                                   data-error="Id is required."/>
                                                            <div className="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_name">Firstname *</label>
                                                            <input id="form_name" type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}
                                                                   className="form-control"
                                                                   placeholder="Please enter your firstname *"
                                                                   required="required"
                                                                   data-error="Firstname is required."/>
                                                                <div className="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_lastName">Lastname *</label>
                                                            <input id="form_lastName" type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}
                                                                   className="form-control"
                                                                   placeholder="Please enter your lastName *"
                                                                   required="required"
                                                                   data-error="lastName is required."/>
                                                                <div className="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_email">Email *</label>
                                                            <input id="form_email" type="email" name="email" value={this.state.email} onChange={this.handleChange}
                                                                   className="form-control"
                                                                   placeholder="Please enter your email *"
                                                                   required="required"
                                                                   data-error="Valid email is required."/>
                                                            <div className="help-block with-errors"></div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_phone">Phone</label>
                                                            <input id="form_phone" type="tel" name="phone" value={this.state.phone} onChange={this.handleChange}
                                                                   className="form-control"
                                                                   placeholder="Please enter your phone (XXX)XXX-XXXX"
                                                                   required="required"
                                                                   data-error="Phone is required."/>
                                                            <div className="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">


                                                    <div className="col-md-12">
                                                        <input type="submit" className="btn btn-success btn-send"
                                                               value="Добавить"/>
                                                    </div>

                                                </div>

                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );

    }




}
export default Modal;