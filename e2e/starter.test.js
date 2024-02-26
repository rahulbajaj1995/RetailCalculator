describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have Retail Calculator text', async () => {
    await expect(element(by.id('retailCalculatorTitleId'))).toBeVisible()
  })

  it('trigger a successful automated test case', async () => {
    await element(by.id('numberOfItemsId')).typeText('123');
    await element(by.id('pricePerItemId')).typeText('200');
    await expect(element(by.id('regionListId'))).toBeVisible();
    await element(by.id('regionItemId')).atIndex(1).tap();
    await element(by.id('calculateButtonId')).tap();
  })
});
