# Dialog system Angular Material

This repository brings a solution to standardize the dialog system in an app. And tries to cover all possible cases. Feel **free** to contribute to improve it 🤙.

#### [🤓 Stackblitz](https://stackblitz.com/github/Bombaxo/dialog-system-angular "Stackblitz")
#### [🚀 Live-demo](https://owaimvnkl.github.stackblitz.io "Live-demo")


The `DialogService` uses `DialogComponent` as a wrapper and injects into `MatDialog` with the parameters  `MatDialogConfig`, which comes inside the parent object, named as `DialogConfig`. `DialogService` has a default init for `DialogConfig`, which can be overwriten from the call of `dialogService.open(dialogConfig)` when needed, from your app. And it returns `DialogResponse`.

```typescript
export interface DialogConfig {
    showCloseIcon?: boolean;            // Display right corner dialog close button
    component?: any;                    // Component to inyect into DialogComponent
    templateType: DialogTemplateType;   // Type of tempalte to use, inyected component or message
    matDialogConfig?: MatDialogConfig;  // Material dialog options
    dialogContent?: DialogContent;      // Message props for alerts and confirm dialogs
}

export interface DialogResponse {
    action: string;
    data?: any;
}
```
 

#  Use

#### Regular cases (alerts, confirm action or component inyection)

`MatDialogConfig` can be used as normal for behaviour or passing data to the inyected component.

* Component inyection into the dialog - `DialogConfig`

```typescript
const dialogConfig: DialogConfig = {
    templateType: "component",
    component: ExampleFormComponent,
    matDialogConfig: {
        panelClass: ["dialog__mob-fullscreen"],
        width: "300px",
        disableClose: true,
        data: {
            param: "data",
        },
    },
};

this.dialogService.open(dialogConfig);
```

* `DialogComponent` injects the component or display the `DialogMessageComponent`. And uses `DialogContent` to set whether alert or confim action type.

```typescript
const dialogContent: DialogContent = {
    title: "Hey!",
    content: [
        "Are you sure you want to cancel the appointment?",
        "Appointment time: 21:30 of Friday 24.11.21",
    ],
    primaryButton: {
        label: "Delete",
        color: "warn",
        icon: "report",
        action: "book-cancelled",
    },
    secondaryButton: {
        label: "Cancel",
        icon: "close",
    },
};

const dialogConfig: DialogConfig = {
    templateType: "message",
    dialogContent: dialogContent,
    matDialogConfig: {
        disableClose: true,
    },
};

this.dialogService
    .open(dialogConfig)
    .afterClosed()
    .subscribe((response: DialogResponse) => {});
```

The optional secondaryButton in `DialogContent` set if it would be an alert or confirm action.

![1_Wdpwl_DRFSV1eXX36mCJaw](https://user-images.githubusercontent.com/7047758/147968326-f99b7349-d198-4178-8df7-af9a6098a849.gif)


#### Confirm inside open dialog

Targets the case when some action or info need to be shown from the open component in dialog. `DialogService` and `DialogComponent` reuse the `DialogMessageComponent` to show it inside the open component inside `DialogComponent`.


```typescript
this.dialogService
    .openInnerConfirm(dialogContent)
    .subscribe((response: DialogResponse) => {});
```

![1_pjUsB7HSQdVgXvGUfWl75g](https://user-images.githubusercontent.com/7047758/147968554-b30141a8-18ef-47c3-a201-058faa9261f8.gif)



#### DynamicOverlay

The source of this solution can be found in this repo **[🤓 NgxCdkDynamicOverlayContainer](https://github.com/reppners/ngx-cdk-dynamic-overlay-container)**.

Let's see the integration in our example.


```typescript
export interface DialogConfig {
    ...
    overlayBlur?: boolean;              // Overlay should be blury (css selector)
    overlayCustomRender?: Renderer2,    // Renderer of the element for the targeted overlay
    overlayCustomElement?: ElementRef,  // ElementRef of the element for the targeted overlay
    ...
}
```

```typescript
const dialogConfig: DialogConfig = {
      overlayBlur: true,
      overlayCustomRender: this.renderer,
      overlayCustomElement: this.overlayCustomDialogMain,
      templateType: "component",
      component: ExampleSubcriptionComponent,
      matDialogConfig: {
        panelClass: ["dialog", "dialog__full-screen"],
        disableClose: true
      },
    };

this.dialogService
    .open(dialogConfig)
    .afterClosed()
    .subscribe((response: DialogResponse) => {});
```

For `dialogService.openCustomDialog()` we need to set and pass the `ElementRef` of the template where we want to display the customoverlay and the `Renderer2` of the component where this `ElementRef` is. Otherwise the call will backup to `dialogService.open()`

![1_qxa7Umk2LNUz6NZRQQ06iA](https://user-images.githubusercontent.com/7047758/147968627-bee8dd4e-edd8-4fcb-89fd-4613aabd375b.gif)


