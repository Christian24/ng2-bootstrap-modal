import { ViewContainerRef, ComponentFactoryResolver, Type } from "@angular/core";
import { DialogComponent } from "./dialog.component";
import { DialogOptions } from "./dialog.service";
import { Observable } from "rxjs/Observable";
export declare class DialogHolderComponent {
    private resolver;
    element: ViewContainerRef;
    dialogs: Array<DialogComponent<any, any>>;
    constructor(resolver: ComponentFactoryResolver);
    addDialog<T, T1>(component: Type<DialogComponent<T, T1>>, data?: T, options?: DialogOptions): Observable<T1>;
    removeDialog(component: DialogComponent<any, any>): void;
    private _removeElement(component);
    clear(): void;
}
