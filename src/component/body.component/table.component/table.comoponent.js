import React, { Component } from 'react';
import './table.component.style.css';
import TableHeader from './table.header.component/table.header.component';
import TableBody from './table.body.component/table.body.component';
import FileSizeSelection from '../../fileSizeSelection.component/fileSizeSelection.component';
import Loading from "../../loading/loading.component";


class TableComponent extends Component {
    render() {

        return (
            <div className="table-container">
                <table className='list-user'>
                  <TableHeader
                      upDataState={this.props.upDataState}
                      users={this.props.users}
                      onSort={this.props.onSort}
                      sortField={this.props.sortField}
                      sort={this.props.sort}
                  />
                    <TableBody
                        users={this.props.users}
                        activeUser={this.props.activeUser}
                        upDataState={this.props.upDataState}

                    />

                </table>

                {
                    !this.props.isSelectFile? <FileSizeSelection
                        onSelectFile={this.props.onSelectFile}
                    />: null
                }

                {

                    this.props.isLoading?<Loading/>: null
                }




            </div>


        );
    }
}
export default TableComponent;