//imports
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';

//class declaretion
class CategoryItemView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Category: this.props.category
        }
    }
    
    render() {
        return (
            //partial view
            <div className="col-md-4" >
                <div className="card bg-dark text-warning">
                    <div className="card-header">
                        <h1 className="text-center">{this.state.Category.categoryName}</h1>
                    </div>
                    <div className="card-footer">
                        <Button onClick={()=> {
                            const {history} = this.props;
                            history.push(`/vehicle/${this.state.Category._id}`);
                        }}> View Vehicles</Button>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

//exports
export default withRouter(CategoryItemView);