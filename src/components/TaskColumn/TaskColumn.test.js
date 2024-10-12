import React from 'react'
import TaskColumn from './TaskColumn'
import { render, screen } from '@testing-library/react';

describe('TaskColumn Component', () => {
    const mockTasks = [
      { id: 1, title: 'Task 1', description: 'Description 1' },
      { id: 2, title: 'Task 2', description: 'Description 2' },
    ];
  
    const mockOnDelete = jest.fn();
    const mockOnEdit = jest.fn();
    test('renders column with title and tasks', () => {
        render(
          <TaskColumn
            title="To Do"
            tasks={mockTasks}
            columnId="column-1"
            onDelete={mockOnDelete}
            onEdit={mockOnEdit}
          />
        );
        expect(screen.getByText('To Do')).toBeInTheDocument();
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();
      });
});