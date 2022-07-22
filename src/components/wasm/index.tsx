import React, { useState, useEffect } from 'react';
import initSqlJs, { Database, QueryExecResult, SqlValue } from 'sql.js';
import sqlwasm from 'sql.js/dist/sql-wasm.wasm';

export default function WasmTest() {
  const origin = process.env.NODE_ENV === 'development' ? '' : window.location.origin;
  const url = origin + sqlwasm;

  const [db, setDb] = useState<Database>();
  const [error, _] = useState();

  useEffect(() => {
    (async () => {
      try {
        const SQL = await initSqlJs({
          locateFile: (_file) => {
            console.log({ url });
            return url;
          },
        });
        setDb(new SQL.Database());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  if (error) return <pre>{error}</pre>;
  else if (!db) return <pre>Loading...</pre>;
  else return <SQLRepl db={db} />;
}

/**
 * A simple SQL read-eval-print-loop
 * @param {{db: import("sql.js").Database}} props
 */
function SQLRepl({ db }: { db: Database }) {
  const [error, _] = useState(null);
  const [results, setResults] = useState<QueryExecResult[]>([]);

  function exec(sql: string) {
    try {
      // The sql is executed synchronously on the UI thread.
      // You may want to use a web worker here instead
      setResults(db.exec(sql)); // an array of objects is returned
    } catch (err) {
      // exec throws an error when the SQL statement is invalid
      console.log(err);
      setResults([]);
    }
  }
  const [query, setQuery] = useState('');
  return (
    <div className="App">
      <h1>lol</h1>

      <textarea
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder="Enter some SQL. No inspiration ? Try “select sqlite_version()”"
      ></textarea>

      <button onClick={() => exec(query)}>exec</button>

      <pre className="error">{(error || '').toString()}</pre>

      <pre>
        {
          // results contains one object per select statement in the query
          results.map(({ columns, values }, i) => (
            <ResultsTable key={i} columns={columns} values={values} />
          ))
        }
      </pre>
    </div>
  );
}

/**
 * Renders a single value of the array returned by db.exec(...) as a table
 * @param {import("sql.js").QueryExecResult} props
 */
function ResultsTable({ columns, values }: { columns: string[]; values: SqlValue[][] }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((columnName: string, i: number) => (
            <td key={i}>{columnName}</td>
          ))}
        </tr>
      </thead>

      <tbody>
        {
          // values is an array of arrays representing the results of the query
          values.map((row, i: number) => (
            <tr key={i}>
              {row.map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
