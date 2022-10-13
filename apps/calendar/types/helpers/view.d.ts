import type { EventView, TaskView, WeekOptions } from "../types/options";
export declare function getActivePanels(taskView: Required<WeekOptions>['taskView'], eventView: Required<WeekOptions>['eventView']): (TaskView | EventView)[];
