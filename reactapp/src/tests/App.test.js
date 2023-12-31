import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

test('checks_image_visible', () => {
  render(<App />); // Render your component

  // Use getByAltText to find the image by its alt attribute
  const image = getByAltText('GenC Logo');

  // Assert that the image is in the document
  expect(image).toBeInTheDocument();

  // You can also check other properties of the image, such as its source URL
  expect(image).toHaveAttribute('src', 'https://i.pinimg.com/736x/a6/ac/ec/a6acec062d7954d8fb01198429042c6b.jpg');
});


test('checks_if_Student_List_text_available', () => {
  render(<App />);

  const studentListText = getByText('View Student List');

  expect(studentListText).toBeInTheDocument();
});

test('checks_Add_Student_available', () => {
  render(<App />);

  const studentListText = getByText('Add Student');

  expect(studentListText).toBeInTheDocument();
});