import React, { useRef } from 'react';
import styled from 'styled-components';

import { StyledTable } from '../../../components';
import { debounce } from '../../../util';

const TableWrapper = styled.div`
  padding: 1rem;
`;

const SearchInput = styled.input`
  width: 25%;
  margin-bottom: 1em;
  font-size: 14px;
  padding: 5px;
`;

const columns = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Mode',
    accessor: 'mode',
  },
  {
    Header: 'Type',
    accessor: 'type',
  },
  {
    Header: 'Destination',
    accessor: 'destination',
  },
  {
    Header: 'Origin',
    accessor: 'origin',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
];


export default function ShipmentTable({ data, onClickRow, queryOptions, setQueryOptions }) {
  const debouncedSearchTextChange = useRef(
    debounce(filterText => setQueryOptions({ ...queryOptions, filterText }), 300)
  ).current;

  return (
    <TableWrapper>
      <SearchInput
        type="text"
        onChange={event => debouncedSearchTextChange(event.target.value)}
        placeholder="Search"
      />
      <StyledTable clickable>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.Header} onClick={() => {
                const sortDescending = queryOptions.sortBy == column.accessor ? !queryOptions.sortDescending : false;
                setQueryOptions({ ...queryOptions, sortBy: column.accessor, sortDescending });
              }}>
                {column.Header}
                <span>
                  {queryOptions.sortBy == column.accessor
                    ? queryOptions.sortDescending
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(
            (row, i) => {
              return (
                <tr key={row.id} onClick={() => onClickRow(row.id)}>
                  {columns.map(column => {
                    return (
                      <td key={column.accessor}>{row[column.accessor]}</td>
                    )
                  })}
                </tr>
              )}
          )}
        </tbody>
      </StyledTable>
      <>
        {queryOptions.page > 1 && <button onClick={() => setQueryOptions({ ...queryOptions, page: queryOptions.page - 1 })}>Prev</button>}
        {queryOptions.pageSize == data.length && <button onClick={() => setQueryOptions({ ...queryOptions, page: queryOptions.page + 1 })}>Next</button>}
      </>
    </TableWrapper>
  )
}