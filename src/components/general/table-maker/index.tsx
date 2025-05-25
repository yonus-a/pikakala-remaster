"use client";

import { Table, Tbody, Td, Tr } from "react-super-responsive-table";
import TableHeader from "@/components/general/table-header";
import formatDateTime from "@/utils/date/formatDateTime";
import { yesOrNo } from "@/utils/general/yesOrNo";
import formatDate from "@/utils/date/formatDate";
import { TableMakerType } from "./type";
import objectPath from "object-path";
import { nanoid } from "nanoid";

export default function TableMaker({
  data,
  info,
  children,
  extraInfo,
  renderProps,
  addRowClass = () => "",
}: TableMakerType) {
  return (
    <div className="table-wrapper">
      <Table className="table">
        <TableHeader headers={info.map(({ head }) => head)} />
        <Tbody>
          {!!data && (
            <>
              {data.map((item) => (
                <Tr key={nanoid()} className={addRowClass(item)}>
                  {info.map(({ key, Render, ...type }: any) => {
                    switch (true) {
                      case type.date: {
                        const time = objectPath.get(item, key);
                        return (
                          <Td key={key}>{time ? formatDate(time) : ""}</Td>
                        );
                      }
                      case type.datetime: {
                        const time = objectPath.get(item, key);
                        return (
                          <Td key={key}>{time ? formatDateTime(time) : ""}</Td>
                        );
                      }
                      case type.component: {
                        return (
                          <Td>
                            <Render {...renderProps} item={item} />
                          </Td>
                        );
                      }
                      case type.yesOrNo: {
                        return (
                          <Td key={key}>
                            {yesOrNo[objectPath.get(item, key)]}
                          </Td>
                        );
                      }
                      case type.header: {
                        return null;
                      }
                      case !!type.options: {
                        return (
                          <Td key={key}>
                            {type.options[objectPath.get(item, key)]}
                          </Td>
                        );
                      }
                      default: {
                        return (
                          <Td key={key}>
                            {objectPath.get(item, key) ||
                              objectPath.get(extraInfo, key) ||
                              "-"}
                          </Td>
                        );
                      }
                    }
                  })}
                  {children && children(item)}
                </Tr>
              ))}
            </>
          )}
        </Tbody>
      </Table>
    </div>
  );
}
