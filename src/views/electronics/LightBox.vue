<template>
  <div style="text-align: left; max-width: 900px">
    <h1>Light Box</h1>

    <v-btn
      color="secondary"
      elevation="2"
      href="https://gist.github.com/ChrisWoody/4409806fbc3860d5780e14eb9f3f77a0"
      target="_blank"
      rel="noopener noreferrer"
    >
      <v-icon left>mdi-github</v-icon>View Code
    </v-btn>
    <br /><br />
    <h4>What is Light Box?</h4>
    <div>
      <p>
        Light Box is an electronics project that allows people to interact with
        a LED strip with some dials and a button to toggle programs, where they
        can change the colours that appear to the speed of sequeneces and even
        the LEDs that appear.
      </p>
      <p>
        The two main goals of this was to learn more about the electronics
        components and programming the board, and to make something that people
        could interact and play around with (where the fun is in disocvering and
        exploring what it can do).
      </p>
    </div>

    <v-carousel>
      <v-carousel-item v-for="(image, i) in images" :key="i" :src="image.url">
      </v-carousel-item>
    </v-carousel>

    <br />

    <h4>Main Components</h4>
    <ul>
      <li>
        <BasicLink
          text="Adafruit Pro Trinket 5V 16MHz"
          url="https://core-electronics.com.au/adafruit-pro-trinket-5v-16mhz.html"
        />
      </li>
      <li>
        <BasicLink
          text="Adafruit Pro Trinket LiIon/LiPoly Backpack Add-On"
          url="https://core-electronics.com.au/adafruit-pro-trinket-liion-lipoly-backpack-add-on.html"
        />
      </li>
      <li>
        <BasicLink
          text="PowerBoost 1000 Charger - Rechargeable 5V Lipo USB Boost 1A - 1000"
          url="https://core-electronics.com.au/powerboost-1000-charger-rechargeable-5v-lipo-usb-boost-at-1a-1000c.html"
        />
      </li>
      <li>
        <BasicLink
          text="Polymer Lithium Ion Battery (LiPo) 3.7V 4400mAh"
          url="https://core-electronics.com.au/polymer-lithium-ion-battery-4400mah.html"
        />
      </li>
      <li>
        <BasicLink
          text="10k Ohm Linear (B) Single Gang 24mm Potentiometer"
          url="https://www.jaycar.com.au/10k-ohm-linear-b-single-gang-24mm-potentiometer/p/RP3510"
        />
      </li>
      <li>
        <BasicLink
          text="SPST Standard Toggle Switch"
          url="https://www.jaycar.com.au/spst-standard-toggle-switch/p/ST0570"
        />
      </li>
      <li>
        <BasicLink
          text="Black Push On Style Knob"
          url="https://www.jaycar.com.au/black-push-on-style-knob/p/HK7707"
        />
      </li>
      <li>
        <BasicLink
          text="Sealed Polycarbonate Enclosure 171 x 121 x 55 - Clear Lid"
          url="https://www.jaycar.com.au/sealed-polycarbonate-enclosure-171-x-121-x-55-clear-lid/p/HB6248"
        />
      </li>
    </ul>
    <br />
    <h4>Lessons Learned</h4>
    <ul>
      <li>
        When soldering header pins to the Adafruit board, place the pins and
        board in a breadboard so the pins are vertically properly
      </li>
      <li>
        The 26 AWG crimper wasn't small enough for the headers/pins used, had to
        use pliers to finish off the crimping. Perhaps 28 AWG would work
      </li>
      <li>
        When plugging in the board via USB, Windows might report it has a faulty
        device. It's possible you have some pins around the wrong way (i.e.
        power/ground pins swapped for the led strip)
      </li>
      <li>
        Before uploading code to the board, might need to push the reset button
        on the board first for it to upload successfully
      </li>
    </ul>
    <br />
    <h4>What's next?</h4>
    <ul>
      <li>Denser and longer led strip</li>
      <li>Shorter cables</li>
      <li>Short dials/potentiometers</li>
      <li>Use spade connectors where possible instead of soldering</li>
    </ul>
    <br />
    <h4>Setting up development environment</h4>
    <p>
      Took a bit of trial and error, but I was able to get this all working
      through VS Code and Arduino extension. The links below for setting up
      Arduino IDE <i>might</i> have helped, however Arduino IDE is perfectly
      suitable tool.
    </p>
    <ul>
      <li>Arduino IDE</li>
      <ul>
        <li>
          <BasicLink
            text="Windows Driver Installation"
            url="https://learn.adafruit.com/adafruit-arduino-ide-setup/windows-driver-installation"
          />
        </li>
        <li>
          <BasicLink
            text="Setting up Arduino IDE"
            url="https://learn.adafruit.com/introducing-pro-trinket/setting-up-arduino-ide"
          />
        </li>
        <li>
          <BasicLink
            text="Arduino 1.6.x IDE"
            url="https://learn.adafruit.com/adafruit-arduino-ide-setup/arduino-1-dot-6-x-ide"
          />
        </li>
        <li>
          <BasicLink
            text="Arduino Library Installation (Neopixel)"
            url="https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-installation"
          />
        </li>
      </ul>

      <li>VS Code</li>
      <ul>
        <li>
          <BasicLink
            text="Visual Studio Code for Arduino Basics"
            url="http://arduinoetcetera.blogspot.com/2019/11/visual-studio-code-for-arduino-basics.html?m=1"
          />
        </li>
        <li>
          <BasicLink
            text="microsoft/vscode-arduino"
            url="https://github.com/microsoft/vscode-arduino"
          />
        </li>
        <li>
          <BasicLink
            text="Use Visual Studio Code for Arduino"
            url="https://medium.com/home-wireless/use-visual-studio-code-for-arduino-2d0cf4c1760b"
          />
        </li>
        <li>
          <BasicLink
            text="Visual Studio Code includePath"
            url="https://stackoverflow.com/questions/37522462/visual-studio-code-includepath"
          />
        </li>
        <li>
          <BasicLink
            text="Why Won't Arduino Intellisense Work in VSCode?"
            url="https://stackoverflow.com/questions/51614871/why-wont-arduino-intellisense-work-in-vscode"
          />
        </li>
        <li>
          <BasicLink
            text="Enabling Arduino Intellisense with Visual Studio Code"
            url="https://cuneyt.aliustaoglu.biz/en/enabling-arduino-intellisense-with-visual-studio-code/"
          />
        </li>
      </ul>
    </ul>
    <br />
    <h4>Helpful Tutorials</h4>
    <ul>
      <li>
        <BasicLink
          text="How to Create Epic Cosplay Light Effects"
          url="https://www.youtube.com/watch?v=U_Kl1YCDO2E"
        />
      </li>
      <li>
        <BasicLink
          text="Demonic Brigitte Shield - Overwatch/Diablo Cosplay"
          url="https://www.youtube.com/watch?v=Ku2_91NZPZ8"
        />
      </li>
      <li>
        <BasicLink
          text="Switches, Debouncing and the Arduino"
          url="https://core-electronics.com.au/tutorials/switch-debouncing-with-arduino.html"
        />
      </li>
      <li>
        <BasicLink
          text="What Are NeoPixel LEDs?"
          url="https://core-electronics.com.au/tutorials/what-are-neopixel-leds.html"
        />
      </li>
      <li>
        <BasicLink
          text="How To Make and Crimp Custom Connectors"
          url="https://core-electronics.com.au/tutorials/how-to-crimp-custom-connectors.html"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import BasicLink from "@/components/BasicLink.vue";

export default {
  name: "LightBox",
  components: {
    BasicLink,
  },
  data: () => ({
    model: 0,
    images: [
      {
        url: require("@/assets/lightbox/lightbox-earlydays-1.jpg"),
      },
      {
        url: require("@/assets/lightbox/lightbox-theatrechase-1.jpg"),
      },
      {
        url: require("@/assets/lightbox/lightbox-rainbow-1.jpg"),
      },
      {
        url: require("@/assets/lightbox/lightbox-gif-1.gif"),
      },
    ],
  }),
};
</script>

<style>
</style>