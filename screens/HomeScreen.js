/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, Button} from 'react-native';

const consoleLog = (n) =>
  console.log('****** HomeScreen.js -- line: ' + n + ' ******');

// khai báo props
HomeScreen.propTypes = {
  //   todos: PropTypes.array,
  //   onTodoClick: PropTypes.function,
};

// Khởi tạo giá trị default cho props khi không nhận được
// từ parent
HomeScreen.defaultProps = {
  //   todos: [],
  //   onTodoClick: null,
};

export default function HomeScreen(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text>HomeScreen Component</Text>
      <Button title="Go Detail" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
