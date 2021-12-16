import { Inject, Injectable, Injector, Optional, Renderer2, SkipSelf } from '@angular/core';
import { MAT_DIALOG_SCROLL_STRATEGY, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Location } from '@angular/common';
import { DynamicOverlay } from './dynamic-overlay';

/**************************************************************************************
 *    Code solution adapted from: 
 *    https://github.com/reppners/ngx-cdk-dynamic-overlay-container
**************************************************************************************/

@Injectable()
export class DynamicMatDialog extends MatDialog {

  private customOverlay: DynamicOverlay;

  constructor(
    overlay: DynamicOverlay,
    injector: Injector,
    @Optional() location: Location,
    @Inject(MAT_DIALOG_SCROLL_STRATEGY) scrollStrategy,
    @Optional() @SkipSelf() parentDialog: DynamicMatDialog,
    overlayContainer: OverlayContainer
  ) {
    super(
      overlay,
      injector,
      location,
      {} as MatDialogConfig,
      scrollStrategy,
      parentDialog,
      overlayContainer
    );

    this.customOverlay = overlay;
  }

  public setContainerElement(containerElement: HTMLElement, renderer: Renderer2): void {
    // need to apply this styling to make the backdrop with position: fixed styling cover only the containerElement
    renderer.setStyle(containerElement, 'overflow', 'hidden');
    renderer.setStyle(containerElement, 'transform', 'translateZ(0)');
    this.customOverlay.setContainerElement(containerElement);
  }
}
