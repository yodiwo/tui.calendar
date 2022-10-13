import { h } from 'preact';
import { CellBarType } from "../../constants/grid";
import type TZDate from "../../time/date";
interface Props {
    type?: CellBarType;
    number: number;
    className: string;
    date: TZDate;
}
export declare function MoreEventsButton({ type, number, date }: Props): h.JSX.Element;
export {};
