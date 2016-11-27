/**
 * Created by manaev on 27.11.2016.
 */
import React, {Component, PropTypes} from 'react'
import toggleOpen from '../decorators/toggleOpen'

class AddComment extends Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    constructor() {
        super()
        this.state = {
            title: '',
            comment: '',
            user: ''
        }
    }
    handleChange(field,event){
        this.setState({...this.state,[field]:event.target.value})
    }
    handleClick = ev =>{
        ev.preventDefault()
        console.log('onSubmit state',this.state)
    }
    renderForm() {
        const {isOpen} = this.props
        if (!isOpen) return null
        return (
            <form>
                <fieldset>
                    <legend>Add comment:</legend>
                    <div>
                        <label>Title:</label>
                        <input type="text" value={this.state.title}
                               onChange={(ev)=>{this.handleChange('title',ev)}}
                               placeholder="input title"/>
                    </div>
                    <div>
                        <label>Comment:</label>
                        <input type="text" value={this.state.comment}
                               onChange={(ev)=>this.handleChange('comment',ev)}
                               placeholder="input comment"/>
                    </div>
                    <div>
                        <label>User:</label>
                        <input type="text" value={this.state.user}
                               onChange={(ev)=>this.handleChange('user',ev)}
                               placeholder="input your name"/>
                    </div>
                    <div>
                        <button onClick={this.handleClick}>Submit</button>
                    </div>
                </fieldset>
            </form>
        )
    }

    renderButton() {
        const {isOpen, toggleOpen} = this.props
        return <a href="javascript:void(0)" onClick={toggleOpen}>{!isOpen ? 'want to add comment?' : 'hide form'} </a>
    }

    render() {
        return (
            <div>
                {this.renderButton()}
                {this.renderForm()}
            </div>
        )
    }
}
export default toggleOpen(AddComment)