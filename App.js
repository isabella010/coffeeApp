import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

// import of the stack relatd elements
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


// create screens for the stack
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';


export default function App() {
  const [amount, setAmount] = useState(1)
  const [roastType, setRoastType] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [milkAmount, setMilkAmount] = useState("");
  const [sugarAmount, setSugarAmount] = useState("");
  const [price, setPrice] = useState(1.75);

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Place Order">
          {(props) => (
            <Screen1
              amount={amount}
              setAmount={setAmount}
              price={price}
              setPrice={setPrice}
              roastType={roastType}
              setRoastType={setRoastType}
              isEnabled={isEnabled}
              setIsEnabled={setIsEnabled}
              milkAmount={milkAmount}
              setMilkAmount={setMilkAmount}
              sugarAmount={sugarAmount}
              setSugarAmount={setSugarAmount}
              navigation={props.navigation}
              {...props}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Order Summary" component={Screen2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
