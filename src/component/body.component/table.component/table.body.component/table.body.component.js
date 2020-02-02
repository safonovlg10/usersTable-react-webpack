import React, { Component } from 'react';
import './table.body.component.style.css';

class User extends Component{

    setActiveUser() {

        this.props.upDataState({
            activeUser: this.props.user
        })
    }



    render(){
        return(
            <tr  onClick={this.setActiveUser.bind(this)}
                 className={this.props.activeUser.id === this.props.user.id ? 'active-user': null}>

                <td>{this.props.user.id}</td>
                <td>{this.props.user.firstName}</td>
                <td>{this.props.user.lastName}</td>
                <td>{this.props.user.email}</td>
                <td>{this.props.user.phone }</td>
            </tr>
        );
    }



}

class TableBodyComponent extends Component {
    render() {
        let rowsUser = [];
        this.props.users.forEach((user,i) =>{

            rowsUser.push(<User
                user={user}
                key={user.id + user.phone}
                upDataState={this.props.upDataState}
                index={i}
                activeUser={this.props.activeUser}

            />)
        });

        return (


                <tbody>
                {rowsUser}
                </tbody>



        );
    }
}
export default TableBodyComponent;