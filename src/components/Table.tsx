import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { User } from '../types/user';
import { styles } from '../styles/styles';

const UserTable = ({ data }: { data: User }) => {
  return (

    <View style={{ width: "98%", marginTop: 20 }}>
      <View style={styles.row}>
        <Text style={styles.tableTitle}>Name:</Text>
        <Text style={styles.value}>{data.first_name} {data.last_name}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.tableTitle}>ID:</Text>
        <Text style={styles.value}>{data.id}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.tableTitle}>UID:</Text>
        <Text style={styles.value}>{data.uid}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.tableTitle}>Email:</Text>
        <Text style={styles.value}>{data.email}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.tableTitle}>Username:</Text>
        <Text style={styles.value}>{data.username}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.tableTitle}>Gender:</Text>
        <Text style={styles.value}>{data.gender}</Text>
      </View>
    </View>


  );
};

export default UserTable;
