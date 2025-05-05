export const mockCategories = [
  {
    id: 'shendiao_huangshannu',
    title: '神雕 · 黄衫女',
    subtitle: '广绿清清女宫度',
    cover:
      'https://images.unsplash.com/photo-1629455047322-a1fa628939a8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://www.china-cart.com/bookpic/201212/20121254524.jpg',
      'https://images.unsplash.com/photo-1602415658234-b0b779c261ec?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1712196881154-914fa7a07873?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1732158903422-545effe65732?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    tags: ['女侠', '黄衫', '神秘'],
    is_new: true,
    progress: 0,
    priority: 1,
  },
  {
    id: 'luding_shuang_er',
    title: '鹿鼎 · 双儿',
    subtitle: '她筱婚女',
    cover:
      'https://image.lexica.art/full_jpg/9b9eb891-8215-4bf4-8ea2-4d658d5e2e27',
    images: Array.from(
      { length: 6 },
      (_, i) =>
        `https://readdy.ai/api/search-image?query=Qing%20dynasty%20young%20maid%20gentle%20smile&width=400&height=520&seq=${i}&orientation=portrait`
    ),
    tags: ['温婉', '少女', '宫装'],
    is_new: false,
    progress: 0.9,
    priority: 2,
  },
  {
    id: 'shici_tachun',
    title: '诗词 · 踏春',
    subtitle: '清簪古秋',
    cover:
      'https://img.freepik.com/premium-photo/young-woman-yellow-garden-ware-yellow-dress_862994-16027.jpg',
    images: Array.from(
      { length: 6 },
      (_, i) =>
        `https://readdy.ai/api/search-image?query=Chinese%20poetic%20lady%20in%20spring%20meadow%20walking%20with%20book&width=400&height=520&seq=${i}&orientation=portrait`
    ),
    tags: ['踏青', '书香', '春风'],
    is_new: true,
    progress: 1,
    priority: 3,
  },
];

export const mockImageArray = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  uri: `https://placehold.co/600x400/000/fff?text=Image+${i + 1}`,
}));
