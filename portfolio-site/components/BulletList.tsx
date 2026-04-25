type BulletListProps = {
  items: readonly string[];
};

export default function BulletList({ items }: BulletListProps) {
  return (
    <ul className="homepage-type-body list-outside list-disc space-y-3 pl-5 text-[color:var(--color-muted)] marker:text-[color:var(--secondary-text)]">
      {items.map((item, index) => (
        <li key={`${index}-${item}`}>{item}</li>
      ))}
    </ul>
  );
}
