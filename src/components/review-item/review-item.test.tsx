import { describe, expect } from 'vitest';
import { makeFakeComment } from '../../mocks/mock-data.ts';
import ReviewItem from './review-item.tsx';
import { render, screen } from '@testing-library/react';

describe('Component: ReviewItem', () => {
  it('should render correct', () => {
    const comment = makeFakeComment();

    render(<ReviewItem comment={comment} />);

    expect(screen.queryByText(comment.comment)).toBeInTheDocument();
    expect(screen.getByText(comment.user)).toBeInTheDocument();
  });
});
