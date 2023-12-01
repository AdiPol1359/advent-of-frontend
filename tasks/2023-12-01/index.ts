type Gift = string;

interface Child {
  readonly id: number;
  readonly gifts: Gift[];
}

export class GiftRegistry {
  private readonly children: Child[] = [];

  addGift(id: number, gift: string): void {
    const child = this.findChildById(id);

    if (child) {
      child.gifts.push(gift);
    } else {
      this.children.push({ id, gifts: [gift] });
    }
  }

  removeGift(id: number, gift: string): void {
    const child = this.findChildById(id);

    if (!child) {
      throw new Error('Child not found');
    }

    const giftIndex = child.gifts.indexOf(gift);

    if (giftIndex === -1) {
      throw new Error('Gift not found');
    }

    child.gifts.splice(giftIndex, 1);
  }

  getGiftsForChild(id: number): Gift[] | null {
    return this.findChildById(id)?.gifts || null;
  }

  private findChildById(id: number): Child | null {
    return this.children.find((child) => child.id === id) || null;
  }
}
