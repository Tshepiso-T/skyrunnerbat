import React from 'react';
import { Text } from 'react-native';
import { Svg, Path, Circle, Rect } from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  activated?: boolean;
}

export const OrbIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'currentColor' }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
    <Path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4Z" />
    <Path d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z" fillOpacity="0.5" />
  </Svg>
);

export const TotemIcon: React.FC<IconProps> = ({ width = 100, height = 100, activated }) => (
  <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
    <Path d="M20 90H80V80H20V90Z" fill={activated ? '#6EE7B7' : '#9CA3AF'} />
    <Path d="M30 80H70V50H30V80Z" fill={activated ? '#34D399' : '#6B7280'} />
    <Path d="M40 50H60V30H40V50Z" fill={activated ? '#10B981' : '#4B5563'} />
    <Circle cx="50" cy="20" r="10" fill={activated ? '#FBBF24' : '#374151'} />
  </Svg>
);

export const NectarIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'currentColor' }) => (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
        <Path d="M12 2C12 2 4 10 4 15C4 19.42 7.58 23 12 23C16.42 23 20 19.42 20 15C20 10 12 2 12 2Z" />
    </Svg>
);

export const SwitchIcon: React.FC<IconProps> = ({ width = 24, height = 24, activated }) => (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Rect x="4" y="4" width="16" height="16" rx="4" fill={activated ? '#4ADE80' : '#4B5563'}/>
        <Circle cx="12" cy="12" r="5" fill={activated ? '#A7F3D0' : '#9CA3AF'}/>
    </Svg>
);

export const PipIcon: React.FC<{ style?: object }> = ({ style }) => (
  <Text style={[{ fontSize: 40 }, style]}>🐦</Text>
);

export const LunaIcon: React.FC<{ style?: object }> = ({ style }) => (
  <Text style={[{ fontSize: 40 }, style]}>👩‍🚀</Text>
);
