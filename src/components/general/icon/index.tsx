interface Props {
  title?: string;
  name: string;
}

export default function Icon({ name, title }: Readonly<Props>) {
  return (
    <svg {...(!title ? { "aria-hidden": "true" } : {})}>
      {title && <title>{title}</title>}
      <use href={`#${name}`} />
    </svg>
  );
}
