import { h } from 'preact';
import { CellBarType } from "../../constants/grid";
import type { TemplateMonthGrid } from "../../types/template";
interface Props {
    type?: CellBarType;
    className: string;
    param: TemplateMonthGrid;
}
export declare function MoreEventsButton({ type, param }: Props): h.JSX.Element;
export {};
