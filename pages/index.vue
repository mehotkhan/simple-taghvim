<script setup>
const { data } = await useFetch("/api/auth");
</script>
<script></script>

<template>
  <div class="px-[2rem] py-[1rem] h-full">
    <!-- <MainCalendar /> -->
    <FullCalendar />
  </div>
</template>

<style lang="css">
.fc .fc-toolbar-title {
  font-size: 1.25rem !important;
  margin: 0;
  font-weight: 500;
  padding: 20px 0 0px 20px;
}

.fc .fc-button {
  background-color: #006082 !important;
  border-color: #006082 !important;
}

.fc-day-today {
  background-color: #edf5f7 !important;
}

.fc-theme-standard td {
  border: 1px solid #e5e7eb !important;
}

.fc-day-other {
  background: #fafafb;
}

.fc .fc-button .fc-icon {
  font-size: 0.875rem !important;
}

a.fc-col-header-cell-cushion {
  font-size: 0.85em !important;
  line-height: 2.2rem !important;
  font-weight: 600 !important;
}

.fc .fc-daygrid-day-top {
  flex-direction: inherit !important;
  padding: 5px !important;
  font-size: 0.75em !important;
  color: #6b7280 !important;
}

.fc .fc-button-primary:disabled {
  background-color: #eeeeee !important;
  color: black !important;
  border-color: #eeeeee !important;
  font-size: 0.875rem !important;
  line-height: 1.25rem !important;
  text-transform: capitalize !important;
}

.fc .fc-scrollgrid-liquid {
  border-radius: 7px !important;
}
</style>
