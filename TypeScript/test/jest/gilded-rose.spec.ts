import { expect } from "chai";
import { GildedRose, Names, Item } from "@/gilded-rose";

function assertItemEq(actual, expected) {
  expect(actual.name).to.be.eq(expected.name);
  expect(actual.sellIn).to.be.eq(expected.sellIn);
  expect(actual.quality).to.be.eq(expected.quality);
}

describe("Random item tests", () => {
  it("Random item regular scenario", () => {
    const gildedRose = new GildedRose([new Item("Test", 20, 20)]);
    gildedRose.updateQuality();
    assertItemEq(gildedRose.items[0], new Item("Test", 19, 19));
  });
  it("Random item sellin 0", () => {
    const gildedRose = new GildedRose([new Item("Test", 0, 10)]);
    gildedRose.updateQuality();
    assertItemEq(gildedRose.items[0], new Item("Test", -1, 8));
  });
});

describe("Sulfuras tests", () => {
  it("Sulfuras inmutable", () => {
    const gildedRose = new GildedRose([new Item(Names.SULFURAS, 20, 80)]);
    gildedRose.updateQuality();
    assertItemEq(gildedRose.items[0], new Item(Names.SULFURAS, 20, 80));
  });
});

describe("Brie tests", () => {
  it("Increase quality by getting older", () => {
    const gildedRose = new GildedRose([new Item(Names.BRIE, 20, 40)]);
    gildedRose.updateQuality();
    assertItemEq(gildedRose.items[0], new Item(Names.BRIE, 19, 41));
  });

  it("Increase quality faster when expirated", () => {
    const gildedRose = new GildedRose([new Item(Names.BRIE, -1, 32)]);
    gildedRose.updateQuality();
    assertItemEq(gildedRose.items[0], new Item(Names.BRIE, -2, 34));
  });
});

describe("Backstage tests", () => {
  it("Increase quality by getting near the date", () => {
    const gildedRose = new GildedRose([new Item(Names.BACKSTAGE_PASS, 20, 40)]);
    gildedRose.updateQuality();
    assertItemEq(gildedRose.items[0], new Item(Names.BACKSTAGE_PASS, 19, 41));
  });

  it("Increase quality faster 10 days or less", () => {
    const gildedRose = new GildedRose([new Item(Names.BACKSTAGE_PASS, 9, 32)]);
    gildedRose.updateQuality();
    assertItemEq(gildedRose.items[0], new Item(Names.BACKSTAGE_PASS, 8, 34));
  });
  it("Increase quality faster 5 days or less", () => {
    const gildedRose = new GildedRose([new Item(Names.BACKSTAGE_PASS, 4, 32)]);
    gildedRose.updateQuality();
    assertItemEq(gildedRose.items[0], new Item(Names.BACKSTAGE_PASS, 3, 35));
  });
  it("Quality drop to 0", () => {
    const gildedRose = new GildedRose([new Item(Names.BACKSTAGE_PASS, 0, 32)]);
    gildedRose.updateQuality();
    assertItemEq(gildedRose.items[0], new Item(Names.BACKSTAGE_PASS, -1, 0));
  });

  it("Quality remains in 0", () => {
    const gildedRose = new GildedRose([new Item(Names.BACKSTAGE_PASS, -1, 0)]);
    gildedRose.updateQuality();
    assertItemEq(gildedRose.items[0], new Item(Names.BACKSTAGE_PASS, -2, 0));
  });
});

describe("Conjured tests", () => {
  it("Decrease quality by getting older", () => {
    const gildedRose = new GildedRose([new Item(Names.CONJURED, 20, 40)]);
    gildedRose.updateQuality();
    assertItemEq(gildedRose.items[0], new Item(Names.CONJURED, 19, 38));
  });

  it("Decrease quality faster when expirated", () => {
    const gildedRose = new GildedRose([new Item(Names.CONJURED, -1, 32)]);
    gildedRose.updateQuality();
    assertItemEq(gildedRose.items[0], new Item(Names.CONJURED, -2, 28));
  });
});
