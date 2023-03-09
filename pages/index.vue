<template>
  <div
    class="flex flex-col h-screen justify-start md:justify-center md:flex-row md:items-center"
  >
    <section
      class="grid mx-10 py-10 gap-8 grid-cols-1 md:grid-cols-4 text-white md:py-0"
    >
      <!-- Jeremy Robson -->
      <div
        class="md:row-span-2 md:w-[230px] md:max-w-full bg-DarkBlue rounded-lg flex flex-col"
      >
        <div
          class="bg-Blue flex text-xs rounded-lg px-6 py-5 md:pb-16 md:flex-col justify-center space-x-2 items-center md:items-start"
        >
          <img
            src="~/assets/img/image-jeremy.png"
            alt=""
            class="h-16 w-16 border-white border-2 rounded-full md:mb-10 md:h-20 md:w-20"
          />
          <div class="flex flex-col">
            Report for
            <p class="text-2xl md:text-4xl">Jeremy Robson</p>
          </div>
        </div>
        <div class="px-6">
          <ul
            class="flex button-color-change justify-evenly items-center my-4 text-PaleBlue font-[400] md:items-start md:flex-col md:space-y-2"
          >
            <li @click="changetimeframe('daily')" class="hover:text-white">
              <button>Daily</button>
            </li>
            <li
              @click="changetimeframe('weekly')"
              class="text-white hover:text-white"
            >
              <button>Weekly</button>
            </li>
            <li @click="changetimeframe('monthly')" class="hover:text-white">
              <button>Monthly</button>
            </li>
          </ul>
        </div>
      </div>

      <!-- Work -->
      <div
        class="grid-info rounded-lg pt-10 space-y-1 bg-LightRed_work bg-icon-work bg-no-repeat bg-[top_right_1rem]"
      >
        <div
          class="bg-DarkBlue h-full cursor-pointer rounded-lg px-6 py-4 flex flex-col justify-center hover:bg-DesaturatedBlue"
          id="work"
        >
          <div class="text-lg font-[500] flex justify-between">
            Work
            <button class="hover:opacity-60">
              <img
                src="~/assets/img/icon-ellipsis.svg"
                alt=""
                class="w-4 h-auto"
              />
            </button>
          </div>
          <div
            class="flex !mt-4 justify-between items-center md:flex-col md:items-start"
          >
            <p class="text-4xl md:text-5xl">32hrs</p>
            <p class="text-xs text-PaleBlue font-[400] md:mt-3">
              Last Week - 36hrs
            </p>
          </div>
        </div>
      </div>

      <!-- Play -->
      <div
        class="grid-info rounded-lg pt-10 space-y-1 bg-SoftBlue_play bg-icon-play bg-no-repeat bg-[top_right_1rem]"
      >
        <div
          class="bg-DarkBlue h-full cursor-pointer rounded-lg px-6 py-4 flex flex-col justify-center hover:bg-DesaturatedBlue"
          id="play"
        >
          <div class="text-lg font-[500] flex justify-between">
            Play
            <button class="hover:opacity-60">
              <img
                src="~/assets/img/icon-ellipsis.svg"
                alt=""
                class="w-4 h-auto"
              />
            </button>
          </div>
          <div
            class="flex !mt-4 justify-between items-center md:flex-col md:items-start"
          >
            <p class="text-4xl md:text-5xl">10hrs</p>
            <p class="text-xs text-PaleBlue font-[400] md:mt-3">
              Last Week - 8hrs
            </p>
          </div>
        </div>
      </div>

      <!-- Study -->
      <div
        class="grid-info rounded-lg pt-10 space-y-1 bg-LightRed_study bg-icon-study bg-no-repeat bg-[top_right_1rem]"
      >
        <div
          class="bg-DarkBlue h-full cursor-pointer rounded-lg px-6 py-4 hover:bg-DesaturatedBlue flex flex-col justify-center"
          id="study"
        >
          <div class="text-lg font-[500] flex justify-between">
            Study
            <button class="hover:opacity-60">
              <img
                src="~/assets/img/icon-ellipsis.svg"
                alt=""
                class="w-4 h-auto"
              />
            </button>
          </div>
          <div
            class="flex !mt-4 justify-between items-center md:flex-col md:items-start"
          >
            <p class="text-4xl md:text-5xl">4hrs</p>
            <p class="text-xs text-PaleBlue font-[400] md:mt-3">
              Last Week - 7hrs
            </p>
          </div>
        </div>
      </div>

      <!-- Exercise -->
      <div
        class="grid-info rounded-lg pt-10 space-y-1 bg-LimeGreen_exercise bg-icon-exercise bg-no-repeat bg-[top_right_1rem]"
      >
        <div
          class="bg-DarkBlue h-full cursor-pointer rounded-lg px-6 py-4 flex flex-col justify-center hover:bg-DesaturatedBlue"
          id="exercise"
        >
          <div class="text-lg font-[500] flex justify-between">
            Exercise
            <button class="hover:opacity-60">
              <img
                src="~/assets/img/icon-ellipsis.svg"
                alt=""
                class="w-4 h-auto"
              />
            </button>
          </div>
          <div
            class="flex !mt-4 justify-between items-center md:flex-col md:items-start"
          >
            <p class="text-4xl md:text-5xl">4hrs</p>
            <p class="text-xs text-PaleBlue font-[400] md:mt-3">
              Last Week - 5hrs
            </p>
          </div>
        </div>
      </div>

      <!-- Social -->
      <div
        class="grid-info rounded-lg pt-10 space-y-1 bg-Violet_social bg-icon-social bg-no-repeat bg-[top_right_1rem]"
      >
        <div
          class="bg-DarkBlue h-full cursor-pointer rounded-lg px-6 py-4 flex flex-col justify-center hover:bg-DesaturatedBlue"
          id="social"
        >
          <div class="text-lg font-[500] flex justify-between">
            Social
            <button class="hover:opacity-60">
              <img
                src="~/assets/img/icon-ellipsis.svg"
                alt=""
                class="w-4 h-auto"
              />
            </button>
          </div>
          <div
            class="flex !mt-4 justify-between items-center md:flex-col md:items-start"
          >
            <p class="text-4xl md:text-5xl">5hrs</p>
            <p class="text-xs text-PaleBlue font-[400] md:mt-3">
              Last Week - 10hrs
            </p>
          </div>
        </div>
      </div>

      <!-- Self care -->
      <div
        class="grid-info rounded-lg pt-10 space-y-1 bg-SoftOrange_selfcare bg-icon-self-care bg-no-repeat bg-[top_right_1rem]"
      >
        <div
          class="bg-DarkBlue h-full cursor-pointer rounded-lg px-6 py-4 flex flex-col justify-center hover:bg-DesaturatedBlue"
          id="selfcare"
        >
          <div class="text-lg font-[500] flex justify-between">
            Self Care
            <button class="hover:opacity-60">
              <img
                src="~/assets/img/icon-ellipsis.svg"
                alt=""
                class="w-4 h-auto"
              />
            </button>
          </div>
          <div
            class="flex !mt-4 justify-between items-center md:flex-col md:items-start"
          >
            <p class="text-4xl md:text-5xl">2hrs</p>
            <p class="text-xs text-PaleBlue font-[400] md:mt-3">
              Last Week - 2hrs
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import data from "~/assets/data.json";

