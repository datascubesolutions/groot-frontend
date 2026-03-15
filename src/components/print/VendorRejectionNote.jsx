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
    <div className="w-full max-w-4xl mx-auto py-8 px-10 bg-white text-black min-h-[297mm] font-sans text-[12px] flex flex-col print:p-0 print:m-0 print:min-h-full page-break-after-always">
      {/* Top Header */}
      <div className="flex justify-between items-start pb-1 text-[12px]">
        <div className="w-1/4"></div>
        <div className="flex-1 text-center font-normal">Vendor Rejection Note : (Normal Rejection)</div>
        <div className="w-1/4 text-right whitespace-nowrap">Page 1 of 1</div>
      </div>
      <div className="border-b-[1.5px] border-black mb-1"></div>

      {/* Company Name */}
      <h1 className="text-center text-[18px] font-bold mb-3 tracking-wide">Lineomatic India Private Limited</h1>

      {/* Header Info */}
      <div className="flex justify-between mb-4 mt-2 leading-tight">
        {/* Left Side */}
        <div className="flex-1">
          <table className="w-full text-left">
            <tbody>
              <tr>
                <td className="w-64 text-right pr-2 font-normal pb-0.5">Rejection No.</td>
                <td className="pb-0.5">: {data.year ? data.year.trim() : ''}/VR/{data.number || '-'}</td>
              </tr>
              <tr>
                <td className="w-64 text-right pr-2 font-normal pb-0.5">Supplier's Code and Name</td>
                <td className="uppercase pb-0.5">: {data.vendor_code?.trim()} : {data.vendor_name?.trim()}</td>
              </tr>
              <tr>
                <td className="w-64 text-right pr-2 font-normal align-top">Address</td>
                <td className="align-top uppercase leading-[1.3] flex font-sans">
                  <div className="whitespace-pre mr-1">: </div>
                  <div>
                    PLOT NO-184/A/9,NR - JAIHIND METAL CROSS<br/>
                    ROAD,LIONS SCHOOL ROAD<br/>
                    NARODA, AHMEDABAD - 382330.<br/>
                    Ahmedabad - 382 330<br/>
                    Gujarat
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Right Side */}
        <div className="w-64 text-right pt-[2px]">
          <div>Rejection Date : {formatDate(data.date)}</div>
        </div>
      </div>

      {/* Table Section */}
      <div className="mb-6 w-full mt-2">
        {/* Table Header */}
        <div className="w-full border-t border-b border-black flex text-left font-normal box-border">
          <div className="w-10 text-center border-r border-black py-1">
            Sr.<br/>No.
          </div>
          <div className="flex-1 py-1 pl-2 border-r border-dashed border-gray-400">
            Item Code<br/>Item Description
          </div>
          <div className="w-32 text-right py-1 pr-2 border-r border-dashed border-gray-400">
            Qty.Rej./IUOM
          </div>
          <div className="w-48 py-1 pl-2 border-r border-dashed border-gray-400">
            WH Code<br/>WH Desc.
          </div>
          <div className="w-32 py-1 pl-2">
            Loc. Code<br/>Loc. Desc.
          </div>
        </div>
        
        {/* Table Body */}
        <div className="w-full border-b border-black box-border">
          {data.details?.map((item, index) => (
            <div key={item.id} className="flex w-full items-stretch border-b border-dashed border-gray-400 last:border-b-0">
              
              {/* Sr No Column (Spans full height of the item row) */}
              <div className="w-10 flex-shrink-0 text-center py-2 border-r border-black">
                {index + 1}
              </div>

              {/* Rest of the content */}
              <div className="flex-1 flex flex-col justify-start">
                
                {/* Top Half of Item (Item code, Qty, WH code, Loc code) */}
                <div className="flex w-full">
                  <div className="flex-1 py-1 pl-2 border-r border-dashed border-gray-400 leading-[1.3] pr-2">
                    <div className="uppercase">{item.item_code}</div>
                    <div className="uppercase mt-[2px]">{item.item_name}</div>
                  </div>
                  <div className="w-32 py-1 text-right pr-2 border-r border-dashed border-gray-400 leading-[1.3]">
                    <div>{Number(item.rejected_puom_qty).toFixed(4)}</div>
                    <div className="mt-[2px]">{item.puom}</div>
                  </div>
                  <div className="w-48 py-1 pl-2 border-r border-dashed border-gray-400 leading-[1.3]">
                    <div className="uppercase">{item.warehouse_code?.trim() || "-"}</div>
                    <div className="uppercase mt-[2px]">{item.warehouse_description?.trim() || "-"}</div>
                  </div>
                  <div className="w-32 py-1 pl-2 leading-[1.3]">
                    <div></div>
                    <div></div>
                  </div>
                </div>

                {/* Dashed line dividing top and bottom halves */}
                <div className="w-full border-t border-dashed border-gray-400 my-0.5"></div>

                {/* Bottom Half of Item (GRN Ref, PO Ref, Reason Code, etc) */}
                <div className="flex flex-col py-1 px-2 leading-[1.4] text-gray-800">
                   
                   <div className="flex w-full uppercase">
                     <div className="w-[45%] flex gap-1">
                       <span className="w-24">GRN Ref</span>
                       <span>: {item.grn_year ? `${item.grn_year}/${item.grn_group || 'GR'}/${item.grn_number || '-'}` : ''}</span>
                     </div>
                     <div className="w-[55%] flex gap-1">
                       <span className="w-24">PO Ref</span>
                       <span>: {item.po_year ? `${item.po_year}${item.po_group || 'PO'}${item.po_number || '-'}` : ''}</span>
                     </div>
                   </div>

                   <div className="flex w-full uppercase">
                     <div className="w-[45%] flex gap-1">
                       <span className="w-24">GRN Date</span>
                       <span>: {formatDate(item.grn_date)}</span>
                     </div>
                     <div className="w-[55%] flex gap-1">
                       <span className="w-24">PO Date</span>
                       <span>: {formatDate(item.order_date)}</span>
                     </div>
                   </div>

                   <div className="flex w-full uppercase mt-[2px]">
                     <div className="w-[45%] flex gap-1">
                       <span className="w-24">Reason Code</span>
                       <span>: {item.reason_code}{item.reason_description ? `:${item.reason_description}` : ''}</span>
                     </div>
                     <div className="w-[35%] flex gap-1">
                       <span className="w-24">Challan No</span>
                       <span>: -</span>
                     </div>
                     <div className="w-[20%] text-right pr-6">
                       <span>Date:{formatDate(item.transaction_date, "dd-mm-yy")}</span>
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
      <div className="text-[12px] pb-10 mt-6">
        <div className="mb-12 font-normal">Thanking You,</div>
        <div className="mb-24 font-normal">For, Lineomatic India Private Limited</div>

        <div className="flex justify-between items-end px-2">
          <div className="w-1/3 text-left">
            <div className="mb-8">Prepared by</div>
            <div className="uppercase">{data.created_by_name || 'BRP - BHAVIN R PANCHAL'}</div>
            <div>{formatDate(data.created_at) || '11/03/2026'}</div>
          </div>
          <div className="w-1/3 text-center">
            <div className="mb-8 pl-10 text-left w-max mx-auto">Authorised by</div>
            <div className="uppercase pl-10 text-left w-max mx-auto">{data.authorized_by_name || 'BRP - BHAVIN R PANCHAL'}</div>
            <div className="pl-10 text-left w-max mx-auto">{formatDate(data.authorized_at) || '11/03/2026'}</div>
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
