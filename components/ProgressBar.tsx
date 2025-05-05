import { View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { ThemeColor } from '@/utils/styleVariables';

interface ProgressBarProps {
  progress: number; // 0 - 1
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 1);
  return (
    <View className='w-full bg-blue-200 rounded-full overflow-hidden my-2 h-2'>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          ThemeColor.progressStart,
          ThemeColor.progressMiddle,
          ThemeColor.secondary,
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className='h-full'
        style={{ width: `${clampedProgress * 100}%` }}
      ></LinearGradient>
    </View>
  );
}
