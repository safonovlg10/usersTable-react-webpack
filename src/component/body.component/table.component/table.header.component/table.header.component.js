import React, { Component } from 'react';
import './table.header.component.style.css';



class TableHeaderComponent extends Component {

    render() {
        return (

                    <thead>
                    <tr>
                        <th onClick={this.props.onSort.bind(null, 'id')}
                            className={(this.props.sort === 'asc' || this.props.sort === 'desc') && this.props.sortField === 'id'?'sort-icon-'+ this.props.sort: null}>
                            id
                        </th>
                        <th onClick={this.props.onSort.bind(null, 'firstName')}
                            className={(this.props.sort === 'asc' || this.props.sort === 'desc') && this.props.sortField === 'firstName'?'sort-icon-'+ this.props.sort: null}>
                            firstName
                        </th>
                        <th onClick={this.props.onSort.bind(null, 'lastName')}
                            className={(this.props.sort === 'asc' || this.props.sort === 'desc') && this.props.sortField === 'lastName'?'sort-icon-'+ this.props.sort: null}>
                            lastName
                        </th>
                        <th onClick={this.props.onSort.bind(null, 'email')}
                            className={(this.props.sort === 'asc' || this.props.sort === 'desc') && this.props.sortField === 'email'?'sort-icon-'+ this.props.sort: null}>
                            email
                        </th>
                        <th onClick={this.props.onSort.bind(null, 'phone')}
                            className={(this.props.sort === 'asc' || this.props.sort === 'desc') && this.props.sortField === 'phone'?'sort-icon-'+ this.props.sort: null}>
                            phone
                        </th>

                    </tr>
                    </thead>
        );
    }
}
export default TableHeaderComponent;