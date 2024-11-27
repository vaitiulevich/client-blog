type Article = {
  id: number;
  subtitle: string;
  articleP: { id: number; text: string }[];
};

type Locale = 'en' | 'ru';
