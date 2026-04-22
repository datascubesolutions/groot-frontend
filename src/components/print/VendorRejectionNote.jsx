// @ts-nocheck
import React from "react";

const formatDate = (dateString, format = "dd/mm/yyyy") => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year4 = date.getFullYear();
  const year2 = year4.toString().slice(-2);

  if (format === "dd-mm-yy") return `${day}-${month}-${year2}`;
  return `${day}/${month}/${year4}`;
};

export default function VendorRejectionNote({ data }) {
  if (!data) return null;

  return (
    <div className="page-break-after-always mx-auto flex min-h-[297mm] w-full max-w-4xl flex-col bg-white px-10 py-8 font-sans text-[12px] text-black print:m-0 print:min-h-full print:p-0">
      {/* Top Header */}
      <div className="flex items-start justify-between pb-1 text-[12px]">
        <div className="w-1/4"></div>
        <div className="flex-1 text-center font-normal">
          Vendor Rejection Note : (Normal Rejection)
        </div>
        <div className="w-1/4 whitespace-nowrap text-right">Page 1 of 1</div>
      </div>
      <div className="mb-1 border-b-[1.5px] border-black"></div>

      {/* Company Name */}
      <h1 className="mb-3 text-center text-[18px] font-bold tracking-wide">
        Lineomatic India Private Limited
      </h1>

      {/* Header Info */}
      <div className="mb-4 mt-2 flex justify-between leading-tight">
        {/* Left Side */}
        <div className="flex-1">
          <table className="w-full text-left">
            <tbody>
              <tr>
                <td className="w-64 pb-0.5 pr-2 text-right font-normal">
                  Rejection No.
                </td>
                <td className="pb-0.5">
                  : {data.year ? data.year.trim() : ""}/VR/{data.number || "-"}
                </td>
              </tr>
              <tr>
                <td className="w-64 pb-0.5 pr-2 text-right font-normal">
                  Supplier&apos;s Code and Name
                </td>
                <td className="pb-0.5 uppercase">
                  : {data.vendor_code?.trim()} : {data.vendor_name?.trim()}
                </td>
              </tr>
              <tr>
                <td className="w-64 pr-2 text-right align-top font-normal">
                  Address
                </td>
                <td className="flex align-top font-sans uppercase leading-[1.3]">
                  <div className="mr-1 whitespace-pre">: </div>
                  <div>
                    PLOT NO-184/A/9,NR - JAIHIND METAL CROSS
                    <br />
                    ROAD,LIONS SCHOOL ROAD
                    <br />
                    NARODA, AHMEDABAD - 382330.
                    <br />
                    Ahmedabad - 382 330
                    <br />
                    Gujarat
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Right Side */}
        <div className="w-64 pt-[2px] text-right">
          <div>Rejection Date : {formatDate(data.date)}</div>
        </div>
      </div>

      {/* Table Section */}
      <div className="mb-6 mt-2 w-full">
        {/* Table Header */}
        <div className="box-border flex w-full border-b border-t border-black text-left font-normal">
          <div className="w-10 border-r border-black py-1 text-center">
            Sr.
            <br />
            No.
          </div>
          <div className="flex-1 border-r border-dashed border-gray-400 py-1 pl-2">
            Item Code
            <br />
            Item Description
          </div>
          <div className="w-32 border-r border-dashed border-gray-400 py-1 pr-2 text-right">
            Qty.Rej./IUOM
          </div>
          <div className="w-48 border-r border-dashed border-gray-400 py-1 pl-2">
            WH Code
            <br />
            WH Desc.
          </div>
          <div className="w-32 py-1 pl-2">
            Loc. Code
            <br />
            Loc. Desc.
          </div>
        </div>

        {/* Table Body */}
        <div className="box-border w-full border-b border-black">
          {data.details?.map((item, index) => (
            <div
              key={item.id}
              className="flex w-full items-stretch border-b border-dashed border-gray-400 last:border-b-0"
            >
              {/* Sr No Column (Spans full height of the item row) */}
              <div className="w-10 flex-shrink-0 border-r border-black py-2 text-center">
                {index + 1}
              </div>

              {/* Rest of the content */}
              <div className="flex flex-1 flex-col justify-start">
                {/* Top Half of Item (Item code, Qty, WH code, Loc code) */}
                <div className="flex w-full">
                  <div className="flex-1 border-r border-dashed border-gray-400 py-1 pl-2 pr-2 leading-[1.3]">
                    <div className="uppercase">{item.item_code}</div>
                    <div className="mt-[2px] uppercase">{item.item_name}</div>
                  </div>
                  <div className="w-32 border-r border-dashed border-gray-400 py-1 pr-2 text-right leading-[1.3]">
                    <div>{Number(item.rejected_puom_qty).toFixed(4)}</div>
                    <div className="mt-[2px]">{item.puom}</div>
                  </div>
                  <div className="w-48 border-r border-dashed border-gray-400 py-1 pl-2 leading-[1.3]">
                    <div className="uppercase">
                      {item.warehouse_code?.trim() || "-"}
                    </div>
                    <div className="mt-[2px] uppercase">
                      {item.warehouse_description?.trim() || "-"}
                    </div>
                  </div>
                  <div className="w-32 py-1 pl-2 leading-[1.3]">
                    <div></div>
                    <div></div>
                  </div>
                </div>

                {/* Dashed line dividing top and bottom halves */}
                <div className="my-0.5 w-full border-t border-dashed border-gray-400"></div>

                {/* Bottom Half of Item (GRN Ref, PO Ref, Reason Code, etc) */}
                <div className="flex flex-col px-2 py-1 leading-[1.4] text-gray-800">
                  <div className="flex w-full uppercase">
                    <div className="flex w-[45%] gap-1">
                      <span className="w-24">GRN Ref</span>
                      <span>
                        :{" "}
                        {item.grn_year
                          ? `${item.grn_year}/${item.grn_group || "GR"}/${item.grn_number || "-"}`
                          : ""}
                      </span>
                    </div>
                    <div className="flex w-[55%] gap-1">
                      <span className="w-24">PO Ref</span>
                      <span>
                        :{" "}
                        {item.po_year
                          ? `${item.po_year}${item.po_group || "PO"}${item.po_number || "-"}`
                          : ""}
                      </span>
                    </div>
                  </div>

                  <div className="flex w-full uppercase">
                    <div className="flex w-[45%] gap-1">
                      <span className="w-24">GRN Date</span>
                      <span>: {formatDate(item.grn_date)}</span>
                    </div>
                    <div className="flex w-[55%] gap-1">
                      <span className="w-24">PO Date</span>
                      <span>: {formatDate(item.order_date)}</span>
                    </div>
                  </div>

                  <div className="mt-[2px] flex w-full uppercase">
                    <div className="flex w-[45%] gap-1">
                      <span className="w-24">Reason Code</span>
                      <span>
                        : {item.reason_code}
                        {item.reason_description
                          ? `:${item.reason_description}`
                          : ""}
                      </span>
                    </div>
                    <div className="flex w-[35%] gap-1">
                      <span className="w-24">Challan No</span>
                      <span>: -</span>
                    </div>
                    <div className="w-[20%] pr-6 text-right">
                      <span>
                        Date:{formatDate(item.transaction_date, "dd-mm-yy")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-grow"></div>

      {/* Footer */}
      <div className="mt-6 pb-10 text-[12px]">
        <div className="mb-12 font-normal">Thanking You,</div>
        <div className="mb-24 font-normal">
          For, Lineomatic India Private Limited
        </div>

        <div className="flex items-end justify-between px-2">
          <div className="w-1/3 text-left">
            <div className="mb-8">Prepared by</div>
            <div className="uppercase">
              {data.created_by_name || "BRP - BHAVIN R PANCHAL"}
            </div>
            <div>{formatDate(data.created_at) || "11/03/2026"}</div>
          </div>
          <div className="w-1/3 text-center">
            <div className="mx-auto mb-8 w-max pl-10 text-left">
              Authorised by
            </div>
            <div className="mx-auto w-max pl-10 text-left uppercase">
              {data.authorized_by_name || "BRP - BHAVIN R PANCHAL"}
            </div>
            <div className="mx-auto w-max pl-10 text-left">
              {formatDate(data.authorized_at) || "11/03/2026"}
            </div>
          </div>
          <div className="w-1/3 text-right">
            <div className="mb-8">Received as above</div>
            <div>Signature of Vendor</div>
          </div>
        </div>
      </div>
    </div>
  );
}
