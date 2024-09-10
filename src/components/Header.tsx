import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { HeaderStyle } from '../styles';
import NotificationIcon from '../assets/svg/notification.svg'
import MoreIcon from '../assets/svg/more.svg';
import SettingIcon from '../assets/svg/setting.svg';
import LogoutIcon from '../assets/svg/logout.svg';

const Header = (props: any) => {
    const { title, handleOutsidePress, showMenu, setShowMenu } = props;

    const handleMoreIconPress = () => {
        setShowMenu(!showMenu)
    }

    const handleMenuOptionPress = (option: string) => {
        if (option === 'settings') {
        } else if (option === 'logout') {
        }
        setShowMenu(false)
    }

    return (
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
            <View style={HeaderStyle.headerContainer}>
                <Text style={HeaderStyle.titleStyle}>{title}</Text>
                <View style={HeaderStyle.rightHeaderBoxStyle}>
                    <TouchableOpacity style={HeaderStyle.notificationBoxStyle}>
                        <NotificationIcon width={25} height={25} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleMoreIconPress}>
                        <MoreIcon width={25} height={25} />
                    </TouchableOpacity>
                    {/* More Menu */}
                    {showMenu && (
                        <View style={HeaderStyle.menu}>
                            <TouchableOpacity onPress={() => handleMenuOptionPress('settings')} style={HeaderStyle.menuItem}>
                                <Text style={HeaderStyle.menuItemTextStyle}>Settings</Text>
                                <SettingIcon width={18} height={18} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleMenuOptionPress('logout')} style={HeaderStyle.menuItem}>
                                <Text style={HeaderStyle.menuItemTextStyle}>Logout</Text>
                                <LogoutIcon width={23} height={23} />
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Header
