import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withHistory } from '../../mocks/mock-components.tsx';
import Footer from './footer.tsx';

describe('Component: Footer', () => {
  it('should render correct', () => {
    const withHistoryComponent = withHistory(<Footer />);
    render(withHistoryComponent);
    expect(screen.getByText(/2019 What to watch Ltd/i)).toBeInTheDocument();
  });
});
