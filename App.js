import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer, createStackNavigator } from "react-navigation";
import { useScreens } from 'react-native-screens';

useScreens();

export class Screen1 extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Button
          title="Navigate to next"
          onPress={() => this.props.navigation.navigate("Screen2")}
        />
      </View>
    );
  }
}
export class Screen2 extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Button
          title="Naivate again to next"
          onPress={() => this.props.navigation.navigate("Screen3")}
        />
        <Text>
          On Android, the button above is not clickable.
          On iOS, when navigating back to this screen, you'll see the button above becomes uncklicable :(
        </Text>
      </View>
    );
  }
}
export class Screen3 extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>
          {" "}
          Go back to screen 2 now, and you'll see the button is not clickable
          anymore.{" "}
        </Text>
      </View>
    );
  }
}
export default createAppContainer(
  createStackNavigator(
    {
      Home: Screen1,
      Screen2: Screen2,
      Screen3: Screen3
    },
    {
      initialRouteName: "Home",
      transparentCard: true
    }
  )
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding :20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
