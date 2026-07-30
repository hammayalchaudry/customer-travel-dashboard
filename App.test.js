import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock ResizeObserver for Recharts responsiveness
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Frontend UI Component Tests', () => {

  // Test 1: Render Header
  test('renders dashboard main header', () => {
    render(<App />);
    expect(screen.getByText(/Customer Travel Management/i)).toBeInTheDocument();
  });

  // Test 2: Switch Customer
  test('switches active customer profile on tab click', () => {
    render(<App />);
    const tab = screen.getByRole('button', { name: /Sarah Ahmed/i });
    fireEvent.click(tab);
    expect(screen.getByText(/sarah.a@example.com/i)).toBeInTheDocument();
  });

  // Test 3: Dark Mode Toggle
  test('toggles dark mode class on body', () => {
    render(<App />);
    const darkBtn = screen.getByRole('button', { name: /Dark/i });
    fireEvent.click(darkBtn);
    expect(document.body.classList.contains('dark-mode')).toBe(true);
  });

  // Test 4: Open Add Customer Modal (Specifically targets button role)
  test('opens add customer modal on button click', () => {
    render(<App />);
    const addBtn = screen.getByRole('button', { name: /Add New Customer/i });
    fireEvent.click(addBtn);
    expect(screen.getByRole('heading', { name: /Add New Customer/i })).toBeInTheDocument();
  });

  // Test 5: Status Change Click
  test('updates flight status to Delayed on click', () => {
    render(<App />);
    const delayBtns = screen.getAllByText(/⏱️ Delay/i);
    fireEvent.click(delayBtns[0]);
    expect(screen.getByText('Delayed')).toBeInTheDocument();
  });

});