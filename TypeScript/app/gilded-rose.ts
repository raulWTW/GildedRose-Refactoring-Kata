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
  /*
  'Aged Brie'
  'Backstage passes to a TAFKAL80ETC concert'
  'Sulfuras, Hand of Ragnaros'
  Conjured Mana Cake falta implementar
  +5 Dexterity Vest  any item
  "Elixir of the Mongoose"  any item 
  updateQuality --
  updateSellIn -- >=0
  BaseItem 
  */
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      // if(this.items[i].name)
      // switch this.items[i].name{

      // }
      // this.item[i].updateQuality()
      // this.item[i].updateSellIn()
      if (
        this.items[i].name != "Aged Brie" &&
        this.items[i].name != "Backstage passes to a TAFKAL80ETC concert" &&
        this.items[i].name != "Sulfuras, Hand of Ragnaros" &&
        this.items[i].quality > 0
      ) {
        this.items[i].quality = this.items[i].quality - 1; //propiedad generica
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1; //aged brie && backstage pass
          if (
            this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1; //backstage pass
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1; //backstage pass
              }
            }
          }
        }
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.items[i].sellIn = this.items[i].sellIn - 1; //generica
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (
            this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                this.items[i].quality = this.items[i].quality - 1; //generica
              }
            }
          } else {
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality; //backstage
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1; //aged brie
          }
        }
      }
    }

    return this.items;
  }
}
