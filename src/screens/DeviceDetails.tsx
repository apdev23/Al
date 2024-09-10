import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { CommonStyle, DeviceDetailsStyle } from '../styles';
import Header from '../components/Header';

const DeviceDetails = () => {
  const [appVersion, setAppVersion] = useState('');
  const [buildVersion, setBuildVersion] = useState('');
  const [bundleId, setBundleId] = useState('');
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [totalDiskSpace, setTotalDiskSpace] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleOutsidePress = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  }
  useEffect(() => {
    // Get app version
    setAppVersion(DeviceInfo.getVersion());

    // Get build version
    setBuildVersion(DeviceInfo.getBuildNumber());

    // Get bundle identifier
    setBundleId(DeviceInfo.getBundleId());

    // Get battery level
    DeviceInfo.getBatteryLevel().then(batteryLevel => {
      setBatteryLevel((batteryLevel * 100)?.toFixed(0));
    });

    // Get total disk space
    DeviceInfo.getTotalDiskCapacity().then(diskSpace => {
      setTotalDiskSpace((diskSpace / (1024 * 1024 * 1024))?.toFixed(2));
    });
  }, []);

  return (
    <SafeAreaView style={CommonStyle.container}>

      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={CommonStyle.container}>
          <View style={{ zIndex: 1 }}>
            <Header title={'Device Details'}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              handleOutsidePress={handleOutsidePress}
            />
          </View>
          <View style={DeviceDetailsStyle.container}>
            <Text style={DeviceDetailsStyle.text}>App Version: {appVersion}</Text>
            <Text style={DeviceDetailsStyle.text}>Build Version: {buildVersion}</Text>
            <Text style={DeviceDetailsStyle.text}>Bundle Identifier: {bundleId}</Text>
            <Text style={DeviceDetailsStyle.text}>Battery Level: {batteryLevel}%</Text>
            <Text style={DeviceDetailsStyle.text}>Total Disk Space: {totalDiskSpace} GB</Text>
          </View>
        </View>

      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};


export default DeviceDetails;
