import { Iamport } from '@/lib';

export {};

declare global {
  interface Window {
    IMP: Iamport;
    Kakao: any;
  }
}
