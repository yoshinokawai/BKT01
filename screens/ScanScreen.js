import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Pressable,
    SafeAreaView,
    StatusBar,
    Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles/scanStyles';

export default function ScanScreen({ navigation }) {
    const scanLineAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animate = () => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(scanLineAnim, {
                        toValue: 1,
                        duration: 2500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(scanLineAnim, {
                        toValue: 0,
                        duration: 2500,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        };
        animate();
    }, [scanLineAnim]);

    const scanLineTranslate = scanLineAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-80, 80],
    });

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#E8DDD3" />
            <LinearGradient
                colors={['#EDE4DA', '#E0D3C5', '#D6CBBD']}
                style={styles.gradient}
            >
                <SafeAreaView style={styles.safeArea}>
                    {/* Back Button */}
                    <Pressable
                        style={({ pressed }) => [
                            styles.backButton,
                            { opacity: pressed ? 0.7 : 1 },
                        ]}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backIcon}>‹</Text>
                    </Pressable>

                    {/* Scanner Viewfinder */}
                    <View style={styles.viewfinderContainer}>
                        {/* Product Image */}
                        <Image
                            source={require('../assets/juice.jpg')}
                            style={styles.productImage}
                            resizeMode="contain"
                        />

                        {/* Scanning Line (two thin segments like Figma) */}
                        <Animated.View
                            style={[
                                styles.scanLineContainer,
                                {
                                    transform: [{ translateY: scanLineTranslate }],
                                },
                            ]}
                        >
                            <View style={styles.scanLineLeft} />
                            <View style={styles.scanLineGap} />
                            <View style={styles.scanLineRight} />
                        </Animated.View>
                    </View>

                    {/* Bottom Product Card */}
                    <View style={styles.productCard}>
                        <Image
                            source={require('../assets/juice.jpg')}
                            style={styles.productThumbnail}
                            resizeMode="cover"
                        />
                        <View style={styles.productInfo}>
                            <Text style={styles.productBrand}>Lauren's</Text>
                            <Text style={styles.productName}>Orange Juice</Text>
                        </View>
                        <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
                            <Text style={styles.addIcon}>+</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </View>
    );
}
