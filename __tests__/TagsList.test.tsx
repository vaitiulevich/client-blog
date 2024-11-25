import { TagsList } from '@/app/[locales]/category/_components/TagsList';
import { render, screen, fireEvent } from '@testing-library/react';
import { useTranslations } from 'next-intl';

jest.mock('@/constants/tags', () => ({
  tags: [
    { id: 1, title: 'Tag 1' },
    { id: 2, title: 'Tag 2' },
    { id: 3, title: 'Tag 3' },
  ],
}));

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(),
}));

describe('TagsList Component', () => {
  const mockOnChangeTags = jest.fn();

  beforeEach(() => {
    (useTranslations as jest.Mock).mockReturnValue((key: string) => key);
  });

  test('renders tags correctly', () => {
    render(<TagsList selectedTags={[]} onChangeTags={mockOnChangeTags} />);

    expect(screen.getByText('Tag 1')).toBeInTheDocument();
    expect(screen.getByText('Tag 2')).toBeInTheDocument();
    expect(screen.getByText('Tag 3')).toBeInTheDocument();
  });

  test('calls onChangeTags with selected tags', () => {
    render(<TagsList selectedTags={[]} onChangeTags={mockOnChangeTags} />);

    fireEvent.click(screen.getByText('Tag 1'));
    expect(mockOnChangeTags).toHaveBeenCalledWith([1]);

    fireEvent.click(screen.getByText('Tag 1'));
    expect(mockOnChangeTags).toHaveBeenCalledWith([1]);
  });

  test('renders selected tags correctly', () => {
    render(<TagsList selectedTags={[1]} onChangeTags={mockOnChangeTags} />);

    const selectedTag = screen.getByText('Tag 1').closest('button');
    expect(selectedTag).toHaveClass('bg-yellow border-yellow');

    expect(screen.getByText('Tag 2').closest('button')).not.toHaveClass(
      'bg-yellow border-yellow'
    );
    expect(screen.getByText('Tag 3').closest('button')).not.toHaveClass(
      'bg-yellow border-yellow'
    );
  });
});
