# Remote slider navigation handler

This script allows you to have custom button that control the slider navigation.
With it you can have a custom button that scrolls the slider to next or previous item.

## Using

```html
<!-- add these attribute on you button -->
<div
  data-remote-slider-nav
  data-remote-navigation-dir="prev"
  data-remote-slider-id="test-slider"
></div>
```

## Attributes reference

| name                         | description                                                                                 | required |
| ---------------------------- | ------------------------------------------------------------------------------------------- | -------- |
| `data-remote-slider-nav`     | This is a flag that tell the script that the element is a slider navigation control button. | `true`   |
| `data-remote-navigation-dir` | The direction of the navigation. Must be `next` or `prev`                                   | `true`   |
| `data-remote-slider-id`      | The `id` of the related slider                                                              | `true`   |
