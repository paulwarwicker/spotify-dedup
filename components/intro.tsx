import React from 'react';
import { useTranslation } from 'react-i18next';

const Intro = props => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="p-10 text-center">
        <h1 className="mt-6 text-[2.5rem] leading-none sm:text-6xl tracking-tight font-bold text-slate-900 dark:text-white max-w-2xl mx-auto">{t('home.title')}</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{t('home.description')}</p>
      </div>
      <button
        className="flex items-center pointer-events-auto rounded-md bg-green-600 py-4 px-6 text-xl font-semibold text-white hover:bg-green-500 mx-auto"
        onClick={props.onLoginClick}
      >
        <svg
          className="inline-block"
          xmlns="http://www.w3.org/2000/svg"
          height="168"
          width="168"
          style={{
            width: '26px',
            height: '26px',
            marginRight: '10px',
            verticalAlign: '-6px',
          }}
        >
          <g transform="scale(0.15)">
            <path
              fill="#ffffff"
              d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 0 1-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 0 1-6.249-3.93 5.213 5.213 0 0 1 3.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 0 1 4.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 0 1 5.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 0 1 2.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
            />
          </g>
        </svg>
        {t('home.login-button')}
      </button>
    </div>
  );
};

export default Intro;
