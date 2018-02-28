import React from 'react'
// import PropTypes from 'prop-types'
import { Button, Card, Form, Icon, Input } from 'semantic-ui-react'

import { constructClientParameterDetails } from '../../helpers/parameters/constructClientParameterDetails'

export class Parameter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      param: this.props.param || {},
      pctDID: this.props.pctDID || 0
    }
  }

  componentDidMount() {
    if (this.props.param && this.props.pctDID) {
      const param = constructClientParameterDetails(
        this.props.param,
        this.props.pctDID
      )

      this.setState({
        param
      })
    }
  }

  render() {
    const s = this.state
    const p = s.param

    return (
      <Card className="parameter-card-width" raised>
        <Card.Content>
          <Card.Header>{p.title}</Card.Header>
          {/*<Card.Meta>*/}
          {p.placeholder}
          {/*</Card.Meta>*/}
          <Card.Content>Current Value: {p.value}</Card.Content>
          <Card.Content extra>
            <Button
              color="black"
              id="upvote"
              basic
              onClick={e => this.props.onClick(p.title, 'upvote', e)}
            >
              Max <Icon name="chevron up" />
            </Button>
            <Button
              color="black"
              id="downvote"
              basic
              onClick={e => this.props.onClick(p.title, 'downvote', e)}
            >
              Max <Icon name="chevron down" />
            </Button>
          </Card.Content>
          <Form>
            <Form.Field inline>
              <Input placeholder="asdf" />
            </Form.Field>
          </Form>
        </Card.Content>
      </Card>
    )
  }
}

export default Parameter
