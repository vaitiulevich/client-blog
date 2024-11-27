import { PopupType } from '@/types/enums';

export interface PopupProps {
  isOpen: boolean;
  message: string | null;
  type: PopupType;
  onClose: () => void;
}
