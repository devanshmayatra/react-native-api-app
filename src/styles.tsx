import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 0,
    padding: 20,
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: '600',
    backgroundColor: 'white',
    textAlign: 'center',
    height: 50,
    lineHeight: 50,
    borderRadius: 8,
    marginBottom: 10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  userCard: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    height: 50,
    alignContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  center: {
    flex: 1,
    backgroundColor: "#495057",
    justifyContent: "center",
    // alignItems: "center",
  }, button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    width: 90,
    height: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: "50%",
    backgroundColor: "red",
  },
  tableTitle: {
    fontSize: 16,
    color: "#000",
    height: 50,
    width: 85,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    color: "#000",
    height: 50,
    width: 210,
  }, row: {
    flexDirection: 'row',
    width: "100%",
    marginBottom: 5, // Spacing between rows
  }
});