import { Th, Thead, Tr } from "react-super-responsive-table";

interface Props {
  headers: Array<string>;
}

export default function TableHeader({ headers }: Props) {
  return (
    <Thead>
      <Tr>
        {headers.map((item) => {
          return <Th key={item}>{item}</Th>;
        })}
      </Tr>
    </Thead>
  );
}
