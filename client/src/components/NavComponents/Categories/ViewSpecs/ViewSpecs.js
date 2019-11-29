import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getItemsId } from '../../../../redux/actions/productActions'

import PropTypes from 'prop-types'

export class ViewSpecs extends Component {

    componentDidMount() {
        this.props.getItemsId(this.props.match.params.id)
    }

    render() {
        const { viewSpecs } = this.props
        console.log(viewSpecs)
        const viewSpecification = viewSpecs.length ? (viewSpecs.map(viewspec => {
            return(
                <div>
                    <h1>{viewspec.brand} {viewspec.name}</h1>
                        <li>Cores: {viewspec.cores}</li>
                        <li>Threads: {viewspec.threads}</li>
                        <li>Base Frequency: {viewspec.base_frequency}</li>
                        <li>Turbo Frequency(Max): {viewspec.turbon_frequency}</li>
                        <li>Cache: {viewspec.cache}</li>
                        <li>Memory Type: {viewspec.memory_type}</li>
                </div>
            )
        })) : null

        return (
            <div>
                {viewSpecification}
            </div>
        )
    }
}

ViewSpecs.propTypes = {
    getItems: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        viewSpecs: state.viewSpecs.viewSpecs
    }
}

export default connect(mapStateToProps, { getItemsId })(ViewSpecs)