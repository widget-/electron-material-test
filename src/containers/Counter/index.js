import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { increment, incrementAsync, decrement } from './actions'
import { selectCount } from './selectors'

import Wrapper from './Wrapper'
import CounterWrapper from './components/Counter'

import { Button } from 'material-ui'

class Counter extends Component {
  render () {
    return (
      <Wrapper>
        <CounterWrapper>{this.props.count}</CounterWrapper>
        <Button raised color="primary" onClick={this.props.actions.increment}>
          Increment
        </Button>
        <Button raised onClick={this.props.actions.incrementAsync}>
          Debounced Increment Async
        </Button>
        <Button onClick={this.props.actions.decrement}>
          Decrement
        </Button>
      </Wrapper>
    )
  }
}

Counter.propTypes = {
  actions: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
}

const mapStateToProps = createStructuredSelector({
  count: selectCount(),
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      increment,
      incrementAsync,
      decrement,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
