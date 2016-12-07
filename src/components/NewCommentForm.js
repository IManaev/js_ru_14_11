import React, { Component, PropTypes } from 'react'

class NewCommentForm extends Component {
    state = {
        text: '',
        user: ''
    }

    static propTypes = {
        postComment:PropTypes.func,
    }

    static defaultProps = {
        postComment:()=>{}
    }

    handleChange = field => ev => {
        if (ev.target.value.length > 5) return
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        console.log('---', 'adding comment')
        this.props.postComment(this.state)
        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default NewCommentForm