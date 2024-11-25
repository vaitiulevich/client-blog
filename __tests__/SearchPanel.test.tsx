import { SearchPanel } from '@/app/[locales]/category/_components/SearchPanel';
import { render, screen, fireEvent } from '@testing-library/react';

jest.mock('@/constants/tags', () => ({
  tags: [
    { id: 1, title: 'JavaScript' },
    { id: 2, title: 'React' },
    { id: 3, title: 'Node.js' },
  ],
}));

describe('SearchPanel Component', () => {
  const handleSearchChange = jest.fn();

  beforeEach(() => {
    render(<SearchPanel handleSearchChange={handleSearchChange} />);
  });

  test('renders input and button', () => {
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  test('filters tags based on input', () => {
    fireEvent.change(screen.getByPlaceholderText('Search'), {
      target: { value: 'React' },
    });

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.queryByText('JavaScript')).not.toBeInTheDocument();
    expect(screen.queryByText('Node.js')).not.toBeInTheDocument();
  });

  test('selects a tag and calls handleSearchChange', () => {
    fireEvent.change(screen.getByPlaceholderText('Search'), {
      target: { value: 'React' },
    });

    fireEvent.click(screen.getByText('React'));
    expect(handleSearchChange).toHaveBeenCalledWith(2);
  });

  test('does not call handleSearchChange if no tag is selected', () => {
    fireEvent.change(screen.getByPlaceholderText('Search'), {
      target: { value: 'Python' },
    });

    fireEvent.click(screen.getByRole('button', { name: /search/i }));
    expect(handleSearchChange).not.toHaveBeenCalled();
  });
});
