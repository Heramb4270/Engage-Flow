import React from 'react'

export function Table({ children }) {
  return <table className="w-full border-collapse">{children}</table>
}

export function TableHeader({ children }) {
  return <thead>{children}</thead>
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>
}

export function TableRow({ children }) {
  return <tr>{children}</tr>
}

export function TableHead({ children }) {
  return <th className="px-4 py-2 text-left font-bold border-b">{children}</th>
}

export function TableCell({ children }) {
  return <td className="px-4 py-2 border-b">{children}</td>
}

