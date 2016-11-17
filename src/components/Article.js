import React, {Component} from 'react'
import {ListView, Comment, Button} from '../components'

const labelMapping = {
    OPEN: 'открыть',
    CLOSE: 'закрыть'
}

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            isCommentOpen: false
        }
    }

    renderComments(article) {
        if (this.state.isCommentOpen) {
            return (
              <ListView data={article.comments || []} keyFunc={(item) => item.id} component={Comment}/>
            )
        }
        return null
    }

    toggleComment() {
        this.setState({
            isCommentOpen: !this.state.isCommentOpen
        })
    }

    get label() {
        return this.state.isCommentOpen
            ? labelMapping.CLOSE
            : labelMapping.OPEN
    }

    renderButton(article){
      if(article.comments && article.comments.length > 0){
        return (
          <Button label={this.label} onClick={() =>{this.toggleComment()}} passProps={{className:'link'}}/>
        )
      }
      return null
    }

    renderBody(){
      const {article} = this.props
      if(this.state.isOpen){
        return (
          <div>
            <p>{article.text}</p>
            {this.renderButton(article)}
            {this.renderComments(article)}
          </div>
        )
      }
      return null
    }
    render() {
        const {article} = this.props
        return (
            <section>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.renderBody()}
            </section>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article
