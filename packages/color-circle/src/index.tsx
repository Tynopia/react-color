import React from 'react';
import { validHex, hsvaToHex, HsvaColor, hexToHsva, ColorResult, color as handleColor } from '@uiw/color-convert';
import Swatch, { SwatchProps } from '@uiw/react-color-swatch';
import Point from './Point';

export interface CircleProps extends Omit<SwatchProps, 'color' | 'onChange'> {
  color?: string | HsvaColor;
  onChange?: (color: ColorResult) => void;
}

const Circle = React.forwardRef<HTMLDivElement, CircleProps>((props, ref) => {
  const { prefixCls = 'w-color-circle', className, color, colors = [], rectProps = {}, onChange, ...other } = props;
  const hsva = (typeof color === 'string' && validHex(color) ? hexToHsva(color) : color || {}) as HsvaColor;
  const hex = color ? hsvaToHex(hsva) : '';
  const cls = [prefixCls, className].filter(Boolean).join(' ');
  return (
    <Swatch
      ref={ref}
      colors={colors}
      color={hex}
      {...other}
      className={cls}
      rectRender={({ ...props }) => <Point {...props} className={`${prefixCls}-point`} rectProps={rectProps} />}
      onChange={(hsvColor) => {
        onChange && onChange(handleColor(hsvColor));
      }}
    />
  );
});

Circle.displayName = 'Circle';

export default Circle;
