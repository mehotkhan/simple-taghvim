<script setup>
import JDate from "jalali-date";

const MONTH_NAMES = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
const DAYS = [
  "شنبه",
  "یک‌شنبه",
  "دو‌شنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
  "جمعه",
];
const month = ref("");
const year = ref("");
const no_of_days = ref([]);
const blankdays = ref([]);
const days = ref(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);

const events = ref([
  {
    event_date: new Date(2020, 3, 1),
    event_title: "April Fool's Day",
    event_theme: "blue",
  },

  {
    event_date: new Date(2020, 3, 10),
    event_title: "Birthday",
    event_theme: "red",
  },

  {
    event_date: new Date(2020, 3, 16),
    event_title: "Upcoming Event",
    event_theme: "green",
  },
]);
const datepickerValue = ref("");
const event_title = ref("");
const event_date = ref("");
const event_theme = ref("blue");

const themes = ref([
  {
    value: "blue",
    label: "Blue Theme",
  },
  {
    value: "red",
    label: "Red Theme",
  },
  {
    value: "yellow",
    label: "Yellow Theme",
  },
  {
    value: "green",
    label: "Green Theme",
  },
  {
    value: "purple",
    label: "Purple Theme",
  },
]);

const openEventModal = ref(false);

const initDate = () => {
  let today = new JDate();

  month.value = today.getMonth();
  year.value = today.getFullYear();
  console.log(month.value);
};

const isToday = (date) => {
  const today = new Date();
  const d = new JDate(year.value, month.value, date + 1);
  return today.toDateString() === d._d.toDateString() ? true : false;
};
const showEventModal = (date) => {
  // open the modal
  openEventModal.value = true;
  event_date.value = new Date(year.value, month.value, date).toDateString();
};

const getNoOfDays = () => {
  let daysInMonth = new Date(year.value, month.value + 1, 0).getDate();

  // find where to start calendar day of week
  let dayOfWeek = new JDate(year.value, month.value, 0);
  console.log(dayOfWeek);
  let blankdaysArray = [];
  for (var i = 1; i <= dayOfWeek; i++) {
    blankdaysArray.push(i);
  }

  let daysArray = [];
  for (var i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  blankdays.value = blankdaysArray;
  no_of_days.value = daysArray;
};
onMounted(() => {
  initDate();
  getNoOfDays();
});
</script>
<template>
  <div class="antialiased h-full">
    <div class="bg-white shadow-xl overflow-hidden border-gray-500 border-">
      <div
        class="flex items-center justify-between py-2 px-6 border-t border-l border-r rounded-md"
      >
        <div>
          <span class="text-lg font-bold text-gray-800">{{
            MONTH_NAMES[month - 1]
          }}</span>
          <span class="ml-1 text-lg text-gray-600 font-normal">{{ year }}</span>
        </div>
        <div class="border rounded-lg px-1" style="padding-top: 2px">
          <button
            type="button"
            class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
            :class="{ 'cursor-not-allowed opacity-25': month == 11 }"
            :disabled="month == 11 ? true : false"
            @click="
              month++;
              getNoOfDays();
            "
          >
            <svg
              class="h-6 w-6 text-gray-500 inline-flex leading-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div class="border-r inline-flex h-6"></div>
          <button
            type="button"
            class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
            :class="{ 'cursor-not-allowed opacity-25': month == 0 }"
            :disabled="month == 0 ? true : false"
            @click="
              month--;
              getNoOfDays();
            "
          >
            <svg
              class="h-6 w-6 text-gray-500 inline-flex leading-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="-mx-1 -mb-1">
        <div class="flex flex-wrap" style="margin-bottom: -40px">
          <template v-for="(day, index) in DAYS" :key="index">
            <div style="width: 14.26%" class="px-2 py-2">
              <div
                class="text-gray-600 text-sm uppercase tracking-wide font-bold text-center"
              >
                {{ day }}
              </div>
            </div>
          </template>
        </div>

        <div class="flex flex-wrap border-t border-l">
          <template v-for="blankday in blankdays">
            <div
              style="width: 14.28%; height: 120px"
              class="text-center border-r border-b px-4 pt-2"
            ></div>
          </template>
          <template v-for="(date, dateIndex) in no_of_days" :key="dateIndex">
            <div
              style="width: 14.28%; height: 120px"
              class="px-4 pt-2 border-r border-b relative"
            >
              <div
                @click="showEventModal(date)"
                class="inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100"
                :class="{
                  'bg-blue-500 text-white': isToday(date) == true,
                  'text-gray-700 hover:bg-blue-200': isToday(date) == false,
                }"
              >
                {{ date + 1 }}
              </div>
              <div style="height: 80px" class="overflow-y-auto mt-1">
                <!-- <div 
										class="absolute top-0 right-0 mt-2 mr-2 inline-flex items-center justify-center rounded-full text-sm w-6 h-6 bg-gray-700 text-white leading-none"
										x-show="events.filter(e => e.event_date === new Date(year, month, date).toDateString()).length"
										x-text="events.filter(e => e.event_date === new Date(year, month, date).toDateString()).length"></div> -->

                <template
                  v-for="event in events.filter(
                    (e) =>
                      new Date(e.event_date).toDateString() ===
                      new Date(year, month, date).toDateString(),
                  )"
                >
                  <div
                    class="px-2 py-1 rounded-lg mt-1 overflow-hidden border"
                    :class="{
                      'border-blue-200 text-blue-800 bg-blue-100':
                        event.event_theme === 'blue',
                      'border-red-200 text-red-800 bg-red-100':
                        event.event_theme === 'red',
                      'border-yellow-200 text-yellow-800 bg-yellow-100':
                        event.event_theme === 'yellow',
                      'border-green-200 text-green-800 bg-green-100':
                        event.event_theme === 'green',
                      'border-purple-200 text-purple-800 bg-purple-100':
                        event.event_theme === 'purple',
                    }"
                  >
                    <p class="text-sm truncate leading-tight">
                      {{ event.event_title }}
                    </p>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
