import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';
import BaseImageCard from './BaseImageCard';
import { View, Text, TouchableOpacity } from 'react-native';

type Props = {
  title?: string;
  imageUrl: string;
  liked?: boolean;
  progress: number; // 0-1
  onPress?: () => void;
  onLike?: () => void;
  onDownload?: () => void;
};

export default function AnimationCard({
  title,
  imageUrl,
  liked,
  progress = 0,
  onPress,
  onLike,
  onDownload,
}: Props) {
  return (
    <View className='relative bg-red-300'>
      <BaseImageCard
        imageUrl={imageUrl}
        onPress={onPress}
        aspectRatio={1} // Set aspect ratio to 1:1 for square image
        isAnimation={true}
        animateDetail={{ isLocked: progress < 1, length: 5 }}
        footer={
          <View className='flex-col items-start justify-between'>
            <Text className='font-semibold pb-2'>{title}</Text>
            {progress === 1 ? (
              <View className='flex flex-row items-center justify-between w-full'>
                <Text className='text-sm text-gray-500'>已解锁</Text>

                <View className='flex  items-center justify-between space-x-4 flex-row '>
                  <TouchableOpacity onPress={onLike}>
                    <Ionicons
                      name={liked ? 'heart' : 'heart-outline'}
                      size={18}
                      color={liked ? 'red' : 'gray'}
                      onPress={onLike}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onDownload}>
                    <Octicons name='download' size={18} color='gray' />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View className='flex flex-row items-center justify-between flex-nowrap'>
                <Text className='text-sm text-red-700'>
                  需要喜爱值: {progress * 100}%
                </Text>
                <Ionicons
                  name='information-circle-outline'
                  size={15}
                  color='gray'
                />
              </View>
            )}
          </View>
        }
      />
    </View>
  );
}
