import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ImageGalleryInfoScreen from '../screens/image-gallery/ImageGalleryInfo';
import GalleryScreen from '../screens/image-gallery/Gallery';
import ViewPictureScreen from '../screens/image-gallery/ViewPicture';

const Stack = createStackNavigator();

export default GalleryNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardOverlayEnabled: true,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}>
            <Stack.Screen name="ImageGalleryScreen" component={GalleryScreen} />
            <Stack.Screen
                name="ImageGalleryInfoScreen"
                component={ImageGalleryInfoScreen}
            />
            <Stack.Screen
                name="ViewPictureScreen"
                component={ViewPictureScreen}
            />
        </Stack.Navigator>
    );
};
