'use client';

import { Button } from 'clients-blogs-ui-kit';

import { ButtonNavigateProps } from './ButtonNavigate.types';

import { useRouter } from '@/i18n/routing';

export const ButtonNavigate = ({ path, text }: ButtonNavigateProps) => {
  const router = useRouter();
  const handleNavigateToPost = () => {
    router.push(path);
  };
  return (
    <Button label={text} isNavigate={true} onClick={handleNavigateToPost} />
  );
};
