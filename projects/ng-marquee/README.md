# ng-marquee
Angular 6+ Component For Marquee Text

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/shivarajnaidu)

( This Library Is Using Angular CLI's Library Generation Command )

## How to:

### Install [npm](https://www.npmjs.com/package/ng-marquee) 
```
   npm install ng-marquee --save
```

## [Demo](https://stackblitz.com/github/shivarajnaidu/ng-marquee)

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

### input properties

### @Input() speed
  `speed` property available for controlling speed of text movement

#### possible values
* drowsy
* slow
* normal
* fast
* swift
* hyper

### Example

```html
<ng-marquee speed="drowsy">
    <mark>Hello, World.... Find Me @ <a href="https://www.linkedin.com/in/shivarajnaidu/" target="__blank"> https://www.linkedin.com/in/shivarajnaidu/ (Yuvaraj)</a></mark>
</ng-marquee>
```


### For Custom Speed
### @Input() duration: string

### Example

```html
<ng-marquee duration="90s">
    <mark>Hello, World.... Find Me @ <a href="https://www.linkedin.com/in/shivarajnaidu/" target="__blank"> https://www.linkedin.com/in/shivarajnaidu/ (Yuvaraj)</a></mark>
</ng-marquee>
```


### @Input() stopOnHover
  `stopOnHover` property is usefull to stop the content movement on hover

#### possible values
* true
* false

### Example

```html
<ng-marquee [stopOnHover]="true">
  <mark>Hello, World.... Find Me @ <a href="https://www.linkedin.com/in/shivarajnaidu/" target="__blank">
      https://www.linkedin.com/in/shivarajnaidu/ (Yuvaraj)</a></mark>
</ng-marquee>
```

### @Input() direction
  `direction` property available for controlling direction of movement

#### possible values
* left
* right
* alternate

### Example

```html
<ng-marquee direction="right">
    <mark>Hello, World.... Find Me @ <a href="https://www.linkedin.com/in/shivarajnaidu/" target="__blank"> https://www.linkedin.com/in/shivarajnaidu/ (Yuvaraj)</a></mark>
</ng-marquee>
```

## To Build the component

```sh
ng build ng-marquee
```

## Any contributions are appreciated.
[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://paypal.me/shivarajnaidu)

#### Inspired by https://github.com/muchweb/html5-marquee