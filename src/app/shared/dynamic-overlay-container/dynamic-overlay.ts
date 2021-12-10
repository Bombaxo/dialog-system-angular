import {
  Overlay,
  ScrollStrategyOptions,
  OverlayKeyboardDispatcher,
  OverlayPositionBuilder,
  OverlayOutsideClickDispatcher
} from '@angular/cdk/overlay';
import { Location } from '@angular/common';
import { ComponentFactoryResolver, Injectable, Injector, NgZone, Optional } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { DynamicOverlayContainer } from './dynamic-overlay-container';

/**************************************************************************************
 *    Code solution adapted from: 
 *    https://github.com/reppners/ngx-cdk-dynamic-overlay-container
**************************************************************************************/

@Injectable()
export class DynamicOverlay extends Overlay {

  private dynamicOverlayContainer: DynamicOverlayContainer;

  constructor(
    scrollStrategies: ScrollStrategyOptions,
    overlayContainer: DynamicOverlayContainer,
    componentFactoryResolver: ComponentFactoryResolver,
    positionBuilder: OverlayPositionBuilder,
    keyboardDispatcher: OverlayKeyboardDispatcher,
    injector: Injector,
    ngZone: NgZone,
    directionality: Directionality,
    @Optional() location: Location,
    outsideClickDispatcher: OverlayOutsideClickDispatcher
  ) {
    super(
      scrollStrategies,
      overlayContainer,
      componentFactoryResolver,
      positionBuilder,
      keyboardDispatcher,
      injector,
      ngZone,
      document,
      directionality,
      location,
      outsideClickDispatcher
    );

    this.dynamicOverlayContainer = overlayContainer;
  }

  public setContainerElement(containerElement: HTMLElement): void {
    this.dynamicOverlayContainer.setContainerElement(containerElement);
  }
}
