import {
  FC, Reducer, useEffect, useReducer, useState,
} from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import s from './Pagination.module.scss';

interface PaginationProps {
  totalPages: number;
  postLimit: number;
}

interface InitialState {
  currentPage: number;
  postLimit: number;
  total: number;
}

interface State extends InitialState {
  pages: number[];
  showEndEllipsis: boolean;
  showStartEllipsis: boolean;
  totalPages: number;
}

export type PaginationAction = ReturnType<
(typeof PaginationActionCreators)[keyof typeof PaginationActionCreators]
>;

const ActionTypes = {
  PAGE_CHANGE: '@core/PAGE_CHANGE',
  TOTAL_CHANGE: '@core/TOTAL_CHANGE',
} as const;

export const PaginationActionCreators = {
  PAGE_CHANGE(page: number) {
    return {
      type: ActionTypes.PAGE_CHANGE,
      page,
    };
  },
  TOTAL_CHANGE(total: number) {
    return {
      type: ActionTypes.TOTAL_CHANGE,
      total,
    };
  },
};

const getState = ({ currentPage, postLimit, total }: InitialState): State => {
  const totalPages = Math.ceil(total / postLimit);

  const PAGES_TO_SHOW = 3;
  const PAGES_ON_EITHER_SIDE = 1;

  let showStartEllipsis = false;
  let showEndEllipsis = false;

  // create an array of pages to repeat in the pager control
  let startPage = 0;
  let endPage = 0;
  if (totalPages <= PAGES_TO_SHOW) {
    // less than PAGES_TO_SHOW total pages, so show all
    startPage = 1;
    endPage = totalPages;
  } else if (currentPage <= PAGES_TO_SHOW - PAGES_ON_EITHER_SIDE) {
    // more than PAGINATION_THRESHOLD total pages so calculate start and end pages
    startPage = 1;
    endPage = PAGES_TO_SHOW;
    showEndEllipsis = true;
  } else if (currentPage + PAGES_ON_EITHER_SIDE >= totalPages) {
    // current page approaching the total pages
    startPage = totalPages - (PAGES_TO_SHOW - 1);
    endPage = totalPages;
    showStartEllipsis = true;
  } else {
    // current page is somewhere in the middle
    startPage = currentPage - PAGES_ON_EITHER_SIDE;
    endPage = currentPage + PAGES_ON_EITHER_SIDE;
    showStartEllipsis = true;
    showEndEllipsis = true;
  }

  const pages = Array.from(
    { length: endPage + 1 - startPage },
    (_, i) => startPage + i,
  );

  // Too large or small currentPage
  let correctCurrentPage = currentPage;
  if (currentPage > totalPages) {
    correctCurrentPage = totalPages;
  }
  if (currentPage <= 0) {
    correctCurrentPage = 1;
  }

  return {
    currentPage: correctCurrentPage,
    pages,
    showEndEllipsis,
    showStartEllipsis,
    postLimit,
    total,
    totalPages,
  };
};

const reducer: Reducer<State, PaginationAction> = (state, action) => {
  switch (action.type) {
    case ActionTypes.PAGE_CHANGE:
      return getState({
        ...state,
        currentPage: action.page,
      });
    case ActionTypes.TOTAL_CHANGE:
      return getState({ ...state, total: action.total });
    default:
      throw new Error();
  }
};

const Pagination: FC<PaginationProps> = ({ totalPages, postLimit }) => {
  const [ isLoading, setIsLoading ] = useState(false);

  const {
    push, pathname, query, asPath,
  } = useRouter();
  const queryPage = Number(query?.page) || 1;

  const [ state, dispatch ] = useReducer(
    reducer,
    {
      currentPage: queryPage,
      total: totalPages,
      postLimit,
    },
    getState,
  );

  // Change page
  interface IChangePage {
    (page: number): void;
  }
  const changePage: IChangePage = (page) => {
    setIsLoading(true);
    dispatch(PaginationActionCreators.PAGE_CHANGE(page));

    const newQuery = { ...query };

    if (page === 1) {
      delete newQuery.page;
    } else {
      newQuery.page = String(page);
    }

    push({
      pathname,
      query: newQuery,
    });
  };

  useEffect(() => {
    dispatch(PaginationActionCreators.PAGE_CHANGE(queryPage));
  }, [ queryPage ]);

  useEffect(() => {
    if (totalPages !== state.total) {
      dispatch(PaginationActionCreators.TOTAL_CHANGE(totalPages));
    }
  }, [ totalPages, state, dispatch ]);

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [ asPath ]);

  if (state.totalPages === 1) {
    return null;
  }
  return (
    <div className={ s.pagination }>
      <button
        className={ clsx(s.pagination__button, s.pagination__button_start) }
        type="button"
        onClick={ () => {
          changePage(1);
        } }
        disabled={ state.currentPage === 1 || isLoading }
      >
        {'<<'}
      </button>

      <button
        className={ clsx(s.pagination__button, s.pagination__button_prev) }
        type="button"
        onClick={ () => {
          changePage(state.currentPage - 1);
        } }
        disabled={ state.currentPage === 1 || isLoading }
      >
        {'<'}
      </button>

      {state.showStartEllipsis && (
        <button
          className={ clsx(s.pagination__button, s.pagination__button_dots) }
          type="button"
          disabled
        >
          ...
        </button>
      )}

      {state.pages.map((page) => (
        <button
          key={ page }
          className={ clsx(
            s.pagination__button,
            s.pagination__button_page,
            state.currentPage === page && s.pagination__button,
          ) }
          type="button"
          onClick={ () => {
            changePage(page);
          } }
          disabled={ state.currentPage === page || isLoading }
        >
          {page}
        </button>
      ))}

      {state.showEndEllipsis && (
        <button
          className={ clsx(s.pagination__button, s.pagination__button_dots) }
          type="button"
          disabled
        >
          ...
        </button>
      )}

      <button
        className={ clsx(s.pagination__button, s.pagination__button_next) }
        type="button"
        onClick={ () => {
          changePage(state.currentPage + 1);
        } }
        disabled={ state.currentPage === state.totalPages || isLoading }
      >
        {'>'}
      </button>

      <button
        className={ clsx(s.pagination__button, s.pagination__button_end) }
        type="button"
        onClick={ () => {
          changePage(state.totalPages);
        } }
        disabled={ state.currentPage === state.totalPages || isLoading }
      >
        {'>>'}
      </button>
    </div>
  );
};

export default Pagination;
