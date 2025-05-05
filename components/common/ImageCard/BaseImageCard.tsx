import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { BlurView } from 'expo-blur';

type Props = {
  title?: string;
  imageUrl: string;
  onPress?: () => void;
  footer?: React.ReactNode;
  onLike?: () => void;
  onCollect?: () => void;
  aspectRatio?: number; // default: 3 / 4
  isAnimation?: boolean; // default: false
  animateDetail?: { isLocked?: boolean; length?: number };
  props?: any; // 其他属性
};

export default function BaseImageCard({
  title,
  imageUrl,
  onPress,
  onLike,
  onCollect,
  footer,
  aspectRatio = 3 / 4,
  isAnimation = false,
  animateDetail = {},
  props = {},
}: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} {...props}>
      <View className='rounded-xl overflow-hidden shadow w-full bg-white border border-gray-200'>
        {/* 图片区域 */}
        <View className='relative'>
          <Image
            source={{
              uri: imageUrl,
            }}
            resizeMode='cover'
            className='h-72 bg-gray-100'
            style={{ aspectRatio }} // 设置宽高比
          />

          {/* 左下角标题悬浮 */}
          <View className='absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded'>
            <Text className='text-white text-xs'>{title}</Text>
          </View>
          {/* 右下角喜爱悬浮 */}
          {onLike && (
            <View className='absolute bottom-2 right-10 bg-black/50 p-1 rounded-full'>
              <Ionicons
                name='heart-outline'
                size={13}
                color='white'
                onPress={onLike}
              />
            </View>
          )}

          {/* 右下角收藏悬浮 */}
          {onCollect && (
            <View className='absolute bottom-2 right-2 bg-black/50 p-1 rounded-full'>
              <Ionicons
                name='star-outline'
                size={13}
                color='white'
                onPress={onCollect}
              />
            </View>
          )}
          {/* 动画效果 */}
          {isAnimation && animateDetail.isLocked && (
            <BlurView
              intensity={100}
              className='absolute inset-0 flex justify-center items-center'
              style={{ borderRadius: 20 }}
            >
              <Ionicons name='lock-closed' size={24} color='white' />
            </BlurView>
          )}
          {isAnimation && !animateDetail.isLocked && (
            <View className='absolute inset-0 justify-center items-center'>
              <View className='bg-black/60 rounded-full p-6'>
                <Ionicons name='play' size={24} color='white' />
              </View>
            </View>
          )}
          {isAnimation && animateDetail.length && (
            <View className='absolute top-2 right-2 bg-black/50 px-2 py-1 rounded'>
              <Text className='text-white text-xs'>
                {animateDetail.length}s
              </Text>
            </View>
          )}
        </View>

        {/* 底部面板 */}
        {footer && <View className='px-3 pt-3 pb-4 bg-white'>{footer}</View>}
      </View>
    </TouchableOpacity>
  );
}
