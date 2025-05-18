interface Props {
  children?: React.ReactNode;
  className?: string;
  animation: string;
  delay?: number;
}

export default function AnimatedItem(props: Readonly<Props>) {
  var { animation, className = "", children, delay = 0 } = props;
  var classnames = `wow animate__animated ${animation} ${className}`;

  return (
    <li className={classnames} data-wow-delay={`${delay}ms`}>
      {children}
    </li>
  );
}
