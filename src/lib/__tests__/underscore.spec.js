import * as _ from '../underscore';

describe('underscore', () => {
  describe('upperFirst', () => {
    it('should transform the first letter to uppercase', () => {
      expect(_.upperFirst('foo')).toBe('Foo');
      expect(_.upperFirst('FOO')).toBe('FOO');
    });
  });

  describe('camelCase', () => {
    it('should transform the string to camelCase', () => {
      expect(_.camelCase('fooBar')).toBe('fooBar');
      expect(_.camelCase('foo bar')).toBe('fooBar');
      expect(_.camelCase('Foo Bar')).toBe('fooBar');
      expect(_.camelCase('--foo-bar--')).toBe('fooBar');
      expect(_.camelCase('__FOO_BAR__')).toBe('fooBar');
    });
  });

  describe('kebab-case', () => {
    it('should transform the string to kebab-case', () => {
      expect(_.kebabCase('fooBar')).toBe('foo-bar');
      expect(_.kebabCase('foo bar')).toBe('foo-bar');
      expect(_.kebabCase('Foo Bar')).toBe('foo-bar');
      expect(_.kebabCase('--foo-bar--')).toBe('foo-bar');
      expect(_.kebabCase('__FOO_BAR__')).toBe('foo-bar');
    });
  });

  describe('uniq', () => {
    it('should remove duplicates from the array', () => {
      expect(_.uniq([1, 1, 1, 2, 2, 2])).toEqual([1, 2]);
    });
  });

  describe('escapeRegExp', () => {
    it('should escape a regex', () => {
      const chars = '-/\\^$*+?.()|[]{}';
      expect(_.escapeRegExp(chars)).toEqual(
        '\\-\\/\\\\\\^\\$\\*\\+\\?\\.\\(\\)\\|\\[\\]\\{\\}',
      );
      expect(Array.from(chars.match(_.escapeRegExp(chars)))).toEqual([chars]);
    });
  });

  describe('mapValues', () => {
    it('should create an object with the same keys as object and values generated', () => {
      expect(
        _.mapValues(
          {
            fred: { user: 'fred', age: 40 },
            pebbles: { user: 'pebbles', age: 1 },
          },
          o => o.age,
        ),
      ).toEqual({
        fred: 40,
        pebbles: 1,
      });
    });
  });

  describe('without', () => {
    it('should return the given array without the given value', () => {
      expect(_.without([2, 1, 2, 3], 2)).toEqual([1, 3]);
    });
  });

  describe('groupBy', () => {
    it('should group the given collection by the given property', () => {
      expect(_.groupBy(['one', 'two', 'three'], 'length')).toEqual({
        3: ['one', 'two'],
        5: ['three'],
      });
    });
  });

  describe('sortBy', () => {
    it('should sort the collection by the given property', () => {
      const users = [
        { user: 'fred', age: 48 },
        { user: 'barney', age: 36 },
        { user: 'fred', age: 40 },
        { user: 'barney', age: 34 },
      ];

      expect(_.sortBy(users, 'age')).toEqual([
        { user: 'barney', age: 34 },
        { user: 'barney', age: 36 },
        { user: 'fred', age: 40 },
        { user: 'fred', age: 48 },
      ]);
    });
  });

  describe('forIn', () => {
    it('should fire the callback with (value, key) for every property of the given object', () => {
      function Foo() {
        this.a = 1;
        this.b = 2;
      }
      Foo.prototype.c = 3;

      const spy = jest.fn();
      _.forIn(new Foo(), spy);

      expect(spy).toHaveBeenCalledWith(1, 'a');
      expect(spy).toHaveBeenCalledWith(2, 'b');
      expect(spy).toHaveBeenCalledWith(3, 'c');
    });
  });
});
