'use client';

import { useRouter } from '@/i18n/routing';
import { Button } from 'clients-blogs-ui-kit';

export const ButtonNavigate = ({
  path,
  text,
}: {
  path: string;
  text: string;
}) => {
  const router = useRouter();
  const handleNavigateToPost = () => {
    router.push(path);
  };
  return (
    <Button label={text} isNavigate={true} onClick={handleNavigateToPost} />
  );
};
