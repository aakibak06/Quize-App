import {
  View,
  Text,
  Dimensions,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";

const { height, width } = Dimensions.get("window");

const QuestionItem = ({ data, selectedOption, }) => {
  return (
    <View style={{ width: width }} >
      <Text style={{ marginLeft: 10, fontSize: 23 }}>{'Q' + ' : ' + data.id + ' ' + data.question}</Text>

      <View style={{ marginTop: 20 }}>
        <FlatList
          data={data.options}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  width: "90%",
                  backgroundColor:
                    data.marked == index + 1 ? "#7efff5" : "#fff",
                  marginTop: 10,
                  marginBottom: 10,
                  alignSelf: "center",
                  elevation: 3,
                  alignItems: "center",
                  paddingLeft: 10,
                  flexDirection: "row",
                }}
                onPress={() => {
                  selectedOption(index + 1);
                }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor:
                      data.marked == index + 1 ? "white" : "#bdc3c7",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Text>
                    {index == 0
                      ? "A"
                      : index == 1
                        ? "B"
                        : index == 2
                          ? "C"
                          : "D"}
                  </Text>
                </View>
                <Text
                  style={{
                    color: data.marked == index + 1 ? "#1abc9c" : "black",
                    fontSize: 20,
                    paddingVertical: 15,
                    paddingLeft: 15,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default QuestionItem;
