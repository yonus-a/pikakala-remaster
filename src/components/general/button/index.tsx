export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button {...props} className={`${props.className} btn`}>
      {props.children}
    </button>
  );
}
