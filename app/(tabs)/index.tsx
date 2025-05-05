import { SafeAreaView, View, ScrollView } from 'react-native';
import { mockCategories } from '@/mock/mock';
// import BaseImageCard from './components/common/ImageCard/BaseImageCard';
// import MiniImageCard from '@/components/common/ImageCard/MiniImageCard';
// import ProgressCard from '@/components/common/ImageCard/ProgressCard';
// import AnimationCard from '@/components/common/ImageCard/AnimationCard';
import ImageGrid from '@/components/ImageGrid';

export default function Index() {
  return (
    <SafeAreaView className='h-screen'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className='overflow-y-scroll'
      >
        <ImageGrid />
        <View className='h-[400px] bg-green-500'></View>
        <View className='h-[400px] bg-blue-500'></View>
        <View className='h-[400px] bg-red-500'></View>
      </ScrollView>
    </SafeAreaView>
  );
}
