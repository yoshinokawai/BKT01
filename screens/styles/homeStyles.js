import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_GAP = 16;
const CARD_WIDTH = (width - 48 - CARD_GAP) / 2;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
        paddingTop: 50,
        paddingHorizontal: 24,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32,
    },
    headerLeft: {
        flex: 1,
    },
    greeting: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1A1A2E',
        letterSpacing: -0.5,
    },
    userName: {
        fontSize: 15,
        color: '#7B7D8D',
        marginTop: 2,
        fontWeight: '400',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 16,
        backgroundColor: '#E0E0E0',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1A1A2E',
        marginBottom: 20,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: CARD_GAP,
    },
    card: {
        width: CARD_WIDTH,
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        alignItems: 'flex-start',
    },
    iconContainer: {
        width: 55,
        height: 55,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    iconText: {
        fontSize: 24,
    },
    cardLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1A1A2E',
        marginBottom: 4,
    },
    cardSubtitle: {
        fontSize: 13,
        color: '#9E9FAF',
        fontWeight: '400',
    },
});
