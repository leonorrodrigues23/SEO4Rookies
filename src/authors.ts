export interface Author {
  name: string;
  title: string;
  image: string;
  bio: string;
}

const authors: Record<string, Author> = {
  'alex-torres': {
    name: 'Alex Torres',
    title: 'SEO Editor',
    image: '/images/Authors images of the review articles/alex-torres.jpg',
    bio: 'Former agency SEO strategist turned consumer advocate with 13 years of hands-on experience ranking websites across competitive niches. Alex has tested over 40 SEO tools and helped hundreds of businesses choose the right software.'
  },
  'rachel-nguyen': {
    name: 'Rachel Nguyen',
    title: 'Senior SEO Writer',
    image: '/images/Authors images of the review articles/rachel-nguyen.jpg',
    bio: 'Certified digital marketing professional specializing in technical SEO and content strategy. Rachel has written over 300 articles helping businesses grow their organic traffic.'
  },
  'marcus-cole': {
    name: 'Marcus Cole',
    title: 'Technical SEO Analyst',
    image: '/images/Authors images of the review articles/marcus-cole.jpg',
    bio: 'Former Google Search Quality team contractor with deep expertise in crawling, indexing, and ranking factors. Marcus brings an insider perspective to SEO tool reviews.'
  },
  'david-kim': {
    name: 'David Kim',
    title: 'Senior Tech Editor',
    image: '/images/Authors images of the review articles/david-kim.jpg',
    bio: 'Tech enthusiast and product reviewer with over 10 years of experience testing consumer electronics and software tools.'
  },
  'james-wilson': {
    name: 'James Wilson',
    title: 'Tech Editor',
    image: '/images/Authors images of the review articles/james-wilson.jpg',
    bio: 'Former software engineer turned tech journalist. James brings a unique technical perspective to product reviews and buying guides.'
  },
  'jessica-martinez': {
    name: 'Jessica Martinez',
    title: 'Content Strategy Editor',
    image: '/images/Authors images of the review articles/jessica-martinez.jpg',
    bio: 'Content marketing expert and SEO practitioner with a passion for helping small businesses and solopreneurs compete online.'
  }
};

const categoryAuthors: Record<string, string[]> = {
  'seo': ['alex-torres', 'rachel-nguyen', 'marcus-cole'],
  'seo tools': ['alex-torres', 'rachel-nguyen', 'marcus-cole'],
  'technical seo': ['marcus-cole', 'alex-torres'],
  'content seo': ['rachel-nguyen', 'jessica-martinez'],
  'keyword research': ['alex-torres', 'rachel-nguyen'],
  'tech': ['david-kim', 'james-wilson'],
  'digital marketing': ['rachel-nguyen', 'jessica-martinez'],
  'content': ['jessica-martinez', 'rachel-nguyen'],
  'default': ['alex-torres', 'rachel-nguyen']
};

export function getAuthorByCategory(
  category: string,
  title: string = '',
  keywords: string[] = []
): Author {
  const normalizedCategory = category.toLowerCase();
  const normalizedTitle = title.toLowerCase();
  const normalizedKeywords = keywords.map(k => k.toLowerCase());

  if (
    normalizedCategory.includes('seo') ||
    normalizedTitle.includes('seo') ||
    normalizedKeywords.some(k => k.includes('seo'))
  ) {
    const seoAuthors = categoryAuthors['seo'];
    const authorKey = seoAuthors[0];
    return authors[authorKey] || authors['alex-torres'];
  }

  if (
    normalizedCategory.includes('tech') ||
    normalizedTitle.includes('tool') ||
    normalizedKeywords.some(k => ['tech', 'software', 'tool'].includes(k))
  ) {
    const authorKey = categoryAuthors['tech'][0];
    return authors[authorKey] || authors['david-kim'];
  }

  if (
    normalizedCategory.includes('content') ||
    normalizedTitle.includes('content') ||
    normalizedKeywords.some(k => ['content', 'writing', 'blog'].includes(k))
  ) {
    const authorKey = categoryAuthors['content'][0];
    return authors[authorKey] || authors['jessica-martinez'];
  }

  for (const [key, authorKeys] of Object.entries(categoryAuthors)) {
    if (normalizedCategory.includes(key)) {
      return authors[authorKeys[0]] || authors['alex-torres'];
    }
  }

  return authors['alex-torres'];
}

export function getAuthorByKey(authorKey: string): Author {
  return authors[authorKey] || authors['alex-torres'];
}

export function getAllAuthors(): Record<string, Author> {
  return authors;
}
