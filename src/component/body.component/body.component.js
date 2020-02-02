import React, { Component } from 'react';
import './body.component.style.css';
import Btn from '././btn.component/btn.component';
import Table from './table.component/table.comoponent'
import ReactPaginate from 'react-paginate';
import ActiveUser from '../activeUser.component/activeUser.component';
import 'bootstrap/dist/css/bootstrap-grid.min.css'

class BodyComponent extends Component {
    render() {


        return (

                <div className="container">
                    <Btn
                        btnActiveAddUser={this.props.btnActiveAddUser}
                        onSearch={this.props.onSearch}

                    />
                    <Table


                        users={this.props.users}
                        activeUser={this.props.activeUser}
                        upDataState={this.props.upDataState}
                        onSort={this.props.onSort}
                        sortField={this.props.sortField}
                        sort={this.props.sort}
                        isSelectFile={this.props.isSelectFile}
                        onSelectFile={this.props.onSelectFile}
                        isLoading={this.props.isLoading}

                    />

                    {


                        this.props.sizeUserFile.length > this.props.pageSizeMax?
                        <ReactPaginate

                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={this.props.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.props.pageChangeHandler}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            nextClassName="page-item"
                            previousLinkClassName="page-link"
                            nextLinkClassName="page-link"
                            forcePage={this.props.currentPage}
                        />: null
                    }
                    {
                      this.props.activeUser?
                         <ActiveUser activeUser={this.props.activeUser}/>: null

                    }
                </div>
        );
    }
}
export default BodyComponent;