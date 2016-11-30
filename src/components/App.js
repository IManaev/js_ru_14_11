import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import {updateFilters} from '../AC/filters'
import Chart from './Chart'
import Select from 'react-select'
import DateRange from './DateRange'
import Counter from './Counter'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux'

class App extends Component {

    static defaultProps = {
        articles:[]
    }

    render() {
        const {articles,filters} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter />
                <Chart />
                <DateRange />
                <ArticleList />
                <Select options = {options} value={filters} onChange = {this.handleChange} />
            </div>
        )
    }

    handleChange = selected => {
        if(selected){
            this.props.updateFilters({ ...selected })
        }else{
            this.props.updateFilters({value:null,label:null})
        }
    }
    
}

App.propTypes = {
    filters:PropTypes.shape({
        from:PropTypes.date,
        to:PropTypes.date,
        label:PropTypes.string,
        value:PropTypes.string,
    }),
    articles:PropTypes.array,
    updateFilters:PropTypes.func.isRequired
}

export default connect(state => ({
    filters: state.filters,
    articles: state.articles
}),{updateFilters})(App)