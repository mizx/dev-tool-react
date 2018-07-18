import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

enum Bit {
  Item1,
  Item2,
  Item3,
  Item4,
  Item5
}

class BitList extends React.Component {

  public render() {
    const bitKeys = Object.keys(Bit).filter(bit => typeof Bit[bit] === 'number');
  
    return (
      <List dense={true}>
        {bitKeys.map(key => (
          <ListItem
            key={key}
            dense={true}
            button={true}
          >
            <ListItemText primary={key} />
            <ListItemSecondaryAction>
              <Switch

              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default BitList;
