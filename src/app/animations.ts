import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation =
trigger('routeAnimations', [
  transition('* => *', [
    //style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        //position: 'absolute',
        top: 0,
        opacity: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0 })
    ], { optional: true }),
    //query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('100ms ease-out', style({ opacity: 0, position: 'absolute' }))
      ], { optional: true }),
      query(':enter', [
        animate('1000ms ease-out', style({ opacity: 1 }))
      ], { optional: true })
    ]),
    //query(':enter', animateChild()),
  ])
])

