import React, { Component } from 'react'
import FormCommentField from '../components/FormCommentField'

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: '',
      errors: {}
    }
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleCommentChange = this.handleCommentChange.bind(this)
    this.validateComment = this.validateComment.bind(this)
  }

  handleClearForm(event){
  event.preventDefault();
    this.setState({
      comment: ''
    })
  }

  handleFormSubmit(event){
    event.preventDefault();
    if(this.validateComment(this.state.comment)){
        let formPayload = {
          description: this.state.comment
        }
        this.props.addNewComment(formPayload);
        this.handleClearForm(event);
      }
  }

  handleCommentChange(event){
    this.validateComment(event.target.value)
    this.setState({comment: event.target.value})
  }

  validateComment(input) {
    if (input.trim() === '') {
      let newError = { CommentInput: 'You cannot submit a blank comment!' }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.CommentInput
      this.setState({ errors: errorState })
      return true
    }
  }

  render() {
    let errorDiv;
    let errorItems;

    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems[0]}</div>
      errorDiv = errorDiv.props.children.key
    }


    return(
      <form onSubmit={this.handleFormSubmit}>
        {errorDiv}
        <FormCommentField
          handlerFunction={this.handleCommentChange}
          content={this.state.comment}
          label="Add a Comment"
          name="Comment"
        />
        <div>
          <input className="button submit" type="submit" value="Submit" />
          <button className="button" onClick={this.handleClearForm}>Clear</button>
        </div>
      </form>
    )
  }

}

export default FormContainer
