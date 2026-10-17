// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RectifierScale title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RectifierScale/i);
    expect(titleElement).toBeInTheDocument();
});
