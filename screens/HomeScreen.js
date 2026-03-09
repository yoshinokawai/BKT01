import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import styles from './styles/homeStyles';

const insightCards = [
    {
        id: 'scan',
        icon: <Ionicons name="scan-outline" size={24} color="#5B6AF0" />,
        label: 'Scan new',
        subtitle: 'Scanned 483',
        bgColor: '#FFFFFF',
        iconBg: '#F0F0FE',
        navigateTo: 'Scan',
    },
    {
        id: 'counterfeits',
        icon: <Ionicons name="warning-outline" size={24} color="#FF8A65" />,
        label: 'Counterfeits',
        subtitle: 'Counterfeited 32',
        bgColor: '#FFFFFF',
        iconBg: '#FFF0E6',
        navigateTo: null,
    },
    {
        id: 'success',
        icon: <Ionicons name="checkmark-circle-outline" size={24} color="#4DB6AC" />,
        label: 'Success',
        subtitle: 'Checkouts 8',
        bgColor: '#FFFFFF',
        iconBg: '#E6F5F3',
        navigateTo: null,
    },
    {
        id: 'directory',
        icon: <Feather name="calendar" size={24} color="#4FC3F7" />,
        label: 'Directory',
        subtitle: 'History 26',
        bgColor: '#FFFFFF',
        iconBg: '#E6F2FF',
        navigateTo: null,
    },
];

export default function HomeScreen({ navigation }) {
    const handleCardPress = (card) => {
        if (card.navigateTo) {
            navigation.navigate(card.navigateTo);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.greeting}>Hello 👋</Text>
                    <Text style={styles.userName}>Christie Doe</Text>
                </View>
                <Image
                    source={require('../assets/avatar.png')}
                    style={styles.avatar}
                />
            </View>

            {/* Insights Section */}
            <Text style={styles.sectionTitle}>Your Insights</Text>

            {/* Cards Grid */}
            <View style={styles.grid}>
                {insightCards.map((card) => (
                    <TouchableOpacity
                        key={card.id}
                        style={[styles.card, { backgroundColor: card.bgColor }]}
                        onPress={() => handleCardPress(card)}
                        activeOpacity={0.7}
                    >
                        <View style={[styles.iconContainer, { backgroundColor: card.iconBg }]}>
                            {card.icon}
                        </View>
                        <Text style={styles.cardLabel}>{card.label}</Text>
                        <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
}
