import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props){
        super(props);
    }

    
    
    
    renderDish() {
        if (this.props.dish != null) {
            const comments = this.props.dish.comments.map((comment) => {
                return (
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- { comment.author}, {new Date(comment.date).toDateString()}</li>    
                    </ ul>
                );
            });
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card key={this.props.dish.id}>
                            <CardImg top width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {comments}
                    </div>
                </div>
                
            );
        }    
        else
            return(
                <div></div>
            );
    }


    render() {
        return (
            <div>
                {this.renderDish()}
            </div>
        
        );
    }

}

export default DishDetail;