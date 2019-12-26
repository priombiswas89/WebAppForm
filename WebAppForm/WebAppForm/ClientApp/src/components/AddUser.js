import React, { Component } from 'react';
import { ValidationForm, TextInput, TextInputGroup } from "react-bootstrap4-form-validation";


export class AddUser extends Component {
    displayName = AddUser.name

    constructor(props) {
        super(props);

        this.formRef = React.createRef();
        this.state = {
            immediate: true,
            setFocusOnError: true,
            clearInputOnReset: false,
            title: "",
            loading: false
        }

        // This binding is necessary to make "this" work in the callback  
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();
        return <div>
            <h1>{this.state.title}</h1>
            <hr />
            <h2>{this.state.title}</h1>
            {contents}
        </div>;
    }

    handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('api/Users/Create', {
            method: 'POST',
            body: data,
        }).then((response) => response.json())
            .then((responseJson) => {
                this.props.history.push("/");
            })
    }

    handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/");
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    renderCreateForm() {
        return (

            <div className="col-md-8">
                <div className="card">
                    <h5 className="card-header text-white bg-secondary">Create User</h5>
                    <div className="card-body">
                        <ValidationForm onSubmit={this.handleSave}
                            onErrorSubmit={this.handleErrorSubmit}
                            ref={this.formRef}
                            immediate={this.state.immediate}
                            setFocusOnError={this.state.setFocusOnError}
                            defaultErrorMessage={{ required: "This field is required" }} >

                            <div className="form-group row " >
                                <input type="hidden" name="usersId" />
                            </div>

                            <div className="form-group row" >
                                <label className=" control-label col-md-2" htmlFor="FirstName">First Name</label>
                                <div className="col-md-5">
                                    <TextInput className="form-control" type="text" name="FirstName" required errorMessage="Please enter First Name" />
                                </div>
                            </div>

                            <div className="form-group row" >
                                <label className=" control-label col-md-2" htmlFor="LastName">Last Name</label>
                                <div className="col-md-5">
                                    <TextInput className="form-control" type="text" name="LastName" required errorMessage="Please enter Last Name" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="control-label col-md-2" htmlFor="Email" >Email</label>
                                <div className="col-md-5">
                                    <TextInputGroup className="form-control" type="email" name="Email"
                                        errorMessage="Please enter a valid email address"
                                        required />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="control-label col-md-2" htmlFor="Address" >Address</label>
                                <div className="col-md-5">
                                    <TextInput className="form-control" type="text" name="Address" required required errorMessage="Please enter Address" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="control-label col-md-2" htmlFor="PhoneNo" >Phone No</label>
                                <div className="col-md-5">
                                    <TextInput name="PhoneNo" type="text" required
                                        pattern="\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}"
                                        errorMessage={{
                                            required: "Please enter Phone No",
                                            pattern: "Phone No should be in format +99 999 99999"
                                        }}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group mt-3">
                                <button type="submit" className="btn btn-success">Save</button>
                                <button className="btn btn-danger ml-2" onClick={this.handleCancel}>Cancel</button>
                            </div >
                        </ValidationForm>
                    </div>
                </div>
            </div>
            
            
        )
    }
}
