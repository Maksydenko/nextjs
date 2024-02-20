import { FC, useMemo } from 'react';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss';

interface PaginationProps {
  itemsPerTotal: number;
  itemsPerPage: number;
  pageRangeDisplayed?: number;
}

const Pagination: FC<PaginationProps> = ({
  itemsPerTotal,
  itemsPerPage,
  pageRangeDisplayed = 1,
}) => {
  const { push, query } = useRouter();
  const querySlugs = useMemo(() => query.slugs || [], [ query.slugs ]);
  const { length: querySlugsLength } = querySlugs;

  const isQuerySlugsIsArray = Array.isArray(querySlugs);
  const lastQuerySlug = querySlugs[querySlugsLength - 1];
  const pageNumber = lastQuerySlug?.split('-')?.[1];
  const initialPage = (+pageNumber || 1) - 1;

  const pageCount = Math.ceil(itemsPerTotal / itemsPerPage);

  // Handle page click
  interface IHandlePageClick {
    (e: { selected: number }): void;
  }
  const handlePageChange: IHandlePageClick = ({ selected }) => {
    const selectedPageNumber = selected + 1;

    if (isQuerySlugsIsArray) {
      const queryLastSlug = querySlugs[querySlugsLength - 1];

      if (queryLastSlug?.startsWith('page-')) {
        querySlugs.pop();
      }

      const basePathname = `/${ querySlugs.join('/') }`;
      const pageNumberPathname = selectedPageNumber === 1 ? '' : `/page-${ selectedPageNumber }`;
      const pathname = basePathname + pageNumberPathname;

      push({
        pathname,
      });
    }
  };

  if (!itemsPerTotal) {
    return null;
  }
  return (
    <ReactPaginate
      className={ s.pagination }
      pageClassName={ s.pagination__page }
      pageLinkClassName={ s.pagination__pageLink }
      activeClassName={ s.pagination__active }
      activeLinkClassName={ s.pagination__activeLink }
      previousClassName={ s.pagination__previous }
      nextClassName={ s.pagination__next }
      previousLinkClassName={ s.pagination__previousLink }
      nextLinkClassName={ s.pagination__nextLink }
      disabledClassName={ s.pagination__disabled }
      disabledLinkClassName={ s.pagination__disabledLink }
      breakClassName={ s.pagination__break }
      breakLinkClassName={ s.pagination__breakLink }
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      pageCount={ pageCount }
      pageRangeDisplayed={ pageRangeDisplayed }
      forcePage={ initialPage }
      onPageChange={ handlePageChange }
    />
  );
};

export default Pagination;
