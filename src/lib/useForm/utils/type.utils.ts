import { RefTarget } from '../types';

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isSelectElement(
  target: RefTarget,
): target is HTMLSelectElement {
  return target.tagName === 'SELECT';
}

export function isCheckBoxElement(
  target: RefTarget,
): target is HTMLInputElement {
  return target.type === 'checkbox';
}
