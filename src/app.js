import React from 'react'
import { render } from 'react-dom'
import { articles } from './fixtures'
import ArticleList from './components/ArticleList'
import styles from '../styles/common.scss'

render(<ArticleList articles = {articles} />, document.getElementById('container'))
