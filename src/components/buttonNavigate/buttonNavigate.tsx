'use client';

import { Button } from 'clients-blogs-ui-kit';

import { useRouter } from '@/i18n/routing';

interface ButtonNavigateProps {
  path: string;
  text: string;
}

export const ButtonNavigate = ({ path, text }: ButtonNavigateProps) => {
  const router = useRouter();
  const handleNavigateToPost = () => {
    router.push(path);
  };
  return (
    <Button label={text} isNavigate={true} onClick={handleNavigateToPost} />
  );
};
