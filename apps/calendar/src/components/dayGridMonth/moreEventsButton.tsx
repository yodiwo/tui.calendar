import { h } from 'preact';

import { Template } from '@src/components/template';
import { CellBarType } from '@src/constants/grid';
import type { TemplateName } from '@src/template/default';
import type TZDate from '@src/time/date';

interface Props {
  type?: CellBarType;
  number: number;
  className: string;
  date: TZDate;
}

export function MoreEventsButton({ type, number, date }: Props) {
  const exceedButtonTemplate = `monthGrid${
    type === CellBarType.header ? 'Header' : 'Footer'
  }Exceed` as TemplateName;

  return <Template template={exceedButtonTemplate} param={[number, date]} />;
}
