import {
  FC, Fragment, useCallback, useEffect, useState,
} from 'react';
import { useRouter } from 'next/router';
import { Listbox, Transition } from '@headlessui/react';
import clsx from 'clsx';

import Img from '~/components/Base/Img/Img';

import { IOption } from '~/components/Base/Select/option.interface';
import s from './Select.module.scss';

interface SelectProps {
  className?: string;
  options: IOption[];
}

const Select: FC<SelectProps> = ({ className, options }) => {
  const [ isActive, setIsActive ] = useState(false);

  const { push, query } = useRouter();
  const querySlugs = query.slugs;
  const firstSlug = querySlugs?.[0];
  const secondSlug = querySlugs?.[1];

  const getCurrentOption = useCallback(() => {
    const foundOption = options.find((option) => {
      const { value: optionValue } = option;

      return optionValue === secondSlug;
    });
    return foundOption;
  }, [ options, secondSlug ]);

  const currentOption = getCurrentOption();

  const [ selected, setSelected ] = useState(currentOption || options[0]);

  useEffect(() => {
    /* eslint-disable-next-line @typescript-eslint/no-shadow */
    const currentOption = getCurrentOption();
    setSelected(currentOption || options[0]);
  }, [ querySlugs, getCurrentOption, options ]);

  const longestOption = options.reduce(
    (
      prevOption,
      /* eslint-disable-next-line @typescript-eslint/no-shadow */
      currentOption,
    ) => {
      if (prevOption.label.length > currentOption.label.length) {
        return prevOption;
      }
      return currentOption;
    },
  );

  // Handle change
  interface IHandleChange {
    (selectedOption: IOption | null): void;
  }
  const handleChange: IHandleChange = (selectedOption) => {
    if (selectedOption) {
      setSelected(selectedOption);
      push({
        pathname: `${ firstSlug }/${ selectedOption.value }`,
      });
    }
  };

  const handleActivate = () => {
    setIsActive(true);
  };

  const handleDeactivate = () => {
    setIsActive(false);
  };

  return (
    <div className={ clsx(className, s.select) }>
      <Listbox
        value={ selected }
        onChange={ (option) => {
          handleChange(option);
        } }
      >
        <div className={ s.select__body }>
          <Listbox.Button
            className={ clsx(
              s.select__button,
              isActive && s.select__button_active,
            ) }
            onMouseEnter={ handleActivate }
            onMouseLeave={ handleDeactivate }
            onFocus={ handleActivate }
            onBlur={ handleDeactivate }
          >
            <Img
              className={ clsx(s.select__img, s.select__img_main) }
              src="/images/icons/filter-white.svg"
              alt="Filter"
              svg
              loader={ false }
            />
            <Img
              className={ clsx(s.select__img, s.select__img_active) }
              src="/images/icons/filter-red.svg"
              alt="Filter"
              svg
              loader={ false }
            />
            <div className={ s.select__labels }>
              <span className={ clsx(s.select__label, s.select__label_visible) }>
                {selected.label}
              </span>
              <span className={ clsx(s.select__label, s.select__label_hidden) }>
                {longestOption?.label}
              </span>
            </div>
          </Listbox.Button>
          <Transition
            as={ Fragment }
            leave={ s.select__leave }
            leaveFrom={ s.select__leaveFrom }
            leaveTo={ s.select__leaveTo }
          >
            <Listbox.Options className={ s.select__options }>
              {options.map((option) => (
                <Listbox.Option
                  key={ option.label + option.value }
                  /* eslint-disable-next-line max-len */
                  className={ ({ active }) => clsx(s.select__option, active && s.select__option_active) }
                  value={ option }
                >
                  {({ selected: selectedOption }) => (
                    <span
                      className={ clsx(
                        s.select__optionLabel,
                        selectedOption && s.select__optionValue_selected,
                      ) }
                    >
                      {option.label}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;
