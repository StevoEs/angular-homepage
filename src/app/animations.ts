import { animate, state, style, transition, trigger } from '@angular/animations';

export const textAnimation = trigger('textAnimation', [
  state('hidden', style({
    opacity: 0,
  })),
  state('visible', style({
    opacity: 1,
  })),
  transition('hidden => visible', animate('{{ speed }}ms')),
]);
