import { TestPipe } from './test.pipe';

describe('TestPipe', () => {
  it('create an instance', () => {
    const pipe = new TestPipe();
    expect(pipe.transform(10)).toBe('F');
  });
});