function changetimeframe(timeframe) {
  const card_list = document.getElementsByClassName("grid-info");
  const buttons = document.getElementsByClassName("button-color-change")[0];
  const requiredLi = buttons.getElementsByTagName("li");
  for (let i = 0; i < 3; i++) {
    let li_timeframe = requiredLi[i].innerText.toLowerCase();

    if (li_timeframe === timeframe) {
      requiredLi[i].classList.add("text-white");
    } else {
      requiredLi[i].classList.remove("text-white");
    }
  }

  for (let i = 0; i < 6; i++) {
    let childDiv = card_list[i].getElementsByTagName("div")[0];
    let child2Div = childDiv.getElementsByTagName("div")[1];
    let time1text = child2Div.getElementsByTagName("p")[0];
    let time2text = child2Div.getElementsByTagName("p")[1];

    let time1 = data[i].timeframes[timeframe].current;
    if (time1 === 1) {
      time1 = time1 + "hr";
    } else {
      time1 = time1 + "hrs";
    }

    let time2 = data[i].timeframes[timeframe].previous;
    if (time2 === 1) {
      time2 = "Last Week - " + time2 + "hr";
    } else {
      time2 = "Last Week - " + time2 + "hrs";
    }

    time1text.innerText = time1;
    time2text.innerText = time2;
  }
}
</script>

<style scoped></style>
