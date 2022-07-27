import { printSystem } from "/Users/raulbigoriaescobedo/Documents/WTW/practice/wtwKataSantiago/GildedRose-Refactoring-Kata/TypeScript/test/items";
import { SystemOut } from "/Users/raulbigoriaescobedo/Documents/WTW/practice/wtwKataSantiago/GildedRose-Refactoring-Kata/TypeScript/test/SystemOut";

const testPrint = jest.fn();

class SystemSpy implements SystemOut {
  out = "";
  print(text) {
    this.out += text;
  }
  printEmptyLine() {
    this.out += "";
  }
  getOut() {
    return this.out;
  }
}

describe("Gilded Rose", () => {
  it("test_system_out", () => {
    let systemSpy = new SystemSpy();
    printSystem(2, systemSpy);
    expect(systemSpy.getOut()).toEqual(
      "-------- day 0 --------" +
        "name, sellIn, quality" +
        "+5 Dexterity Vest 10 20" +
        "Aged Brie 2 0" +
        "Elixir of the Mongoose 5 7" +
        "Sulfuras, Hand of Ragnaros 0 80" +
        "Sulfuras, Hand of Ragnaros -1 80" +
        "Backstage passes to a TAFKAL80ETC concert 15 20" +
        "Backstage passes to a TAFKAL80ETC concert 10 49" +
        "Backstage passes to a TAFKAL80ETC concert 5 49" +
        "Conjured Mana Cake 3 6" +
        "" +
        "-------- day 1 --------" +
        "name, sellIn, quality" +
        "+5 Dexterity Vest 9 19" +
        "Aged Brie 1 1" +
        "Elixir of the Mongoose 4 6" +
        "Sulfuras, Hand of Ragnaros 0 80" +
        "Sulfuras, Hand of Ragnaros -1 80" +
        "Backstage passes to a TAFKAL80ETC concert 14 21" +
        "Backstage passes to a TAFKAL80ETC concert 9 50" +
        "Backstage passes to a TAFKAL80ETC concert 4 50" +
        "Conjured Mana Cake 2 5" +
        ""
    );
  });
});
