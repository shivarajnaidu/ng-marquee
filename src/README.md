# ng-marquee
Angular 8+ Component For Marquee Text

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/shivarajnaidu)

( This Library Is Using Angular CLI's Library Generation Command )

## How to:

### Install npm 
```
   npm install ng-marquee --save
```

### Simple Example

#### Import Module

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMarqueeModule } from 'ng-marquee';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMarqueeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

#### Use Component
```html
<ng-marquee>
    <mark>Hello, World.... Find Me @ <a href="https://www.linkedin.com/in/shivarajnaidu/" target="__blank"> https://www.linkedin.com/in/shivarajnaidu/ (Yuvaraj)</a></mark>
</ng-marquee>
```

## API

### input property

###
`duration` property available for controlling speed of text movement
(default value is 25 in seconds)

```html
<ng-marquee duration="30">
    <mark>Hello, World.... Find Me @ <a href="https://www.linkedin.com/in/shivarajnaidu/" target="__blank"> https://www.linkedin.com/in/shivarajnaidu/ (Yuvaraj)</a></mark>
</ng-marquee>
```

## Any contributions are appreciated.
[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://paypal.me/shivarajnaidu)