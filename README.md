# Script to perform custom behavior with Elementor

This repo groups a set of scripts that can be used to produce customized behavior in Elementor.

## Scripts

Below is the list of available scripts

### Scrollbar slider indicator

This script create a scrollbar indicator that show the progress of the specified slider

[Read more](./scripts/scrollbar-slider-indicator//README.md)

### Control slider navigation remotely

This script allows you to have custom button that control the slider navigation.
With it you can have a custom button that scrolls the slider to next or previous item.

[Read more](./scripts/remote-slider-navigation-handler/README.md)

## Demo

### Install dependencies

Run the following command to install dependencies

```bash
yarn install
```

### Preview

Run the following command to preview

```bash
yarn dev
```

In the output of the above command you will see the preview URL, it must be
something like `http://localhost:5173/`. Open it in your browser to see the preview.

## Creating builds

To create a new build run the following command

```bash
yarn build
```

The bundles are located in the `dist` folder.
