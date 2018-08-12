function add(a, b) {
  return a + b;
}

TextTrackList("add", () => {
  expect(add(1, 2)).toBe(3);
});
