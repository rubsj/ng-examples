import { Directive, Input, Output, EventEmitter, ElementRef, Renderer2, OnChanges } from '@angular/core';
import * as Mark from 'mark.js';

export interface MarkJSConfig {
  [key: string]: any;
}

let cancelAnimationId;

/** reference https://javascript.info/js-animation
 *  timing(timeFraction) - Timing function, like CSS-property transition-timing-function that gets the fraction of time 
 *  that passed (0 at start, 1 at the end) and returns the animation completion (like y on the Bezier curve).
 *  e.g. function linear(timeFraction) {
  return timeFraction;
} // That’s just like transition-timing-function: linear.
 * 
 * draw(progress) - The function that takes the animation completion state and draws it.
 *  The value progress=0 denotes the beginning animation state, and progress=1 – the end state.
 *  This is that function that actually draws out the animation.
 *  It can move the element:
 *   function draw(progress) {
  train.style.left = progress + 'px';
}
 * 
 * duration - Total time of animation. Like, 1000.
 *
 */
function animate({ timing, draw, duration }) {
  let start = performance.now();
  cancelAnimationId = requestAnimationFrame(function callAnimate(time) {
    //timefraction goes from 0 to1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) {
      timeFraction = 1;
    }

    //calculate current animation state
    const progress = timing(timeFraction);
    draw(progress); //draw it
    if (timeFraction < 1) {
      requestAnimationFrame(callAnimate);
    }
  });
}

@Directive({
  selector: '[appWrapMarkJs]'
})
export class WrapMarkJsDirective implements OnChanges {

  @Input() markjsHighlight = '';
  @Input() markjsConfig: MarkJSConfig = {};
  @Input() scrollToFirstMarked: boolean = false;

  @Output() getInstance = new EventEmitter<any>();
  markInstance: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes): void {
    if (!this.markInstance) { // emit mark.js instance (if needeed)
      this.markInstance = new Mark(this.elementRef.nativeElement);
      this.getInstance.emit(this.markInstance);
    }

    this.hightlightText();
    if (this.scrollToFirstMarked) {
      this.scrollToFirstMarkedText();// should be implemented
    }
  }

  hightlightText() {
    this.markjsHighlight = this.markjsHighlight || '';
    if (this.markjsHighlight?.length < 2) { // t is just one letter or no text at all — we unmark text and return;
      this.markInstance.unmark();
      return;
    } else { // Otherwise, we unmark previously highlighted text and start new highlighting process.
      this.markInstance.unmark({
        done: () => {
          this.markInstance.mark((this.markjsHighlight || ''), this.markjsConfig);
        }
      });
    }
  }

  /**
   * content wrapper element, where we apply our directive to should have css position set other than static (for example position: relative).
   * Otherwise offset to be scrolled to will be calculated improperly.
   */
  scrollToFirstMarkedText() {
    const content = this.elementRef.nativeElement;
    let querySelectorString = 'mark';
    if (!this.markjsConfig?.className && this.markjsConfig?.element) {
      console.error('elemnt must be provided with classname else highlight wont work');
      return;
    }
    if (this.markjsConfig?.className) {
      querySelectorString = '.' + this.markjsConfig?.className;
    }
    const querySelected = content.querySelector(querySelectorString);
    const firstOffsetTop = (querySelected || {}).offsetTop || 0;
    this.scrollSmooth(content, firstOffsetTop);
  }

  scrollSmooth(scrollElement: HTMLElement, firstOffsetTop: number) {
    const render = this.renderer;
    if (cancelAnimationId) {
      cancelAnimationFrame(cancelAnimationId);
    }
    const currentScrollTop = scrollElement.scrollTop;
    const delta = firstOffsetTop - currentScrollTop;
    animate({
      duration: 500,
      timing: function (timeFraction) {
        return timeFraction;
      },
      draw: function (progress) {
        const nextStep = currentScrollTop + progress * delta;
        render.setProperty(scrollElement, 'scrollTop', nextStep);
      }
    })

  }
}
