import React from 'react';

interface Props {
  size?: number;
  fill?: string;
}

const CertificationIcon: React.FC<Props> = ({ size = 24, fill = "#3C4858" }) => {
  return (
    <svg
      enableBackground="new 0 0 512 512"
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 512 512">
      <g>
        <path d="m413.978 0h-315.956c-8.284 0-15 6.716-15 15v421.273c0 8.284 6.716 15 15 15h112.853v45.727c0 4.657 2.163 9.051 5.855 11.89 3.691 2.839 8.492 3.803 12.994 2.607l26.276-6.977 26.275 6.978c1.27.337 2.562.502 3.849.502 3.272 0 6.495-1.071 9.146-3.11 3.692-2.839 5.855-7.233 5.855-11.89v-45.727h112.853c8.284 0 15-6.716 15-15v-421.273c0-8.284-6.716-15-15-15zm-154.128 474.502c-1.261-.335-2.556-.502-3.85-.502s-2.589.167-3.85.502l-11.275 2.994v-27.754c4.826 1.302 9.893 2.008 15.125 2.008s10.299-.706 15.125-2.008v27.754zm24.289-80.89c0 15.516-12.623 28.138-28.139 28.138s-28.139-12.623-28.139-28.138 12.623-28.138 28.139-28.138 28.139 12.622 28.139 28.138zm114.839 27.661h-91.852c4.471-8.231 7.013-17.654 7.013-27.661 0-32.058-26.081-58.138-58.139-58.138s-58.139 26.081-58.139 58.138c0 10.007 2.542 19.431 7.013 27.661h-91.852v-391.273h285.955v391.273z" />
        <path d="m165.625 301.125h180.75c8.284 0 15-6.716 15-15s-6.716-15-15-15h-180.75c-8.284 0-15 6.716-15 15s6.716 15 15 15z" />
        <path d="m165.625 240.875h180.75c8.284 0 15-6.716 15-15s-6.716-15-15-15h-180.75c-8.284 0-15 6.716-15 15s6.716 15 15 15z" />
        <path d="m165.625 180.625h180.75c8.284 0 15-6.716 15-15s-6.716-15-15-15h-180.75c-8.284 0-15 6.716-15 15s6.716 15 15 15z" />
        <path d="m165.625 120.375h120.5c8.284 0 15-6.716 15-15s-6.716-15-15-15h-120.5c-8.284 0-15 6.716-15 15s6.716 15 15 15z" />
      </g>
    </svg>
  );
}

export default CertificationIcon;