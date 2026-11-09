# NutUI: disable an open MenuItem

Run `npm ci` and `npm run dev`.

1. Click **Disable in 2 seconds**, then open **Fruit**.
2. Wait until the **Disabled** readout changes to `true`.
3. Click **Orange** in the open menu.

The value changes from Apple to Orange and the change count goes to 1. A disabled menu should keep Apple and emit no change event.
