import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableHighlight, View } from 'react-native';
import { getData } from '../../service/service.ts';
import { User } from '../../types/user';
import { styles } from '../../styles.tsx';

const AllUserScreen = (props: any) => {

  const [userData, setUserData] = useState<User[]>([]);

  const openProfile = (item: User) => {
    props.navigation.replace('User', { currentUser: item, allUsers: userData });
  }

  useEffect(() => {
    ; (
      async () => {
        const data = await getData();
        setUserData(data);
      }
    )()
  }, [])


  return (
    <FlatList
      data={userData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableHighlight onPress={() => openProfile(item)}>
          <View style={[ styles.userCard, {
            backgroundColor: item.id % 2 === 0 ? '#f0f0f0'
              : '#f0f0f0',
            flexDirection: 'row',
          }]}>
            <Image
              source={{ uri: item.avatar }}
              style={{ width: 30, height: 30, resizeMode: 'cover' , marginRight:20 }}
            />
            <Text style={{ fontSize: 20 }}>{item.username}</Text>
          </View>
        </TouchableHighlight>
      )}
    />
  )
}

export default AllUserScreen
