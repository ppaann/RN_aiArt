import React from 'react';
import { View, Text } from 'react-native';
import BaseImageCard from './BaseImageCard';
import ProgressBar from '../../ProgressBar';

type ProgressCardProps = {
  title?: string;
  imageUrl: string;
  progress: number; // 0 - 100
  onPress?: () => void;
  onCollect?: () => void;
  onLike?: () => void;
  props?: any;
};

export default function ProgressCard({
  title,
  imageUrl,
  progress,
  onPress,
  onCollect,
  onLike,
  props,
}: ProgressCardProps) {
  return (
    <View className='relative bg-yellow-300'>
      <BaseImageCard
        {...props}
        imageUrl={imageUrl}
        title={title}
        onPress={onPress}
        onCollect={onCollect}
        onLike={onLike}
        footer={
          <View className='flex-col items-start justify-between'>
            <Text className='text-sm text-gray-500 mb-2'>喜爱进度值</Text>
            <ProgressBar progress={progress} />
          </View>
        }
      />
    </View>
  );
}
