import { MyStorageImpl, UnifiedStorageAbstractFactory } from "../src/unified-storage";

declare global {
  namespace NodeJS {
    interface Global {
      myStorage: MyStorageImpl;
      storage: UnifiedStorageAbstractFactory;
    }
  }
}