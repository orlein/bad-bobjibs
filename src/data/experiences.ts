interface Experience {
  id: number;
  restaurantId: number; // to link experiences with specific restaurants
  user: string;
  date: string;
  content: string;
  photos: string[];
}

export const experiences: Experience[] = [
  // Restaurant 0 (Joe's Diner)
  {
    id: 1,
    restaurantId: 0,
    user: 'Sarah M.',
    date: '2024-03-15',
    content:
      "Found hair in my soup. When I brought this to the manager's attention, they apologized and comped the meal, but I'm still concerned about their kitchen hygiene.",
    photos: ['/mock-photo-1.jpg'],
  },
  {
    id: 2,
    restaurantId: 0,
    user: 'Anonymous',
    date: '2024-03-14',
    content:
      "The refrigerator temperature was clearly too high. I could feel my food wasn't properly cold.",
    photos: [],
  },

  // Restaurant 1 (Golden Dragon)
  {
    id: 3,
    restaurantId: 1,
    user: 'Mike R.',
    date: '2024-03-14',
    content:
      'Witnessed kitchen staff handling raw meat and then vegetables without changing gloves or washing hands.',
    photos: ['/mock-photo-2.jpg', '/mock-photo-3.jpg'],
  },
  {
    id: 4,
    restaurantId: 1,
    user: 'Lisa K.',
    date: '2024-03-13',
    content:
      'Saw cockroaches in the dining area. Immediately left and reported to management.',
    photos: ['/mock-photo-4.jpg'],
  },

  // Restaurant 2 (Seafood Express)
  {
    id: 5,
    restaurantId: 2,
    user: 'David W.',
    date: '2024-03-13',
    content:
      "Got food poisoning after eating here. The seafood didn't taste fresh.",
    photos: [],
  },
  {
    id: 6,
    restaurantId: 2,
    user: 'Anonymous',
    date: '2024-03-12',
    content:
      'Raw seafood was sitting out at room temperature during prep. Very concerning.',
    photos: ['/mock-photo-5.jpg'],
  },

  // Restaurant 3 (Burger Spot)
  {
    id: 7,
    restaurantId: 3,
    user: 'Chris T.',
    date: '2024-03-12',
    content:
      "The tables and floors were sticky. Clearly hadn't been cleaned properly in a while.",
    photos: ['/mock-photo-6.jpg'],
  },

  // Restaurant 4 (Coffee Haven)
  {
    id: 8,
    restaurantId: 4,
    user: 'Emma S.',
    date: '2024-03-11',
    content:
      'The milk for my coffee smelled off. When I mentioned it, they checked and found expired dairy products.',
    photos: [],
  },

  // Restaurant 6 (Sushi Palace)
  {
    id: 9,
    restaurantId: 6,
    user: 'Anonymous',
    date: '2024-03-09',
    content:
      'Saw mice running across the floor during dinner. Absolutely unacceptable.',
    photos: ['/mock-photo-7.jpg'],
  },
  {
    id: 10,
    restaurantId: 6,
    user: 'John D.',
    date: '2024-03-08',
    content:
      'Found a piece of plastic in my sushi roll. The staff seemed unconcerned when I reported it.',
    photos: ['/mock-photo-8.jpg'],
  },
];

export type { Experience };
