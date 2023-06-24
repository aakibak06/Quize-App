import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Modal
} from "react-native";
import { QuestionData } from "../components/QuestionApi";
import QuestionItem from "../components/QuestionItem";

const { height, width } = Dimensions.get("window");

const PlayGround = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [questions, setQuestion] = useState(QuestionData);
  const [modalVisible, setModelVisible] = useState(false);

  const ListRef = useRef();

  const onSelectOption = (index, x) => {
    const tempData = questions;
    tempData.map((item, ind) => {
      if (index == ind) {
        if (item.marked !== -1) {
          item.marked = -1;
        } else {
          item.marked = x;
        }

      }
    });
    let temp = [];
    tempData.map((item) => {
      temp.push(item);
    });
    setQuestion(temp);
  };
  let marks = 0;
  const getScore = () => {

    questions.map(item => {
      if (item.marked == item.correct) {
        marks = marks + 1;

      }
    });
    if (marks >= 5) {
      return `${marks}/10 Pass ! `
    } else {
      return `${marks}/10 fail ! `
    }
  }

  const reset = () => {
    const tempData = questions;
    tempData.map((item, ind) => {

      item.marked = -1;

    });
    let temp = [];
    tempData.map((item) => {
      temp.push(item);
    });
    setQuestion(temp);
  }
  return (
    <View >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 80 }}>
        <Text style={{ paddingLeft: 20, fontSize: 20, }}>
          GK Questions : {"" + currentIndex + "/" + QuestionData.length}
        </Text>
        <Text style={{ paddingRight: 20, fontSize: 25, color: 'red' }} onPress={() => {
          reset()
          ListRef.current.scrollToIndex({ animated: true, index: 0 })
        }}>Reset</Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <FlatList
          scrollEnabled={false}
          ref={ListRef}
          data={questions}
          horizontal
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x / width;
            setCurrentIndex((x + 1).toFixed(0));
          }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item, index, currentIndex }) => {
            return (
              <QuestionItem
                data={item}

                selectedOption={(x) => {
                  onSelectOption(index, x);
                }}
              />
            );
          }}
        />
      </View>
      <View
        style={{
          position: "relative",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 100,
        }}>
        <TouchableOpacity

          style={{
            backgroundColor: currentIndex > 1 ? "#2980b9" : 'grey',
            height: 70,
            width: 100,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 20,
          }}
          onPress={() => {
            if (currentIndex > 1) {
              ListRef.current.scrollToIndex({
                animated: true,
                index: currentIndex - 2,
              });
            }
          }}>
          <Text style={{ fontSize: 30, color: "white" }}>Pre</Text>
        </TouchableOpacity>
        {currentIndex == questions.length ? (
          <TouchableOpacity
            style={{
              backgroundColor: "#2ecc71",
              height: 70,
              width: 110,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 20,
            }}
            onPress={() => {
              if (questions[currentIndex - 1].marked !== -1) {
                setModelVisible(!modalVisible)

              }
            }}>
            <Text style={{ fontSize: 25, color: "white" }}>Submit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: "#5f27cd",
              height: 70,
              width: 100,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 20,
            }}
            onPress={() => {
              if (questions[currentIndex - 1].marked !== -1) {
                if (currentIndex < questions.length) {
                  ListRef.current.scrollToIndex({
                    animated: true,
                    index: currentIndex,
                  });
                }
              }
            }}>
            <Text style={{ fontSize: 30, color: "white" }}>Next</Text>
          </TouchableOpacity>
        )}
      </View>

      <Modal
        animationType="slide"

        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModelVisible(!modalVisible)
        }}
      >
        <View style={{ backgroundColor: 'rgba(52, 73, 94,0.97)', flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <View style={{ backgroundColor: '#ecf0f1', width: '90%', height: 300, borderRadius: 10, elevation: 5 }}>
            <StatusBar backgroundColor="rgba(52, 73, 94,0.97)" />
            <Text style={{ fontSize: 40, textAlign: 'center', letterSpacing: 8, marginTop: 20, color: 'red', textTransform: 'uppercase', textDecorationLine: 'underline', elevation: 3 }}>
              Score
            </Text>
            <Text style={{ fontSize: 30, textAlign: 'center', letterSpacing: 3, marginTop: 20, marginLeft: 45, color: 'blue' }}>{getScore()} </Text>
            <Text style={{ color: 'black', textAlign: 'center', color: 'purple', fontSize: 30 }}>{marks < 5 ? 'Better luck next time' : 'Excellent 😄'}</Text>
            <TouchableOpacity style={{ backgroundColor: 'red', height: 60, marginTop: 20, marginHorizontal: 115, borderRadius: 20, marginTop: 20 }}
              onPress={() => {
                setModelVisible(!modalVisible)
                reset()
              }}
            >
              <Text style={{ fontSize: 40, textAlign: 'center', letterSpacing: 3, color: 'white' }}>Close</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

      <StatusBar />
    </View>
  );
};

export default PlayGround;
