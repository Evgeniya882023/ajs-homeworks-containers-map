export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(1, 'Ошибка 1');
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
