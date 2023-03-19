<template>
  <div :class="$style.wrapper">
    <div :class="$style.spinner">Loading...</div>
  </div>
</template>

<style lang="scss" module>
  .wrapper {
    background-color: #77777780;
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    z-index: 100;
    top: 0;

    .spinner {
      top: 40vh;
      color: #15c1a0;
      font-size: 100px;
      text-indent: -9999em;
      overflow: hidden;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      margin: 0 auto;
      position: relative;
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
      animation: load6 1.7s infinite ease, round 1.7s infinite ease;
    }
  }

  @-webkit-keyframes load6 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      box-shadow: -0.11em -0.83em 0 -0.4em, -0.11em -0.83em 0 -0.42em, -0.11em -0.83em 0 -0.44em,
        -0.11em -0.83em 0 -0.46em, -0.11em -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: -0.11em -0.83em 0 -0.4em, -0.11em -0.83em 0 -0.42em, -0.11em -0.83em 0 -0.44em,
        -0.11em -0.83em 0 -0.46em, -0.11em -0.83em 0 -0.477em;
    }
    30% {
      box-shadow: -0.11em -0.83em 0 -0.4em, -0.51em -0.66em 0 -0.42em, -0.75em -0.36em 0 -0.44em,
        -0.83em -0.03em 0 -0.46em, -0.81em 0.21em 0 -0.477em;
    }
    55% {
      box-shadow: -0.11em -0.83em 0 -0.4em, -0.29em -0.78em 0 -0.42em, -0.43em -0.72em 0 -0.44em,
        -0.52em -0.65em 0 -0.46em, -0.57em -0.61em 0 -0.477em;
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
      box-shadow: -0.11em -0.83em 0 -0.4em, -0.11em -0.83em 0 -0.42em, -0.11em -0.83em 0 -0.44em,
        -0.11em -0.83em 0 -0.46em, -0.11em -0.83em 0 -0.477em;
    }
  }
  @keyframes load6 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      box-shadow: -0.11em -0.83em 0 -0.4em, -0.11em -0.83em 0 -0.42em, -0.11em -0.83em 0 -0.44em,
        -0.11em -0.83em 0 -0.46em, -0.11em -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: -0.11em -0.83em 0 -0.4em, -0.11em -0.83em 0 -0.42em, -0.11em -0.83em 0 -0.44em,
        -0.11em -0.83em 0 -0.46em, -0.11em -0.83em 0 -0.477em;
    }
    30% {
      box-shadow: -0.11em -0.83em 0 -0.4em, -0.51em -0.66em 0 -0.42em, -0.75em -0.36em 0 -0.44em,
        -0.83em -0.03em 0 -0.46em, -0.81em 0.21em 0 -0.477em;
    }
    55% {
      box-shadow: -0.11em -0.83em 0 -0.4em, -0.29em -0.78em 0 -0.42em, -0.43em -0.72em 0 -0.44em,
        -0.52em -0.65em 0 -0.46em, -0.57em -0.61em 0 -0.477em;
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
      box-shadow: -0.11em -0.83em 0 -0.4em, -0.11em -0.83em 0 -0.42em, -0.11em -0.83em 0 -0.44em,
        -0.11em -0.83em 0 -0.46em, -0.11em -0.83em 0 -0.477em;
    }
  }

  @-webkit-keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
