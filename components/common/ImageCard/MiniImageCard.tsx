import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';
import BaseImageCard from './BaseImageCard';

type Props = {
  title?: string;
  imageUrl: string;
  liked?: boolean;
  collected?: boolean;
  onPress?: () => void;
  onCollect?: () => void;
  onLike?: () => void;
};
export default function MiniImageCard({
  title,
  imageUrl,
  liked,
  collected,
  onPress,
  onCollect,
  onLike,
}: Props) {
  return (
    <View className='relative bg-red-300'>
      <BaseImageCard
        imageUrl={imageUrl}
        title={title}
        onPress={onPress}
        footer={null}
      />
      <View className='absolute bottom-2 right-2 flex-row space-x-2 bg-white/80 rounded-md px-2 py-1'>
        {onLike && (
          <TouchableOpacity onPress={onLike}>
            <Text>
              {liked ? (
                <Ionicons
                  name='heart'
                  size={20}
                  color='red'
                  style={{ transform: [{ rotate: '45deg' }] }}
                />
              ) : (
                <Ionicons
                  name='heart-outline'
                  size={20}
                  color='black'
                  style={{ transform: [{ rotate: '45deg' }] }}
                />
              )}
            </Text>
          </TouchableOpacity>
        )}
        {onCollect && (
          <TouchableOpacity onPress={onCollect}>
            <Text>
              {collected ? (
                <Ionicons name='star' size={20} color='yellow' />
              ) : (
                <Ionicons name='star-outline' size={20} color='black' />
              )}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
