import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
    secondary: '#1E90FF',
    accent: '#1E90FF',
    check: '#FFDEAD',

    success: '#00C851',
    error: '#ff4444',

};

export const SIZES = {
    base: 10,
    width,
    height,
};