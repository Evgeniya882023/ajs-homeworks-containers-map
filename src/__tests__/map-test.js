import ErrorRepository from '../map';

const err = new ErrorRepository();

test('Проверка содержания ошибки 1', () => {
  expect(err.translate(1)).toBe('Ошибка 1');
});

test('Проверка отсутствия кода', () => {
  expect(err.translate(501)).toBe('Unknown error');
});
