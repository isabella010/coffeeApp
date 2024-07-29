import { StyleSheet, View, Pressable, Text } from "react-native";
import React, { useState, useEffect } from "react";

const Screen2 = ({ route }) => {
  const { milkAmount, sugarAmount, price, amount, isEnabled, roastType } =
    route.params;

  const [typeWords, setTypeWords] = useState("");

  const roast = () => {
    if (roastType == 0) {
      setTypeWords("Regular");
    } else if (roastType == 1) {
      setTypeWords("Dark Roast");
    } else {
      setTypeWords("Decaf");
    }
  };

  useEffect(() => {
    roast();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.brewedCoffeeText}>Order Details</Text>
      </View>

      <View style={styles.leftItems}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Brewed Coffee: {typeWords}
        </Text>
      </View>

      <View style={styles.leftItems}>
        <Text style={{ fontSize: 15 }}>Milk: {milkAmount}</Text>
      </View>

      <View style={styles.leftItems}>
        <Text style={{ fontSize: 15 }}>Sugar: {sugarAmount}</Text>
      </View>

      <View
        style={{
          backgroundColor: "lightgrey",
          width: "94%",
          height: 2,
          margin: 12,
          marginTop: 16,
        }}
      />

      <View style={styles.leftItems}>
        <Text style={{ fontSize: 15 }}>Quantity: {amount}</Text>
      </View>

      <View style={styles.leftItems}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 15 }}>Unit Price:</Text>
          {isEnabled ? (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ fontSize: 15, textDecorationLine: "line-through" }}
              >
                $1.75{" "}
              </Text>
              <Text style={{ fontSize: 15 }}>$1.65</Text>
            </View>
          ) : (
            <Text style={{ fontSize: 15 }}>$1.75</Text>
          )}
        </View>
        {isEnabled && (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 12,
                color: "red",
                marginBottom: 10,
                marginTop: 5,
              }}
            >
              Reusable cup discount applied (-$0.10 per cup)
            </Text>
          </View>
        )}
      </View>

      <View
        style={{
          backgroundColor: "lightgrey",
          width: "94%",
          height: 2,
          margin: 12,
          marginTop: 16,
        }}
      />

      <View style={styles.leftItems}>
        <Text style={{ fontSize: 15 }}>Subtotal: {price.toFixed(2)}</Text>
      </View>

      <View style={styles.leftItems}>
        <Text style={{ fontSize: 15 }}>Tax: ${(0.13 * price).toFixed(2)}</Text>
      </View>

      <View style={styles.leftItems}>
        <Text style={{ fontSize: 15 }}>Total: ${(1.13 * price).toFixed(2)}</Text>
      </View>

      <Pressable style={styles.btn}>
            <Text style={{ color: "white", fontWeight: "bold" }}> Order Again</Text>
          </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topContainer: {
    alignItems: "center",
  },
  brewedCoffeeText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 40,
  },
  btn: {
    backgroundColor: "#FF624D",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    padding: 12,
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 230,
    borderRadius: 25,
  },
  leftItems: {
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: 5,
  },
});

export default Screen2;
