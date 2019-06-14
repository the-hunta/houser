import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {updateMortgage, updateRent, clearInputs} from '../../ducks/reducer'

class Wiz3 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mortgage: '',
            desiredRent: '',
            redirect: false
        }
    }

    updateMortgage(input){
        this.setState({mortgage: input})
    }

    updateRent(input){
        this.setState({desiredRent: input})
    }

    handleComplete(){
        let {name, address, city, stateName, zip, imageUrl, mortgage, desiredRent} = this.props
        let inputBody = {
            propertyname: name,
            address: address,
            city: city,
            state: stateName,
            zip: zip,
            image: imageUrl,
            mortgageamt: mortgage,
            desiredrent: desiredRent

        }

    }

    axios.post('/api/', input1Body)
    this.props.clearInputs()
    this.setState({redirect: true})

    render(){
        console.log(this.props)
        if (this.state.redirect) {
            return<Redirect to='/' />

        }
    }
}