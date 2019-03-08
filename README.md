# react-nav-transparent-card-bug

React-Navigation 3 'transparentCard' issue when used in conjunction with `useScreens()`

Using a React-Navigation StackNavigator, that has set `transparentCard: true` cause some weird issues when also `useScreens()` from `react-native-screens` is used.

When having at lest 3 routes in the stack, when navigating back from the 3rd stack to the 2nd one, the UI is unresponsive. You can see in the example that the button is not clickable anymore, but the StatusBar button still works.
