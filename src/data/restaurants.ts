interface Restaurant {
  name: string;
  violation: string;
  description: string;
  severity: 'high' | 'medium';
  date: string;
  lat?: number;
  lng?: number;
  image?: string;
}

export const restaurants = [
  // Critical Violations
  {
    name: "Joe's Diner",
    violation: 'Critical',
    date: '2024-03-15',
    description: 'Food temperature violation in refrigeration units',
    severity: 'high',
  },
  {
    name: 'Golden Dragon',
    violation: 'Critical',
    date: '2024-03-14',
    description: 'Cross-contamination in food preparation area',
    severity: 'high',
  },
  {
    name: 'Seafood Express',
    violation: 'Critical',
    date: '2024-03-13',
    description: 'Raw seafood stored improperly',
    severity: 'high',
  },

  // Non-Critical Violations
  {
    name: 'Burger Spot',
    violation: 'Non-Critical',
    date: '2024-03-12',
    description: 'Inadequate cleaning of non-food contact surfaces',
    severity: 'medium',
  },
  {
    name: 'Coffee Haven',
    violation: 'Non-Critical',
    date: '2024-03-11',
    description: 'Missing employee training records',
    severity: 'medium',
  },
  {
    name: 'Taco Corner',
    violation: 'Non-Critical',
    date: '2024-03-10',
    description: 'Improper labeling of storage containers',
    severity: 'medium',
  },

  // Temporary Closures
  {
    name: 'Sushi Palace',
    violation: 'Closure',
    date: '2024-03-09',
    description: 'Emergency closure due to pest infestation',
    severity: 'high',
  },
  {
    name: 'Pizza Express',
    violation: 'Closure',
    date: '2024-03-08',
    description: 'Temporary closure for sewage backup',
    severity: 'high',
  },

  // Warnings
  {
    name: 'Sandwich Shop',
    violation: 'Warning',
    date: '2024-03-07',
    description: 'First warning for improper hand washing procedures',
    severity: 'medium',
  },
  {
    name: 'Ice Cream Paradise',
    violation: 'Warning',
    date: '2024-03-06',
    description: 'Warning for inadequate cleaning schedule',
    severity: 'medium',
  },
  {
    name: 'Noodle House',
    violation: 'Warning',
    date: '2024-03-05',
    description: 'Warning for expired certifications',
    severity: 'medium',
  },

  // Fines
  {
    name: 'Steakhouse Grill',
    violation: 'Fine',
    date: '2024-03-04',
    description: '$500 fine for repeat temperature violations',
    severity: 'medium',
  },
  {
    name: 'Downtown Deli',
    violation: 'Fine',
    date: '2024-03-03',
    description: '$750 fine for operating without proper permits',
    severity: 'medium',
  },
  {
    name: 'Breakfast Club',
    violation: 'Fine',
    date: '2024-03-02',
    description: '$300 fine for improper waste disposal',
    severity: 'medium',
  },
];
