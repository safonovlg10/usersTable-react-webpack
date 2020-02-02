import React, { Component } from 'react';
import './btn.component.style.css';
import search from '../../../../img/search-24px.svg';

class BtnComponent extends Component {
        constructor(props){
            super(props);
            this.state = {
                search: ''
            }
        }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    };
    render() {

        return (
                    <div className="btn-wrapper">
                        <div className="btn-add">
                            <button disabled={!this.props.btnActiveAddUser} type="button" data-toggle="modal" data-target="#exampleModal">add new User</button>
                        </div>

                        <div className="form-input">
                            <input type="text" name='search' onChange={this.handleChange} placeholder="Искать здесь..."/>
                                <button type="button" onClick={this.props.onSearch.bind(null,this.state.search)}><img src={search} alt=""/></button>
                        </div>
                    </div>

        );
    }
}
export default BtnComponent;