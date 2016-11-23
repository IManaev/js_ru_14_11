import React, { Component, PropTypes  }  from 'react'
import Article from './Article'
import singleSelect from '../decorators/singleSelect'
import {Article as ArticleShape} from '../shapes'

const ArticleList = (props) => {
    const { articles,onSelectItem,isItemSelected} = props
    const articleItems = articles.map(article => (
        <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {isItemSelected(article.id)}
                toggleOpen = {onSelectItem(article.id)}
            />
        </li>
    ))
    return (
        <ul>
            {articleItems}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(ArticleShape).isRequired,
    onSelectItem:PropTypes.func.isRequired,
    isItemSelected:PropTypes.func.isRequired
}

export default singleSelect(ArticleList)