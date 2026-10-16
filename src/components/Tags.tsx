export function Tags({ items }: { items: string[] }) {
  if (!items.length) return null
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((t) => (
        <li key={t} className="tag">{t}</li>
      ))}
    </ul>
  )
}
