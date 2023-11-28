import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import PlayPauseButton from './play-pause-button.tsx';

describe('Component: PauseButton', () => {
  it('should render correct', () => {
    const onClick = vi.fn;

    render(<PlayPauseButton onClick={onClick} isPlaying />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
