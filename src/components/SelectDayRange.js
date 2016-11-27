import React, {Component, PropTypes} from 'react'
import DayPicker, {DateUtils} from 'react-day-picker';
import "react-day-picker/lib/style.css"

class SelectDayRange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dayFrom: new Date(),
            dayTo: null,
            toggler: true
        }
    }

    handleDayClick(day){
        if(this.state.toggler){
            this.setState({
                toggler:!this.state.toggler,
                dayTo:day,
            })
        }else{
            this.setState({
                toggler:!this.state.toggler,
                dayFrom:day,
            })
        }
    }

    selectedDayLabel(field) {
        return this.state[field] ? this.state[field].toLocaleDateString() : 'none'
    }

    renderSelectedDays() {
        return (
            <div>
                <p>Day from: { this.selectedDayLabel('dayFrom')}</p>
                <p>Day to: {  this.selectedDayLabel('dayTo')}</p>
            </div>
        )
    }
    get modifiers(){
        return {
            selected: day => {
                return DateUtils.isSameDay(day, this.state.dayFrom)|| DateUtils.isSameDay(day, this.state.dayTo)
            }
        }
    }
    render() {
        return (
            <div>
                <DayPicker
                    modifiers={this.modifiers}
                    onDayClick={(e,day)=> {this.handleDayClick(day)} }
                />
                {this.renderSelectedDays()}
            </div>
        )
    }
}

export default SelectDayRange