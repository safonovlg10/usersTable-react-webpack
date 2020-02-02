import React from 'react';
import logo from "../../../img/perm_identity-24px.svg"

export default class ActiveUser extends React.Component {

    render() {

            return (
                <div>
                    <div className="panel panel-default">

                            <div className="row">
                                <div className="col-sm-6 col-md-6">
                                    <div className="logo-wrapper logo-wrapper-mar">
                                        <img src={logo} alt="logo"/>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-6">
                                    <h2>{this.props.activeUser.firstName} {this.props.activeUser.lastName}</h2>
                                    <table className="table">
                                        <tbody>
                                        <tr>
                                            <th>Описание:</th>
                                            <td><textarea  value={this.props.activeUser.description} style={{height: '124px', width: '245px', border: 'none'}} /></td>
                                        </tr>
                                        <tr>
                                            <th>Адрес проживания:</th>
                                            <td>{this.props.activeUser.address.streetAddress}</td>
                                        </tr>
                                        <tr>
                                            <th>Город:</th>
                                            <td>{this.props.activeUser.address.city}</td>
                                        </tr>
                                        <tr>
                                            <th>Провинция/штат:</th>
                                            <td>{this.props.activeUser.address.state}</td>
                                        </tr>
                                        <tr>
                                            <th>Индекс:</th>
                                            <td>{this.props.activeUser.address.zip}</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>

                    </div>
                </div>
            );
        }
}