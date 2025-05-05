import React from 'react';
import { View, ScrollView, useWindowDimensions } from 'react-native';
import ProgressCard from './common/ImageCard/ProgressCard';
import { mockCategories } from '@/mock/mock';

export default function ImageGrid() {
  const { width } = useWindowDimensions();
  // console.log(numColumns);
  const categories = mockCategories;

  const columnGap = 12;
  const sidePadding = 16;

  const numColumns = width >= 768 ? 3 : 2; // Tablet 3-col, phone 2-col
  const cardWidth =
    (width - sidePadding * 2 - columnGap * (numColumns - 1)) / numColumns;

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: sidePadding,
        paddingTop: 16,
        paddingBottom: 40,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: columnGap,
      }}
    >
      {categories.map((item) => (
        <View
          key={item.id}
          style={{
            width: cardWidth,
            marginBottom: columnGap,
          }}
          className='rounded-lg overflow-hidden bg-gray-100'
        >
          <ProgressCard
            imageUrl={item.cover}
            title={item.title}
            progress={item.progress}
            onPress={() => {}}
          />
        </View>
      ))}
    </ScrollView>
  );
}
