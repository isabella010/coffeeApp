import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Switch,
  TextInput
} from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

const Screen1 = (props) => {
    const [err, setErr] = useState("");

    const buyClicked = () => {
        if(props.milkAmount === "" || props.sugarAmount === ""){
            setErr("ERROR: Missing milk or sugar quantity")
        }else{
            setErr("")
            props.navigation.navigate("Order Summary", { 
                milkAmount: props.milkAmount, 
                sugarAmount: props.sugarAmount, 
                price: props.price,
                amount: props.amount,
                isEnabled: props.isEnabled,
                roastType: props.roastType

            });
        }
    }        

    const onChangeMilk = (tmp) => {
        props.setMilkAmount(tmp);
      };
    
      const onChangeSugar = (tmp) => {
        props.setSugarAmount(tmp);
      };
    
      const minPressed = () => {
        if (props.amount > 1) {
            props.setAmount(props.amount - 1);

            if(props.isEnabled === false){
                const newPrice = 1.75 * (props.amount - 1);
                props.setPrice(newPrice);
            } else{
                const newPrice = 1.65 * (props.amount - 1);
                props.setPrice(newPrice);
            }
            
        }
      };
    
      const plusPressed = () => {
        props.setAmount(props.amount + 1);
        if(props.isEnabled === false){
            const newPrice = 1.75 * (props.amount + 1);
            props.setPrice(newPrice);
        } else{
            const newPrice = 1.65 * (props.amount + 1);
            props.setPrice(newPrice);
        }
      };
    
      const toggleSwitch = () => props.setIsEnabled((previousState) => !previousState);


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/90/4f/c9/904fc9fd1007772223479c14dfeea451.jpg",
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.topContainer}>
        <Text style={styles.brewedCoffeeText}>Brewed Coffee</Text>
        <Text style={styles.caloriesText}>$1.75 {"\u2022"} 4 Cals</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formLabel}>Roast Type</Text>

        <SegmentedControl
          values={["Regular", "Dark Roast", "Decaf"]}
          selectedIndex={props.roastType}
          onChange={(event) =>
            props.setRoastType(event.nativeEvent.selectedSegmentIndex)
          }
          style={styles.segmentedControl}
          appearance={"light"}
        />

        <View style={styles.formLabelContainer}>
            <Text style={styles.formLabel}>Bring a Reusable Cup?</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Switch onValueChange={toggleSwitch} value={props.isEnabled} />
            </View>
        </View>


        <View style={styles.formLabelContainer}>
            <Text style={styles.formLabel}>Milk</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <TextInput
                style={{
                    height: 40,
                    width: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                onChangeText={onChangeMilk}
                value={props.milkAmount}
                />
            </View>
        </View>

  
        <View style={styles.formLabelContainer}>
            <Text style={styles.formLabel}>Sugar</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <TextInput
                style={{
                    height: 40,
                    width: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                onChangeText={onChangeSugar}
                value={props.sugarAmount}
                />
            </View>
        </View>
        

        <Text style={{ marginTop: 15, color: "red", fontStyle: 'italic', fontWeight: 'bold' }}> {err} </Text>

        <Text style={{ marginTop: 15 }}>Confirm your purchase: </Text>
        <View
          style={{
            backgroundColor: "lightgrey",
            width: "100%",
            height: 2,
            marginTop: 8,
          }}
        />

        <View style={styles.formLabelContainer}>
          <Pressable onPress={minPressed}>
            <Text style={styles.amountBtn}>{" "}-{" "}</Text>
          </Pressable>

            <Text style={{ marginTop: 4, marginLeft: 10, marginRight: 10, fontSize: 15, fontWeight: "bold" }}>
                {props.amount}
            </Text>

          <Pressable onPress={plusPressed}>
            <Text style={styles.amountBtn}>{" "}+{" "}</Text>
          </Pressable>

          <Pressable style={styles.btn} onPress={buyClicked}>
            <Text style={{ color: "white", fontWeight: "bold" }}> Buy - ${props.price.toFixed(2)}</Text>
          </Pressable>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formLabelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  topContainer: {
    alignItems: "center",
  },
  formContainer: {
    alignItems: "flex-start",
    margin: 20,
  },
  formLabel: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "left",
  },
  segmentedControl: {
    width: "100%",
    height: 30,
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#FF624D",
    flexDirection: 'column',
    alignItems: "flex-start",
    justifyContent: "center",
    height: 45,
    padding: 12,
    marginLeft: "45%",
    marginRight: 2,
    borderRadius: 25,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  brewedCoffeeText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  caloriesText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  amountBtn: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    color: "white",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 5,
    paddingRight: 5
  },
  
});
export default Screen1;