import React from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
/*
class DishDetail extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        console.log('Dish Detail Component componentDidMount is invoked');
    }

    componentDidUpdate() {
        console.log('Dish Detail Component componentDidUpdate is invoked');
    }
    
    
    
    renderDish() {
        if (this.props.dish != null) {
            const comments = this.props.dish.comments.map((comment) => {
                return (
                    <ul className="list-unstyled" key={comment.id}>
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
        console.log('Dish Detail Component render is invoked');
        return (
            <div className="container">
                {this.renderDish()}
            </div>
        
        );
    }

}
*/
/*
class DishDetail extends Component {

    RenderComments(comments) {
        if (comments == null) {
            return (<div></div>)
        }
        const cmnts = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>

            </div>
        )
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }

    render() {
        const dish = this.props.dish
        if (dish == null) {
            return (<div></div>)
        }
        const dishItem = this.renderDish(dish)
        const commentItem = this.renderComments(dish.comments)
        return (
            <div className="container">
                <div className='row'>
                    {dishItem}
                    {commentItem}
                </div>
            </div>
            
        )
    }
}
*/

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}

function RenderComments({comments}) {
    if (comments == null) {
        return (<div></div>)
    }
    const cmnts = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                </p>
            </li>
        )
    })
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmnts}
            </ul>

        </div>
    )
}

const DishDetail = (props) =>{
    const dish = props.dish
        if (dish == null) {
            return (<div></div>)
        }
        return (
            <div className="container">
                <div className='row'>
                    <RenderDish dish={dish} />
                    <RenderComments comments={dish.comments} />
                </div>
            </div>
            
        )
}

export default DishDetail;