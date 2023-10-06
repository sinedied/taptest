import t from 'tap';

t.test('test', async t => {
  t.nock.snapshot();

  t.equal(1, 1);
  t.end();
});
