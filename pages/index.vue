<script setup>
const { data } = await useFetch('/api/auth')

</script>
<script>
import { defineComponent } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import faLocale from '@fullcalendar/core/locales/fa';


export default defineComponent({
    components: {
        FullCalendar,
    },
    data() {
        return {
            calendarOptions: {
                locale: faLocale,
                direction: 'rtl',
                plugins: [
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin // needed for dateClick
                ],
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                initialView: 'dayGridMonth',
                initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
                editable: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                weekends: true,
                select: this.handleDateSelect,
                eventClick: this.handleEventClick,
                eventsSet: this.handleEvents
                /* you can update a remote database when these fire:
                eventAdd:
                eventChange:
                eventRemove:
                */
            },
            currentEvents: [],
        }
    },
    methods: {
        handleWeekendsToggle() {
            this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
        },
        handleDateSelect(selectInfo) {
            let title = prompt('Please enter a new title for your event')
            let calendarApi = selectInfo.view.calendar

            calendarApi.unselect() // clear date selection

            if (title) {
                calendarApi.addEvent({
                    id: createEventId(),
                    title,
                    start: selectInfo.startStr,
                    end: selectInfo.endStr,
                    allDay: selectInfo.allDay
                })
            }
        },
        handleEventClick(clickInfo) {
            if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
                clickInfo.event.remove()
            }
        },
        handleEvents(events) {
            this.currentEvents = events
        },
    }
})

</script>

<template>
    <div class="px-[5rem] py-[2rem] h-full">

        <FullCalendar class='demo-app-calendar' :options='calendarOptions'>
            <template v-slot:eventContent='arg'>
                <b>{{ arg.timeText }}</b>
                <i>{{ arg.event.title }}</i>
            </template>
        </FullCalendar>
    </div>
</template>

<style lang='css'>
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
    background: #FAFAFB;
}

.fc .fc-button .fc-icon {
    font-size: 0.875rem !important;
}

a.fc-col-header-cell-cushion {
    font-size: .85em !important;
    line-height: 2.2rem !important;
    font-weight: 600 !important;
}

.fc .fc-daygrid-day-top {
    flex-direction: inherit !important;
    padding: 5px !important;
    font-size: .75em !important;
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
</style>