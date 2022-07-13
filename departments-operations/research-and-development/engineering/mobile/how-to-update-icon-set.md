# How to update icon set

This document explains how to update the icon set based on Figma Iconography.

### Figma Iconography

[Here](https://www.figma.com/file/gC0Y4IH5uthUymNW85If7EA2/Styleguide?node-id=110%3A41) we have the Iconography source of truth, so every update needs to start from there.

![Iconography Figma board](<../../../../.gitbook/assets/image (28) (1).png>)

* Select the icons you want to add/update
  * **Tip:** Select only the icons you want to change _just to be safe._

![New icons](<../../../../.gitbook/assets/image (34).png>)

* Go to `Export` on the right panel, select `SVG` and click on `Export N layers`&#x20;

![Exporting icons on Figma](<../../../../.gitbook/assets/image (33) (1).png>)

* It should generate a `Styleguide.zip` file on your machine containing the files&#x20;

![Exported icons on file system](<../../../../.gitbook/assets/image (27) (1).png>)

### Icomoon

We use [Icomoon](https://icomoon.io/) to generate our `.ttf` font file.

* [Here's](https://drive.google.com/drive/folders/18B1Br1nyJwmJTacKd7S9BgS3z7MGHiQv) a Google Drive folder containing all versions of the icon set
  * Download the most recent one
* On Icomoon, click on `Icomoon App` and then `Import Icons`&#x20;
* Select the `.json` file you just downloaded

![Imported Icon Set](<../../../../.gitbook/assets/image (31) (1).png>)

* Drag and drop the icons you want to add/update to Icomoon
* They should appear as unselected

![Icon Set with unselect icons](<../../../../.gitbook/assets/image (25).png>)

* Select them and click `Generate Font`

![Generate Font screen](<../../../../.gitbook/assets/image (32) (1).png>)

* Click `Configure` (gear icon) on the right side of `Download`
* Change the `Font Name` to `custom`

![Configure screen](<../../../../.gitbook/assets/image (26) (1).png>)

* Close this modal and click `Download`&#x20;
* It should have generated a `.zip` file with the following content

![Unzipped custom icon set](<../../../../.gitbook/assets/image (35) (1).png>)

* The only files we're going to use are `fonts/custom.ttf` and `selection.json`&#x20;
* Now we need to update the [Google Drive folder](https://drive.google.com/drive/folders/18B1Br1nyJwmJTacKd7S9BgS3z7MGHiQv)
* Click on `Untitled Project` on the header of Icomoon and then `Download`&#x20;
* That should download a `.json` file to be used next time we need to update the icons again
* Make sure to rename it following the `Mobile Icons vN.json` format and upload it to the [Google Drive folder](https://drive.google.com/drive/folders/18B1Br1nyJwmJTacKd7S9BgS3z7MGHiQv)

### Updating the app

* Move and replace the new `selection.json` to `app/containers/CustomIcon/selection.json`
* Move and replace the new `custom.ttf` to `android/app/src/main/assets/fonts/custom.ttf` and to `ios/custom.ttf`&#x20;
  * **Tip:** Don't use Xcode to replace files, because otherwise, you're going to change the links inside the project. Doing it from VSCode, for example, does the job without touching `ios/RocketChatRN.xcodeproj/project.pbxproj`&#x20;
* Go to your terminal and run from the root folder of your project `yarn build-icon-set` to update the mapped icons for Typescript
* Now build the app again and try the new icons
