import React from 'react';
import { Image, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { User } from '../../types/user';
import { styles } from '../../styles/styles';
import UserTable from '../../components/Table';

const UserScreen = ({ navigation, route }: any) => {
  // Ensure route.params exists and has the expected structure
  const { currentUser, allUsers }: { currentUser: User; allUsers: User[] } = route.params ?? {};

  if (!currentUser || !allUsers || !Array.isArray(allUsers)) {
    console.error("Invalid route params");
    return null;
  }

  const changeUser = (position: number) => {
    const index: number = allUsers.findIndex(user => user.id === currentUser.id);

    if (index === -1) {
      console.error("User not found in allUsers array");
      return;
    }

    const newIndex = index + position;
    if (newIndex < 0 || newIndex >= allUsers.length) {
      console.warn("New index out of bounds");
      return;
    }

    navigation.replace('User', { currentUser: allUsers[newIndex], allUsers });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ flex: 9, alignItems: 'center', padding: 20 }}>
        <View style={
          styles.avatar
        }>
          <Image
            source={{ uri: currentUser.avatar }}
            style={{ width: 120, height: 120, resizeMode: 'cover' }}
          />
        </View>
        <UserTable data={currentUser}/>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, flex: 1 }}>
        <CustomButton title="Previous" onPress={() => changeUser(-1)} />
        <CustomButton title="Home" onPress={() => navigation.replace('All Users')} />
        <CustomButton title="Next" onPress={() => changeUser(1)} />
      </View>
    </View>
  );
};

export default UserScreen;
