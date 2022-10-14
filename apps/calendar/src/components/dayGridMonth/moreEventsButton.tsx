import { h } from 'preact';

import { Template } from '@src/components/template';
import { CellBarType } from '@src/constants/grid';
import type { TemplateName } from '@src/template/default';
import type { TemplateMonthGrid } from '@src/types/template';

interface Props {
  type?: CellBarType;
  className: string;
  param: TemplateMonthGrid;
}

export function MoreEventsButton({ type, param }: Props) {
  const exceedButtonTemplate = `monthGrid${
    type === CellBarType.header ? 'Header' : 'Footer'
  }Exceed` as TemplateName;

  return <Template template={exceedButtonTemplate} param={param} />;
}
