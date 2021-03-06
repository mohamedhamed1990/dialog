System.register(["aurelia-templating", "aurelia-pal"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_templating_1, aurelia_pal_1, AttachFocus;
    return {
        setters: [
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            }
        ],
        execute: function () {
            AttachFocus = (function () {
                function AttachFocus(element) {
                    this.element = element;
                    this.value = true;
                }
                AttachFocus.prototype.attached = function () {
                    if (this.value && this.value !== 'false') {
                        this.element.focus();
                    }
                };
                AttachFocus.prototype.valueChanged = function (newValue) {
                    this.value = newValue;
                };
                return AttachFocus;
            }());
            /**
             * @internal
             */
            AttachFocus.inject = [aurelia_pal_1.DOM.Element];
            AttachFocus = __decorate([
                aurelia_templating_1.customAttribute('attach-focus')
            ], AttachFocus);
            exports_1("AttachFocus", AttachFocus);
        }
    };
});
