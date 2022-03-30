import { h } from 'preact';

import { Story } from '@storybook/preact';

import { Week } from '@src/components/view/week';
import EventModel from '@src/model/eventModel';
import TZDate from '@src/time/date';
import { addDate, Day } from '@src/time/datetime';

import { mockWeekViewEvents } from '@stories/mocks/mockWeekViewEvents';
import { ProviderWrapper } from '@stories/util/providerWrapper';
import { createRandomEventModelsForMonth, createRandomEvents } from '@stories/util/randomEvents';

import { EventModelData } from '@t/events';

export default { title: 'Views/WeekView', component: Week };

function createTimeGridEvents() {
  const today = new TZDate();
  const start = addDate(new TZDate(), -today.getDay());
  const end = addDate(start, 6);

  return createRandomEvents('week', start, end).map((event) => EventModel.create(event));
}

function createWeekEvents(events: EventModelData[]) {
  return events.map((event) => EventModel.create(event));
}

const Template: Story = (args) => (
  <ProviderWrapper options={args.options} events={args.events}>
    <Week />
  </ProviderWrapper>
);

export const basic = Template.bind({});

export const MondayStart = Template.bind({});
MondayStart.args = {
  options: {
    week: {
      startDayOfWeek: Day.MON,
    },
  },
};

export const WorkWeek = Template.bind({});
WorkWeek.args = {
  options: {
    week: {
      workweek: true,
    },
  },
};

export const RandomEvents = Template.bind({});
RandomEvents.args = {
  events: [...createRandomEventModelsForMonth(40), ...createTimeGridEvents()],
};

export const FixedEvents = Template.bind({});
FixedEvents.args = {
  options: { useCreationPopup: true, useDetailPopup: true },
  events: createWeekEvents(mockWeekViewEvents),
};

export const CustomTemplate = Template.bind({});
CustomTemplate.args = {
  events: createWeekEvents(mockWeekViewEvents),
  options: {
    useCreationPopup: true,
    useDetailPopup: true,
    template: {
      alldayTitle() {
        // Insert <script> for DOM Purify Test
        return '<span><script></script>CUSTOM All Day</span>';
      },
      taskTitle() {
        return '<span>CUSTOM TASK</span>';
      },
    },
  },
};
