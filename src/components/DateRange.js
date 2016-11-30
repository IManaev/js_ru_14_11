import React, { Component,PropTypes } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {updateFilters} from '../AC/filters'

import 'react-day-picker/lib/style.css'

import { connect } from 'react-redux'

class DateRange extends Component {
    
    handleDayClick = (e, day) => {
        const { from, to } = this.props.filters
        this.props.updateFilters(DateUtils.addDayToRange(day, {from:from,to:to}))
    }

    render() {
        const { from, to } = this.props.filters;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, this.props.filters) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

DateRange.propTypes = {
    filters:PropTypes.shape({
        from:PropTypes.date,
        to:PropTypes.date,
        label:PropTypes.string,
        value:PropTypes.string,
    }),
    updateFilters:PropTypes.func.isRequired
}

export default connect(state => ({
    filters: state.filters
}),{updateFilters})(DateRange)