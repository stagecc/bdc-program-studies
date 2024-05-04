import type { ReactNode } from "react";
import styles from "./Table.module.css";

interface TableProps<T extends Record<string, string>> {
  columns: {
    /**
     * Unique string identifier to specify this column. Used for
     * lookup in row objects
     */
    key: keyof T;
    /**
     * What to render in the header (title) cell
     */
    headerCell: ReactNode;
    /**
     * Optional function to override what's rendered in the cells
     * for this column.
     */
    render?: (rowData: T) => ReactNode;
  }[];
  /**
   * The data to provide to the table. Must be an array of objects
   * with at least the keys listed in `columns[].key`
   */
  rows: T[];
}

export const Table = <T extends Record<string, string>>({
  columns,
  rows,
}: TableProps<T>) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map(({ headerCell, key }) => (
            <th key={String(key)}>{headerCell}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map(({ key, render }) => (
              <td key={String(key)}>{render ? render(row) : row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
