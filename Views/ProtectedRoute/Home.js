import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      backgroundColor: "#fff",
  },
  chatButton: {
      backgroundColor: colors.primary,
      height: 50,
      width: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: colors.primary,
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: .9,
      shadowRadius: 8,
      marginRight: 20,
      marginBottom: 50,
  }
});