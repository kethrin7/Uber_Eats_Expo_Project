import { Text, View, StyleSheet , ScrollView} from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home screen</Text>
    </View>
  );
};

export default Home;


// const listToRender = [
//   {
//     id: 0,
//     firstName: "rendom name",
//     lastName: "random lastname",
//   },
//   {
//     id: 1,
//     firstName: "rendom name",
//     lastName: "random lastname",
//   },
//   {
//     id: 2,
//     firstName: "rendom name",
//     lastName: "random lastname",
//   },
//   {
//     id: 3,
//     firstName: "rendom name",
//     lastName: "random lastname",
//   },
//   {
//     id: 4,
//     firstName: "rendom name",
//     lastName: "random lastname",
//   },
//   {
//     id: 5,
//     firstName: "rendom name",
//     lastName: "random lastname",
//   },
  
// ];

// const RenderComponent = ({ firstName, lastName }) => {
//   return (
//     <View style={styles.container}>
//       <Text>{firstName}</Text>
//       <Text>{lastName}</Text>
//     </View>
//   );
// };

// function Home({ navigation }) {
//   return (
//     <ScrollView
//       contentContainerStyle={{
//         flexGrow: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         paddingHorizontal: 20,
//       }}
//     >
//       {listToRender.map((item) => {
//         return (
//           <RenderComponent
//             firstName={item.firstName}
//             lastName={item.lastName}
//             key={item.id}
//           />
//         );
//       })}

//       {/* <FlatList
//         data={listToRender}
//         renderItem={(item) => (
//           <RenderComponent
//             firstName={item.firstName}
//             lastName={item.lastName}
//           />
//         )}
//         keyExtractor={(item) => item.id}
//       /> */}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     height: 120,
//     width: "100%",
//     backgroundColor: "#54924f",
//     borderRadius:20,
//     marginBottom: 5,
//   },
//   title: {
//     marginTop: 16,
//     paddingVertical: 8,
//     borderWidth: 4,
//     borderColor: "#20232a",
//     borderRadius: 6,
//     color: "#FFFFFF",
//     textAlign: "center",
//     fontSize: 30,
//     fontWeight: "bold",
//   },
// });

// export default Home;
