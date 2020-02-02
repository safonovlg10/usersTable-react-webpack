import React, { Component } from 'react';
import $ from 'jquery'
import './App.css';
import Header from './component/header.componet/header.componet';
import Body from './component/body.component/body.component';
import load from "./load";
import _ from "lodash";
import Modal from './component/modal.component/modal.component';
import Footer from './component/footer.component/footer.component';



class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            users: [],
            activeUser: 0,
            sort: 'asc',
            sortField: 'id',
            search: '',
            isSelectFile: false,
            isLoading: false,
            currentPage: 0,
            btnActiveAddUser: false
        };

    };



    loadData = (url) =>{


        return load(url).then(
            response => {
                let users =  JSON.parse(response);
                this.setState({
                    users: _.orderBy(users, this.state.sortField, this.state.sort),
                    isLoading: false,
                    btnActiveAddUser: true
                });
            },
            error => {
                console.error(error);
            }
        );
    };

    onSort = (sortField) =>{

        const cloneData = this.state.users.concat();
        const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
        const data = _.orderBy(cloneData, sortField, sort);
        this.setState({ users: data, sort, sortField})
    };

    onSearch = (value) =>{
        this.setState({search: value});
    };



    filterData = () =>{
        const {users,search} = this.state;

        if(!search) return this.state.users;
        let result = users.filter(item => {
            return (
                item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
                item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
                item["email"].toLowerCase().includes(search.toLowerCase())
            );
        });
        if(!result.length){
            result = this.state.users
        }
        return result

    };

    addNewUser = (newUser) => {
        const cloneData = this.state.users.concat();
        cloneData.unshift(newUser);
        this.setState({users: cloneData});

    };

    onSelectFile = (url) => {

        this.setState({
            isSelectFile: true,
            isLoading: true,
        });

        this.loadData(url);

    };
    offShowModal =() =>{
        $('#exampleModal').modal('hide');

    };

    upDataState = (state) =>{

        this.setState(state);
    };
    pageChangeHandler = ({selected}) => (

        this.setState({currentPage: selected})

    );

    render() {

        const filteredData = this.filterData();
        const pageSizeMax = 50;
        const pageCount = Math.ceil(filteredData.length / pageSizeMax);
        const displayData = _.chunk(filteredData , pageSizeMax)[this.state.currentPage];


        return (

            <div className='content-height100'>

                <Header/>
                <div className='content'>
                    <Modal
                        addNewUser={this.addNewUser}
                        offShowModal={this.offShowModal}
                    />
                    <aside>
                        <Body
                            users={displayData? displayData: []}
                            activeUser={this.state.activeUser}
                            upDataState={this.upDataState}
                            onSort={this.onSort}
                            sort={this.state.sort}
                            onSearch={this.onSearch}
                            sortField={this.state.sortField}
                            isSelectFile={this.state.isSelectFile}
                            onSelectFile={this.onSelectFile}
                            isLoading={this.state.isLoading}
                            currentPage={this.state.currentPage}
                            pageChangeHandler={this. pageChangeHandler}
                            pageSizeMax={pageSizeMax}
                            pageCount={pageCount}
                            sizeUserFile={this.state.users}
                            btnActiveAddUser={this.state.btnActiveAddUser}
                        />
                    </aside>
                    <Footer/>
                </div>
            </div>
        );
    }
}



export default App;
