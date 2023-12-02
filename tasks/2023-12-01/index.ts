type Gift = string;

export class GiftRegistry {
  private readonly children: Map<number, Gift[]> = new Map();

  addGift(id: number, gift: string): void {
    const gifts = this.children.get(id) ?? [];

    gifts.push(gift);

    this.children.set(id, gifts);
  }

  removeGift(id: number, gift: string): void {
    const gifts = this.children.get(id);

    if (!gifts) {
      throw new Error('Child not found');
    }

    const index = gifts.indexOf(gift);

    if (index === -1) {
      throw new Error('Gift not found');
    }

    gifts.splice(index, 1);
    this.children.set(id, gifts);
  }

  getGiftsForChild(id: number): Gift[] | null {
    return this.children.get(id) ?? null;
  }
}
