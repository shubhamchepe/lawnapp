import React, { Component } from 'react';
import { View, Text ,Button} from 'react-native';
import { withNavigation } from 'react-navigation';


class ButtonComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Button
        title="Press me"
        onPress={() => this.props.navigation.navigate('Loginscreen')}
      />
    );
  }
}

export default withNavigation(ButtonComp);
