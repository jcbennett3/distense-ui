import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Grid, Header, List, Message, Segment } from 'semantic-ui-react'

import { voteOnParameter } from '../actions/parameters'
import { getParameters } from '../reducers/parameters'

import Head from '../components/common/Head'
import Parameter from '../components/common/Parameter'

export class Parameters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parameters: this.props.parameters || [],
      parameterValue: ''
    }
  }

  componentDidMount() {
    this.paramTimeout = setTimeout(() => {
      this.setState({
        loading: false,
        parameters: this.props.parameters
      })
    }, 2000)
  }

  componentWillUnmount() {
    clearTimeout(this.paramTimeout)
  }

  handleInputChange(event) {
    const target = event.target
    const name = target.name
    const value = target.value

    if (value.length < 3)
      this.setState({
        [name]: value
      })
  }

  onClick = async (title, vote, e) => {
    e.preventDefault()

    this.props.voteOnParameter({ title, vote })
    this.setState({
      redirect: true
    })
  }

  render() {
    const { parameters, pctDID } = this.props
    const { parameterValue } = this.state

    return (
      <div>
        <Head title="Distense Votable Governance Parameters" />
        <Header as="h1">Parameters</Header>
        <Header as="h3">Govern if you dare (and own DID)</Header>
        <Grid.Row>
          <Grid.Column width={16}>
            <Message>
              <Message.Header>adf</Message.Header>
              <List bulleted>
                <List.Item>
                  A maximum vote by you will affect parameter values by
                </List.Item>
                <List.Item>
                  Your proposal can be anything, it doesn't necessarily have to
                </List.Item>
                <List.Item>
                  Remember that when you propose, it is likely that DID will be
                  issued for the completion of the task. The fewer DID the
                  better.
                </List.Item>
              </List>
            </Message>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Card.Group>
            {parameters.length > 0 ? (
              parameters.map((parameter, i) => (
                <Parameter
                  key={i}
                  param={parameter}
                  onChange={this.handleInputChange}
                  onClick={this.onClick}
                  parameterValue={parameterValue}
                  pctDID={pctDID}
                />
              ))
            ) : (
              <Card className="parameter-card-width" raised>
                <Segment>Loading Distense parameters...</Segment>
              </Card>
            )}
          </Card.Group>
        </Grid.Row>
        {/*language=CSS*/}
        <style global jsx>{`
          .parameter-card-width {
            width: 366px !important;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parameters: getParameters(state),
  pctDID: state.user.user.pctDID
})

const mapDispatchToProps = dispatch => ({
  voteOnParameter: vote => dispatch(voteOnParameter(vote))
})

export default connect(mapStateToProps, mapDispatchToProps)(Parameters)
