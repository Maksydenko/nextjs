import React, { Dispatch, FC, SetStateAction } from "react";
import Downshift, { DownshiftState } from "downshift";
import { FixedSizeList } from "react-window";
import clsx from "clsx";

import { useBreakpointCheck } from "@/hooks/useBreakpointCheck";

import { Breakpoint } from "@/enums/breakpoint.enum";

type TypeOptions = string[] | null;

interface AutocompleteProps {
  setSelected: Dispatch<SetStateAction<string>>;
  options: TypeOptions;
  placeholder?: string;
  big?: boolean;
}

const Autocomplete: FC<AutocompleteProps> = ({
  setSelected,
  options,
  placeholder = "",
  big,
}) => {
  const isMobile = useBreakpointCheck(Breakpoint.Mobile);
  const isMobileSmall = useBreakpointCheck(Breakpoint.MobileSmall);

  // Get item height
  interface IGetItemHeight {
    (itemCount: number): number;
  }
  const getHeight: IGetItemHeight = (itemCount) => {
    if (big) {
      if (itemCount > 1) {
        return 198;
      }

      if (isMobileSmall) {
        return 178;
      }
      if (isMobile) {
        return 103;
      }
      return 93;
    }

    if (isMobileSmall) {
      if (itemCount > 1) {
        return 198;
      }
      return 103;
    }

    if (isMobile) {
      if (itemCount > 1) {
        return 158;
      }
      return 83;
    }

    return 158;
  };

  const getItemSize = () => {
    if (big) {
      if (isMobileSmall) {
        return 170;
      }
      if (isMobile) {
        return 95;
      }
      return 85;
    }

    if (isMobile) {
      if (isMobileSmall) {
        return 95;
      }
      return 75;
    }
    return 45;
  };

  // Filter options
  interface IFilterOptions {
    (
      options: TypeOptions,
      inputValue: DownshiftState<TypeOptions>["inputValue"]
    ): number;
  }
  const filterOptions: IFilterOptions = (options, inputValue) => {
    if (!options) {
      return 0;
    }
    return options.filter(
      (item) =>
        !inputValue || item?.toLowerCase()?.includes(inputValue?.toLowerCase())
    ).length;
  };

  return (
    <Downshift
      onChange={(selection) => setSelected(selection)}
      itemToString={(item) => {
        if (!item) {
          return "";
        }
        return item;
      }}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps,
      }) => {
        const itemCount = filterOptions(options, inputValue);

        return (
          <div className="relative">
            <div
              className="relative focus:outline-none w-full cursor-default overflow-hidden text-left focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              {...getRootProps(
                {},
                {
                  suppressRefError: true,
                }
              )}
            >
              <input
                className="w-full border-none py-3 px-5 text-gray-900 bg-light focus:ring-0 focus:outline-none placeholder:text-gray"
                placeholder={placeholder}
                {...getInputProps()}
              />
            </div>
            {isOpen && (
              <ul {...getMenuProps()}>
                <FixedSizeList
                  className="absolute z-10 mt-1 bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                  height={getHeight(itemCount)}
                  itemCount={itemCount}
                  itemSize={getItemSize()}
                  width="100%"
                >
                  {({ index, style }) => {
                    const filteredOptions = options?.filter(
                      (item) =>
                        !inputValue ||
                        item?.toLowerCase()?.includes(inputValue?.toLowerCase())
                    );
                    const option = filteredOptions?.[index];
                    const optionDescription = option;

                    return (
                      <li
                        className={clsx(
                          "relative block cursor-pointer select-none py-2 py-3 px-5",
                          highlightedIndex === index
                            ? "bg-primary text-white"
                            : "text-gray-900",
                          selectedItem === option && "font-bold"
                        )}
                        {...getItemProps({
                          key: optionDescription,
                          index,
                          item: option,
                        })}
                        style={{
                          ...style,
                        }}
                      >
                        {optionDescription}
                      </li>
                    );
                  }}
                </FixedSizeList>
              </ul>
            )}
          </div>
        );
      }}
    </Downshift>
  );
};

export default Autocomplete;
