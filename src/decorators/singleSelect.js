/**
 * Created by manaev on 23/11/2016.
 * @author manaev
 */
import React from 'react'

export default (Component) => class WrappedComponent extends React.Component {
    constructor() {
        super()
        //ок, но this.state === undefined в {...this.state}
        this.state = {...this.state,selectedItemId: null}
    }

    render() {
        return <Component {...this.props} {...this.state} onSelectItem = {this.onSelectItem} isItemSelected = {this.isItemSelected}/>
    }

    isItemSelected = id => {
        return this.state.selectedItemId === id
    }
    
    onSelectItem = id => ev => {
        this.setState({
            selectedItemId: this.state.selectedItemId === id ? null : id
        })
    }

}
