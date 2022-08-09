export enum Names {
  BRIE = "Aged Brie",
  BACKSTAGE_PASS = "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS = "Sulfuras, Hand of Ragnaros",
  CONJURED = "Conjured mana bun",
}
export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.updateItemQuality(i);
      this.updateSellIn(i);
      this.updateExpiredItemQuality(i);
    }

    return this.items;
  }

  private updateItemQuality(i: number) {
    if (
      this.items[i].name != Names.BRIE &&
      this.items[i].name != Names.BACKSTAGE_PASS &&
      this.items[i].name != Names.SULFURAS &&
      this.items[i].quality > 0
    ) {
      this.checkItemQualityUpdate(i, -1); //propiedad generica
    } else {
      if (this.items[i].quality < 50) {
        this.items[i].quality = this.items[i].quality + 1; //aged brie && backstage pass
        if (this.items[i].name == Names.BACKSTAGE_PASS) {
          if (this.items[i].sellIn < 11) {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1; //backstage pass
            }
          }
          if (this.items[i].sellIn < 6) {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
        }
      }
    }
  }
  private checkItemQualityUpdate(i: number, delta) {
    this.items[i].quality = this.items[i].quality + delta;
  }

  private checkUpdateQuality() {}
  private updateExpiredItemQuality(i: number) {
    if (this.items[i].sellIn < 0) {
      if (this.items[i].name != Names.BRIE) {
        if (this.items[i].name != Names.BACKSTAGE_PASS) {
          if (this.items[i].quality > 0) {
            if (this.items[i].name != Names.SULFURAS) {
              this.items[i].quality = this.items[i].quality - 1; //generica
            }
          }
        } else {
          this.items[i].quality = this.items[i].quality - this.items[i].quality; //backstage
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
        }
      }
    }
  }

  private updateSellIn(i: number) {
    if (this.items[i].name != Names.SULFURAS) {
      this.items[i].sellIn = this.items[i].sellIn - 1;
    }
  }
}
