import { render, screen } from '@testing-library/react';
import Logo from '@/components/ui/Logo';

describe('Logo', () => {
  it('renders the logo', () => {
    render(<Logo />);
    const logo = screen.getByRole('img', { name: /logo/i });
    expect(logo).toBeInTheDocument();
  });
});
