import React from 'react'
import {render, screen, firevent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Sidebar from './Sidebar'

describe('Sidebar Componenet', () => {
    test('render menu items', () => {
        render(<Sidebar />);
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        expect(screen.getByText('Add Task')).toBeInTheDocument();
        expect(screen.getByText('Profile')).toBeInTheDocument();
        expect(screen.getByText('Settings')).toBeInTheDocument();
    });
})