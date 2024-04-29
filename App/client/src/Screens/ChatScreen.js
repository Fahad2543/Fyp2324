
import React, { useState, useEffect,useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const ChatScreen = () => {
 const [conversations, setConversations] = useState([]);
 const [modalVisible, setModalVisible] = useState(false);
 const [selectedItemId, setSelectedItemId] = useState(null);
const [lastFetchedAt, setLastFetchedAt] = useState(null);
const [fetchTimestamp, setFetchTimestamp] = useState(null);
 const fetchTimestampRef = useRef(null);
 useEffect(() => {
  // Fetch conversations immediately on component mount
  fetchConversations();
}, []);

useEffect(() => {

   fetchTimestampRef.current = new Date().toLocaleString();
  
  fetchConversations();
  // Set up polling to fetch conversations every 5 seconds
  const intervalId = setInterval(fetchConversations, 5000);

  // Clean up interval on component unmount
  return () => clearInterval(intervalId);
}, []);

 const fetchConversations = async () => {
  try {
    const response = await fetch('http://192.168.100.9:8080/getallformdata');
    const data = await response.json();

    // Add the fixed timestamp to each item using the ref value
    const newData = data.map(item => ({
      ...item,
      arrivalTime: fetchTimestampRef.current, // Use ref value as fixed timestamp
    }));

    setConversations(newData);
  } catch (error) {
    console.error('Error fetching conversations:', error);
  }
};



 const toggleModal = () => {
    setModalVisible(!modalVisible);
 };

 const handleNoClick = async (itemId) => {
  // try {
  //       await axios.post('/api/moveData', { itemId });
  //       // Optionally, update your UI or perform any necessary actions
  //   } catch (error) {
  //       console.error('Error moving data:', error);
  //   }
};



   const handleYesClick = async (id) => {
    try {
      // Send a POST request to move the item and delete it from the formdata collection
      const response = await fetch('http://192.168.100.109:8080/api/moveAndDeleteData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId: id }),
      });

      if (response.ok) {
        console.log('Item moved and deleted successfully.');
        // After moving and deleting, fetch the updated conversations data and update the frontend
        fetchConversations();
      } else {
        console.error('Failed to move and delete item.');
      }
    } catch (error) {
      console.error('Error moving and deleting item:', error);
    }
  };

 return (
    <View style={styles.container}>
      <FlatList
        data={conversations}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.chatItem}>
            <View style={styles.chatContent}>
              <Image source={{ uri: item.prescription }} style={styles.chatImage} />
              <View style={styles.chatText}>
                <Text style={styles.medicineName}>{item.medicineName}</Text>
                <Text>From: {item.name}</Text>
                {/* Display the arrival time */}
                <Text style={styles.txttime}>{item.arrivalTime}</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.greenButton]}
                onPress={() =>  handleYesClick(item._id)}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.redButton]}
                onPress={() => handleNoClick(item._id)}
              >
                <Text style={styles.buttonTextNo}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
 },
 chatItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 16,
   
 },
 chatContent: {
    flexDirection: 'row',
    alignItems: 'center',
 },
 chatImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
 },
 chatText: {
    flex: 1,
 },
 medicineName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
 },
 buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    
 },
 button: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
 },
 greenButton: {
    backgroundColor: '#3AAFA9',
    width: "48%",
    marginTop: 7,
 },
 redButton: {
    backgroundColor: '#17252A',
    width: "48%",
    height: 42,
    marginTop: 7,
 },
 buttonTextNo: {
    color: "#fff",
 },
 txttime:{
  color: '#3AAFA9'
 },
 buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
 },
});

export default ChatScreen;



// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';

// const ChatScreen = () => {
//   const [conversations, setConversations] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedItemId, setSelectedItemId] = useState(null);

//   useEffect(() => {
//     fetchConversations();
//   }, []);

//   const fetchConversations = async () => {
//     try {
//       const response = await fetch('http://192.168.10.30:8080/getallformdata');
//       const data = await response.json();
//       setConversations(data);
//     } catch (error) {
//       console.error('Error fetching conversations:', error);
//     }
//   };

//   const toggleModal = () => {
//     setModalVisible(!modalVisible);
//   };

//   const handleNoClick = (id) => {
//     // Remove the chat item with the given ID
//     const updatedConversations = conversations.filter((item) => item._id !== id);
//     setConversations(updatedConversations);
//   };


//   const handleYesClick = async (id) => {
//     try {
//       // Send a POST request to the backend to save the item with the given ID
//       const response = await fetch('http://192.168.10.30:8080//api/pharmacyResponses', {
//         method: 'POST',
//         // http://192.168.10.30:8080/getallformdata
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ itemId: id }),
//       });
  
//       if (response.ok) {
//         console.log('Item saved successfully.');
//         // After saving, fetch the updated conversations data and update the frontend
//         fetchConversations();
//       } else {
//         console.error('Failed to save item.');
//       }
//     } catch (error) {
//       console.error('Error saving item:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={conversations}
//         keyExtractor={(item) => item._id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.chatItem}>
//             <View style={styles.chatContent}>
//               <Image source={{ uri: item.prescription }} style={styles.chatImage} />
//               <View style={styles.chatText}>
//                 <Text style={styles.medicineName}>{item.medicineName}</Text>
//                 {/* Add additional conversation details here */}
//               </View>
//             </View>
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 style={[styles.button, styles.greenButton]}
//                 onPress={() => handleYesClick(item._id)}
//               >
//                 <Text style={styles.buttonText}>Yes</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[styles.button, styles.redButton]}
//                 onPress={() => handleNoClick(item._id)}
//               >
//                 <Text style={styles.buttonTextNo}>No</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   chatItem: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     padding: 16,
//   },
//   chatContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   chatImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 16,
//   },
//   chatText: {
//     flex: 1,
//   },
//   medicineName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 8,
//   },
//   button: {
//     paddingVertical: 6,
//     paddingHorizontal: 20,
//     borderRadius: 6,
//     alignItems: 'center',
//   },
//   greenButton: {
//     backgroundColor: '#3AAFA9',
//     width:"48%",
//     marginTop:7,
//   },
//   redButton: {
//     backgroundColor: '#17252A',
//     width: "48%",
//     height: 42,
//      marginTop:7,
//   },
//   buttonTextNo:{
//     color:"#fff",
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default ChatScreen;







// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';

// const ChatScreen = () => {
//   const [conversations, setConversations] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);

//   useEffect(() => {
//     fetchConversations();
//   }, []);

//   const fetchConversations = async () => {
//     try {
//       const response = await fetch('http://192.168.10.30:8080/getallformdata');
//       const data = await response.json();
//       setConversations(data);
//     } catch (error) {
//       console.error('Error fetching conversations:', error);
//     }
//   };

//   const toggleModal = () => {
//     setModalVisible(!modalVisible);
//   };

//   const handleNoClick = (id) => {
//     // Remove the chat item with the given ID
//     const updatedConversations = conversations.filter((item) => item._id !== id);
//     setConversations(updatedConversations);
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={conversations}
//         keyExtractor={(item) => item._id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.chatItem}>
//             <View style={styles.chatContent}>
//               <Image source={{ uri: item.prescription }} style={styles.chatImage} />
//               <View style={styles.chatText}>
//                 <Text style={styles.medicineName}>{item.medicineName}</Text>
//                 {/* Add additional conversation details here */}
//               </View>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   chatItem: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     padding: 16,
//   },
//   chatContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   chatImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 16,
//   },
//   chatText: {
//     flex: 1,
//   },
//   medicineName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
// });

// export default ChatScreen;
