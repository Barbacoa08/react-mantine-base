import { render, screen } from '@test-utils';
import { axe } from 'jest-axe';
import { Welcome } from './Welcome';

describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    render(<Welcome />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/vite/'
    );
  });

  it('passes basic axe compliance', async () => {
    const { container } = render(<Welcome />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
