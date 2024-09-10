import { View, Text, SafeAreaView, TouchableWithoutFeedback, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CardStyle, CommonStyle, HomeScreenStyle } from '../styles'
import Header from '../components/Header'
import Card from '../components/Card'
import Widgets from '../components/Widgets'

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOutsidePress = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  }
  return (
    <SafeAreaView style={CommonStyle.container}>

      <TouchableWithoutFeedback onPress={handleOutsidePress}>

        <View style={CommonStyle.container}>
          <View style={{ zIndex: 1 }}>
            <Header title={'Dashboard'}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              handleOutsidePress={handleOutsidePress}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>

            <View style={HomeScreenStyle.container}>
              <Text style={HomeScreenStyle.headerTitle}>Upcomming Consultations</Text>
              <Card
                showDoctorCard={true}
                dorctorNameOne={'Dr. Almora Disuza'}
                dorctorNameTwo={'Dr. Hans GerHoff'}
                count={2}
                iconChild={<Image source={require('../assets/png/stethoscope.png')} style={CardStyle.iconStyle} />}
              />
              <Text style={HomeScreenStyle.headerTitle}>Medical Files</Text>

              <Card
                discription={
                  `Blood tests.pdf
Cardiologyresult.pdf
Blood tests 01-09-2-2024.pdf
MRI results.pdf`
                }
                count={7}
                iconChild={<Image source={require('../assets/png/medical-record.png')} style={CardStyle.iconStyle} />}
              />

              <View style={HomeScreenStyle.widgetsBox}>
                <Widgets
                  WidgetsName={"Schedule"}
                  widgetsChild={
                    <Image source={require('../assets/png/plus.png')} style={CardStyle.iconStyle} />
                  }
                />
                <Widgets
                  WidgetsName={"Call"}
                  widgetsChild={
                    <Image source={require('../assets/png/telephone.png')} style={CardStyle.iconStyle} />
                  }
                />
              </View>

            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView >
  )
}

export default Home