import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewForm from './review-form.tsx';
import { withHistory, withStore } from '../../mocks/mock-components.tsx';

describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    const id = 'id';
    const { withStoreComponent } = withStore(<ReviewForm id={id} />, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getAllByTestId('star')).toHaveLength(10);
    expect(screen.getByText('Post')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render correctly when user enter login and password', async () => {
    const expectedReviewValue = 'review';
    const id = 'id';
    const { withStoreComponent } = withStore(<ReviewForm id={id} />, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    await userEvent.type(screen.getByTestId('comment'), expectedReviewValue);
    await userEvent.click(screen.getAllByTestId('star')[3]);

    expect(screen.getByDisplayValue(expectedReviewValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(4)).toBeInTheDocument();
  });
});
