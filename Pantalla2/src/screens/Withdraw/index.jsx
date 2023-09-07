import { StyleSheet, View } from 'react-native';
import WithdrawHeader from '../../components/WithdrawHeader';
import WithdrawContent from '../../components/WithdrawContent';

export default function Withdraw() {
  return (
    <View style={styles.container}>
        <View style={styles.elemento1}>
            <WithdrawHeader/>
        </View>
        <View style={styles.elemento2}>
            <WithdrawContent />
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 1,
  },
  elemento1: {
    flex: 1,
    width: '95%',
    height: '20%',
    marginBottom: 1,
  },
  elemento2: {
    padding: 5,
    width: '95%',
    height: '78%',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 50,
    borderBottomRightRadius: 50,
    marginTop: 170,
    position: 'absolute',
  }
});