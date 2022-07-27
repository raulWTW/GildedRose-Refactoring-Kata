import {
  printSystem,
  SystemOut,
} from "/Users/raulbigoriaescobedo/Documents/WTW/practice/wtwKataSantiago/GildedRose-Refactoring-Kata/TypeScript/test/golden-master-text-test";

const testPrint = jest.fn();

class SystemSpy implements SystemOut {
  print(...args) {
    testPrint(...args);
  }
}

describe("Gilded Rose", () => {
  it("should foo", () => {
    printSystem(2, new SystemSpy());
    expect(testPrint).toBeCalledWith("-------- day 0 --------");
    expect(testPrint).toBeCalledWith("name, sellIn, quality");
    expect(testPrint).toBeCalledWith("+5 Dexterity Vest 10 20");
    expect(testPrint).toBeCalledWith("Aged Brie 2 0");
    expect(testPrint).toBeCalledWith("Elixir of the Mongoose 5 7");
    expect(testPrint).toBeCalledWith("Sulfuras, Hand of Ragnaros 0 80");
    expect(testPrint).toBeCalledWith("Sulfuras, Hand of Ragnaros -1 80");
    expect(testPrint).toBeCalledWith(
      "Backstage passes to a TAFKAL80ETC concert 15 20"
    );
    expect(testPrint).toBeCalledWith("-------- day 0 --------");
    expect(testPrint).toBeCalledWith("-------- day 0 --------");
    expect(testPrint).toBeCalledWith("-------- day 0 --------");
    expect(testPrint).toBeCalledWith("-------- day 0 --------");
    expect(testPrint).toBeCalledWith("-------- day 0 --------");
    expect(testPrint).toBeCalledWith(
      "Backstage passes to a TAFKAL80ETC concert 10 49"
    );
    expect(testPrint).toBeCalledWith(
      "Backstage passes to a TAFKAL80ETC concert 5 49"
    );
    expect(testPrint).toBeCalledWith("Conjured Mana Cake 3 6");
    expect(testPrint).toBeCalledWith("");
    expect(testPrint).toBeCalledWith("-------- day 1 --------");
    expect(testPrint).toBeCalledWith("name, sellIn, quality");
    expect(testPrint).toBeCalledWith("+5 Dexterity Vest 9 19");
    expect(testPrint).toBeCalledWith("Aged Brie 1 1");
    expect(testPrint).toBeCalledWith("Elixir of the Mongoose 4 6");
    expect(testPrint).toBeCalledWith("Sulfuras, Hand of Ragnaros 0 80");
    expect(testPrint).toBeCalledWith("Sulfuras, Hand of Ragnaros -1 80");
    expect(testPrint).toBeCalledWith(
      "Backstage passes to a TAFKAL80ETC concert 14 21"
    );
    expect(testPrint).toBeCalledWith(
      "Backstage passes to a TAFKAL80ETC concert 9 50"
    );
    expect(testPrint).toBeCalledWith(
      "Backstage passes to a TAFKAL80ETC concert 4 50"
    );
    expect(testPrint).toBeCalledWith("Conjured Mana Cake 2 5");
  });
});
