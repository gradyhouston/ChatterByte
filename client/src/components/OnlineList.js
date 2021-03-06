import React, { Component } from 'react'
import {
  ListView,
  ListViewSection,
  ListViewRow,
  Text
} from 'react-desktop/macOs'
import 'materialize-css/dist/css/materialize.css';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Grid from '@material-ui/core/Grid';


class OnlineList extends Component {
  render() {
    return (
      <ListView className="online-list">
        <ListViewSection>
          {this.props.users &&
            this.props.users.map((user, index) => {
              if (user.id === this.props.currentUser.id) {
                return this.renderItem(
                  `${user.name} (You)`,
                  user.id,
                  user.presence.state
                )
              }
              return this.renderItem(user.name, user.id, user.presence.state)
            })}
        </ListViewSection>
      </ListView>
    )
  }

  renderItem(name, id, status) {
    // const itemStyle = {}
    return (
      <ListViewRow key={id}>
        <div
          className="online-list-item"
          style={{ overflow: 'hidden', background: status === 'online' ? '#6BD761' : 'gray'
          }}
        />
        <Text color="white" size="13">
          {name}{' '}
        </Text>{' '}
      </ListViewRow>
    )
  }
}

export default OnlineList
