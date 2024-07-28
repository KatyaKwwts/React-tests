import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest'; // Імпортуємо функцію для створення "mock" функцій з Vitest
import PostForm from './PostForm'; // Імпортуємо компонент, який будемо тестувати

test('calls onSubmit with the title and body when form is submitted', () => {
  // Створюємо "mock" функцію для перевірки виклику onSubmit
  const handleSubmit = vi.fn();

  // Рендеримо компонент PostForm з "mock" функцією як проп onSubmit
  const { getByLabelText, getByText } = render(<PostForm onSubmit={handleSubmit} />);

  // Знаходимо елементи за їхнім текстовим змістом та виконуємо зміни в полях вводу
  fireEvent.change(getByLabelText(/Title/i), { target: { value: 'Test Title' } });
  fireEvent.change(getByLabelText(/Body/i), { target: { value: 'Test Body' } });

  // Імітуємо клік на кнопці для відправки форми
  fireEvent.click(getByText(/Create Post/i));

  // Перевіряємо, що "mock" функція handleSubmit була викликана з правильними значеннями
  expect(handleSubmit).toHaveBeenCalledWith({ title: 'Test Title', body: 'Test Body' });

  // Перевіряємо, що поля вводу очищені після відправки форми
  expect(getByLabelText(/Title/i).value).toBe('');
  expect(getByLabelText(/Body/i).value).toBe('');
});
