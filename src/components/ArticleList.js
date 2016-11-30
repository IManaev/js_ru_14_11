import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        isOpen: PropTypes.func.isRequired,
        toggleOpenItem: PropTypes.func.isRequired,
        filters:PropTypes.shape({
            from:PropTypes.date,
            to:PropTypes.date,
            label:PropTypes.string,
            value:PropTypes.string,
        })
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentDidMount() {
        console.log('---', 'mounted', this.containerRef)
        console.log('---', this.refs)
    }
    //лучше эту логику вынести в connect
    get articles(){
        const { articles, filters } = this.props
        return articles.filter(item => {
            if(filters.from){
                return new Date(item.date) >= filters.from
            }
            return true
        }).filter(item => {
            if(filters.from){
                return new Date(item.date) <= filters.to
            }
            return true
        }).filter(item => {
            if(filters.value){
                return item.id == filters.value
            }
            return true
        })
    }
    
    componentWillReceiveProps(nexProps) {
        //console.log('isEqual', Object.keys(nexProps).every(key => nexProps[key] == this.props[key]))
        //console.log('---', 'AL receiving props')
    }

    componentWillUpdate() {
        //console.log('---', 'AL will update')
    }

    getContainerRef = ref => {
        this.containerRef = ref
    }


    render() {
        const { isOpen, toggleOpenItem } = this.props
        const articleItems = this.articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {isOpen(article.id)}
                    toggleOpen = {toggleOpenItem(article.id)}
                />
            </li>
        ))

        return (
            <ul ref = {this.getContainerRef}>
                {articleItems}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    filters: state.filters
}))(accordion(ArticleList))
