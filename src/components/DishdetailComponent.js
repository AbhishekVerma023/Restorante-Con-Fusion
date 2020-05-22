import React,{ Component} from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle,BreadcrumbItem, Breadcrumb, Button, ModalBody, ModalHeader, Modal, Row, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
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

class CommentForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        this.toggleModal();
        //alert('Current State is: ' + JSON.stringify(values));
        this.props.addComment(this.props.dishId, values.rating, values.name, values.comment);
    }

    render() {
        return (
            <>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span>Submit Comment 
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </div>

                            <div className="form-group">
                                <Label htmlFor="name">Your Name</Label>
                                <Control.text model=".name" id="name" name="name" className="form-control"
                                    placeholder="Your Name"
                                    validators = {{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                     }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                     />    
                            </div>
                            <div className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment" 
                                  name="comment" rows="6" className="form-control"></Control.textarea>
                            </div>
                            <div className="form-group">
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

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

function RenderComments({comments, addComment, dishId}) {
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
            <CommentForm dishId={dishId} addComment={addComment} />

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
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <RenderDish dish={dish} />
                    <RenderComments comments={props.comments} 
                        addComment={props.addComment}
                        dishId={dish.id} />
                </div>
            </div>
            
        )
}

export default DishDetail;