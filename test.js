
const _ = require('lodash');
const esmImport = require('esm')(module);

const methods = {
  explicit: esmImport('./1-explicit/usage'),
  verbose: esmImport('./2-verbose/usage'),
  dry: esmImport('./3-dry/usage'),
  middleground: esmImport('./4-middleground/usage'),
  'screaming-snake': esmImport('./5-screaming-snake/usage'),
  'alternative-screaming-snake': esmImport('./6-alternative-screaming-snake/usage'),
};

_.forEach(methods, ({ action, state }, name) => {
  describe(name, () => {
    test(`action (type: ${action.type})`, () => {
      expect(_.omit(action, 'type')).toEqual({ payload: 'foo' });
    });
    test('state', () => {
      expect(state).toEqual({ requested: 'foo' });
    });
  });
});
