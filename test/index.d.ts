import { TestStorageImpl, UnifiedStorageAbstractFactory } from "../src/unified-storage";

declare global {
  namespace NodeJS {
    interface Global {
      myStorage: TestStorageImpl;
      storage: UnifiedStorageAbstractFactory;
    }
  }
}
