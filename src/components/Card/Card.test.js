import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';

const mockOnEdit = jest.fn();
const mockOnDelete = jest.fn();
    test('renders card ', () => {
        render(<Card />);
        expect(screen.getByText(mockTask.title)).toBeInTheDocument();
        expect(screen.getByText(mockTask.description)).toBeInTheDocument();
        expect(screen.getByText(/Estimated Time:/)).toHaveTextContent(`${mockTask.estimatedTime}`);
        expect(screen.getByText(/Scheduled Date:/)).toHaveTextContent(mockTask.dueDate);
      });