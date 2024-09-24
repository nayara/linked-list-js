const LinkedList = require("./LinkedList");

describe("LinkedList", () => {
  describe("#insertAtTheHead", () => {
    it("it adds the element to the beginning of the list", () => {
      const linkedList = new LinkedList();
      linkedList.insertAtHead(19);
      const oldHead = linkedList.head;
      linkedList.insertAtHead(42);

      expect(linkedList.head.value).toBe(42);
      expect(linkedList.head.next).toBe(oldHead);
      expect(linkedList.length).toBe(2);
    });
  });

  describe("#getByIndex", () => {
    describe("with index less than 0", () => {
      it("it returns null", () => {
        const linkedList = LinkedList.fromValues(10, 20);

        expect(linkedList.getByIndex(-1)).toBeNull();
      });
    });

    describe("with index greater than list", () => {
      it("it returns null", () => {
        const linkedList = LinkedList.fromValues(7, 8);

        expect(linkedList.getByIndex(10)).toBeNull();
      });
    });

    describe("with index 0", () => {
      it("it returns the head", () => {
        const linkedList = LinkedList.fromValues(9, 12);

        expect(linkedList.getByIndex(0).value).toBe(9);
      });
    });

    describe("with index in the middle", () => {
      it("it returns the element at the head index ", () => {
        const linkedList = LinkedList.fromValues(10, 20, 30, 40);

        expect(linkedList.getByIndex(2).value).toBe(30);
      });
    });
  });

  describe("#insertAtIndex", () => {
    describe("with index less than 0", () => {
      test("it does not insert element to the list", () => {
        const linkedList = LinkedList.fromValues(10, 20);
        linkedList.insertAtIndex(-1, 40);

        expect(linkedList.length).toBe(2);
      });
    });

    describe("with index greater than list length", () => {
      test("it does not insert element to the list", () => {
        const linkedList = LinkedList.fromValues(10, 20);
        linkedList.insertAtIndex(10, 40);

        expect(linkedList.length).toBe(2);
      });
    });

    describe("with index 0", () => {
      test("insert at the head", () => {
        const linkedList = LinkedList.fromValues(24, 44);
        linkedList.insertAtIndex(0, 30);

        expect(linkedList.head.value).toBe(30);
        expect(linkedList.head.next.value).toBe(24);
        expect(linkedList.length).toBe(3);
      });
    });

    describe("with index in the middle", () => {
      it("insert at the given index", () => {
        const linkedList = LinkedList.fromValues(10, 20, 40, 50);
        linkedList.insertAtIndex(2, 30);

        const node = linkedList.getByIndex(2);

        expect(node.value).toBe(30);
        expect(node.next.value).toBe(40);
        expect(linkedList.length).toBe(5);
      });
    });
  });

  describe("#removeHead", () => {
    it("removes the head", () => {
      const linkedList = LinkedList.fromValues(10, 20, 40, 60);
      linkedList.removeHead();

      expect(linkedList.head.value).toBe(20);
      expect(linkedList.length).toBe(3);
    });
  });

  describe("#removeAtIndex", () => {
    describe("with index less than 0", () => {
      test("it does not remove element to the list", () => {
        const linkedList = LinkedList.fromValues(10, 20);
        linkedList.removeAtIndex(-1);

        expect(linkedList.length).toBe(2);
      });
    });

    describe("with index greater than list length", () => {
      test("it does not remove element to the list", () => {
        const linkedList = LinkedList.fromValues(10, 20);
        linkedList.removeAtIndex(-1);

        expect(linkedList.length).toBe(2);
      });
    });

    describe("with index 0", () => {
      test("remove the head", () => {
        const linkedList = LinkedList.fromValues(24, 44, 90);
        linkedList.removeAtIndex(0);

        expect(linkedList.head.value).toBe(44);
        expect(linkedList.head.next.value).toBe(90);
        expect(linkedList.length).toBe(2);
      });
    });

    describe("with index in the middle", () => {
      it("remove at the given index", () => {
        const linkedList = LinkedList.fromValues(10, 20, 40, 50);
        linkedList.removeAtIndex(2);

        const node = linkedList.getByIndex(1);

        expect(node.value).toBe(20);
        expect(node.next.value).toBe(50);
        expect(linkedList.length).toBe(3);
      });
    });
  });
});
