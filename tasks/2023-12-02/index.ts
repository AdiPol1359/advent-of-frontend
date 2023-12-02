export class ChristmasQueue<T> {
  private readonly data: Map<number, T[]> = new Map();

  enqueue(value: T, priority: number): void {
    const items = this.data.get(priority) || [];

    items.push(value);

    this.data.set(priority, items);
  }

  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error('There are no letters in the queue!');
    }

    const priority = [...this.data.keys()].sort((a, b) => b - a)[0];
    const items = this.data.get(priority) || [];
    const item = items.shift();

    if (!item) {
      throw new Error('Item not found!');
    }

    if (items.length === 0) {
      this.data.delete(priority);
    } else {
      this.data.set(priority, items);
    }

    return item;
  }

  isEmpty(): boolean {
    return this.data.size === 0;
  }
}
