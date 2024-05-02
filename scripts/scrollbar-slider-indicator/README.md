# Scrollbar slider indicator

This script create scrollbar indicator for Elementor slider.
The scrollbar indicator displays the progress of the slider.

## Using

```html
<!-- create a div that will content the scrollbar in the page -->
<div
  data-custom-scrollbar-wrapper
  data-scrollbar-bg="red"
  data-scrollbar-track-color="blue"
  data-slider-id="test-slider"
></div>
```

## Attributes reference

| name                            | description                                                                    | required | default value |
| ------------------------------- | ------------------------------------------------------------------------------ | -------- | ------------- |
| `data-custom-scrollbar-wrapper` | This is a flag that tell the script that a scrollbar should be rendered there. | `true`   | `none`        |
| `data-slider-id`                | The `id` of the slider which one the scrollbar is related                      | `true`   | `none`        |
| `data-scrollbar-bg`             | The background of the scrollbar                                                | `false`  | `#e5e5e5`     |
| `data-scrollbar-track-color`    | The color of the track                                                         | `false`  | `#b5b5b5`     |
