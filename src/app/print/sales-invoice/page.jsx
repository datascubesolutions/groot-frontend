import React from 'react';

export const metadata = {
  title: 'Sales Invoice Print',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SalesInvoicePrint() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 print:py-0 print:bg-white flex justify-center text-black font-sans">
      <div className="w-[210mm] min-h-[297mm] bg-white print:shadow-none shadow-lg print:m-0 m-4 flex flex-col p-[5mm]">
        
        <table className="w-full border-collapse border border-black text-[11px] leading-[1.35] text-black table-fixed">
          <colgroup>
            <col style={{ width: '5%' }} />
            <col style={{ width: '40%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '15%' }} />
          </colgroup>
          <tbody>
            
            {/* ROW 1: Header */}
            <tr>
              <td colSpan={2} className="border-r border-b border-black p-[4px] align-top">
                Lineomatic India Private Limited<br/>
                D/62, DIAMOND PARK, G.I.D.C.<br/>
                NARODA,<br/>
                OPP. TOYOTA SHOWROOM,<br/>
                NATIONAL HIGHWAY NO. 8, NARODA,<br/>
                AHMEDABAD-382330
              </td>
              <td colSpan={4} className="border-b border-black p-[4px] text-center align-top">
                <div className="font-bold text-[14px] mt-1 mb-[2px] tracking-wide">INVOICE CUM CHALLAN</div>
                <div className="font-bold leading-tight">
                    (For removal of excisable goods<br/>
                    from the factory on payment of duty<br/>
                    under rule 11, CE Rules 2002)
                </div>
              </td>
            </tr>

            {/* ROW 2: Customer, Meta Top */}
            <tr>
               <td colSpan={2} rowSpan={3} className="border-r border-b border-black align-top p-0">
                  <div className="h-1/2 border-b border-black p-[4px]">
                     <div className="flex"><span className="w-20">Customer:</span></div>
                     <div className="pl-0 mt-1">
                        VIGNESH ENTERPRISES<br/>
                        2-10-171, JYOTHINAGAR, KARIMNAGAR,<br/>
                        KARIMNAGAR, HYDERABAD<br/>
                        TELANGANA<br/>
                        HYD-505001
                     </div>
                  </div>
                  <div className="h-1/2 p-[4px]">
                     <div className="flex"><span className="w-20">Consignee:</span></div>
                     <div className="pl-0 mt-1">
                        VIGNESH ENTERPRISES<br/>
                        2-10-171, JYOTHINAGAR, KARIMNAGAR,<br/>
                        KARIMNAGAR, HYDERABAD<br/>
                        TELANGANA<br/>
                        HYD-505001
                     </div>
                  </div>
               </td>
               <td colSpan={2} className="border-r border-b border-black align-top p-[4px] space-y-[2px]">
                  <div className="flex"><span className="w-28">Customer No :</span><span>V134</span></div>
                  <div className="flex"><span className="w-28">Customer&apos;s P.O. No</span><span>3948</span></div>
                  <div className="flex"><span className="w-28">Customer&apos;s CST :</span><span></span></div>
                  <div className="flex"><span className="w-28">Customer&apos;s LST :</span><span></span></div>
                  <div className="flex"><span className="w-28">TIN :</span><span></span></div>
                  <div className="flex"><span className="w-28">E.C.C. No.</span><span></span></div>
               </td>
               <td colSpan={2} className="border-b border-black align-top p-[4px] space-y-[2px]">
                  <div className="flex"><span className="w-28">Invoice No. :</span><span>25-26/SS/003460</span></div>
                  <div className="flex"><span className="w-28">Invoice Date :</span><span>02/03/2026</span></div>
                  <div className="flex"><span className="w-28">Date of Issue :</span><span>02/03/2026</span></div>
                  <div className="flex"><span className="w-28">Time of Issue :</span><span></span></div>
                  <div className="flex"><span className="w-28">Date of Removal :</span><span>02/03/2026</span></div>
                  <div className="flex"><span className="w-28">Time of Removal :</span><span>000:00:00</span></div>
               </td>
            </tr>

            {/* ROW 3: ECC */}
            <tr>
               <td colSpan={4} className="border-b border-black p-[4px] align-top">
                  ECC No, R.C No - AADCM6512DXM001
               </td>
            </tr>

            {/* ROW 4: Division / Range */}
            <tr>
               <td colSpan={2} className="border-r border-black border-b p-[4px] align-top">
                  Division :
               </td>
               <td colSpan={2} className="p-[4px] border-b border-black align-top">
                  Range : &nbsp;&nbsp;RANGE II (Jurisdictional Office)
               </td>
            </tr>

            {/* ROW 5: Table Headers */}
            <tr className="text-center align-top">
                <td className="border-r border-b border-black p-[4px]">Sr.<br/>No.</td>
                <td className="border-r border-b border-black p-[4px]">Sales Item Code &amp; Description</td>
                <td className="border-r border-b border-black p-[4px]">Product Serial No/<br/>Batch No.</td>
                <td className="border-r border-b border-black p-[4px]">Quantity</td>
                <td className="border-r border-b border-black p-[4px]">Disc.Rate per unit<br/><br/>RS</td>
                <td className="border-b border-black p-[4px]">Total Price of<br/>goods<br/>RS</td>
            </tr>

            {/* BODY ROWS */}
            <tr>
                <td className="border-r border-black p-[4px] pt-4 text-right align-top">1</td>
                <td className="border-r border-black p-[4px] pt-4 align-top">INK 00015<br/>FLEXO LIQUID INK-MID NIGHT BLACK-97</td>
                <td className="border-r border-black p-[4px] pt-4 align-top"></td>
                <td className="border-r border-black p-[4px] pt-4 text-right align-top">75.0000</td>
                <td className="border-r border-black p-[4px] pt-4 text-right align-top">132.30</td>
                <td className="border-black p-[4px] pt-4 text-right align-top">9,922.50</td>
            </tr>
            <tr>
                <td className="border-r border-black p-[4px] pt-2 text-right align-top">2</td>
                <td className="border-r border-black p-[4px] pt-2 align-top">INK 00016<br/>FLEXO LIQUID INK-SUNRISE RED-23</td>
                <td className="border-r border-black p-[4px] pt-2 align-top"></td>
                <td className="border-r border-black p-[4px] pt-2 text-right align-top">50.0000</td>
                <td className="border-r border-black p-[4px] pt-2 text-right align-top">132.30</td>
                <td className="border-black p-[4px] pt-2 text-right align-top">6,615.00</td>
            </tr>
            <tr>
                <td className="border-r border-black p-[4px] pt-2 text-right align-top">3</td>
                <td className="border-r border-black p-[4px] pt-2 align-top">INK 00045<br/>FLEXO LIQUID INK MAGENTA 1106</td>
                <td className="border-r border-black p-[4px] pt-2 align-top"></td>
                <td className="border-r border-black p-[4px] pt-2 text-right align-top">50.0000</td>
                <td className="border-r border-black p-[4px] pt-2 text-right align-top">132.30</td>
                <td className="border-black p-[4px] pt-2 text-right align-top">6,615.00</td>
            </tr>
            
            {/* SPACING ROW to push totals down */}
            <tr className="h-40">
                <td className="border-r border-b border-black"></td>
                <td className="border-r border-b border-black"></td>
                <td className="border-r border-b border-black"></td>
                <td className="border-r border-b border-black"></td>
                <td className="border-r border-b border-black"></td>
                <td className="border-b border-black"></td>
            </tr>

            {/* TOTALS ROW */}
            <tr>
                <td colSpan={4} className="border-r border-b border-black p-[4px] align-top">
                    <div>Total Excisable duty payable (in words)</div>
                    <div className="mt-1">RUPEES FOUR THOUSAND ONE HUNDRED SIXTY-EIGHT ONLY</div>
                </td>
                <td className="border-r border-b border-black p-[4px] align-top">Total</td>
                <td className="border-b border-black p-[4px] align-bottom text-right">23,152.50</td>
            </tr>

            {/* CALCULATIONS BLOCK - ROW 1 */}
            <tr>
                <td colSpan={4} rowSpan={12} className="border-r border-b border-black p-0 align-top relative">
                    <div className="border-b border-black p-[4px] pb-3">
                        <p>Invoice value in words :</p>
                        <p>RUPEES TWENTY-SEVEN THOUSAND THREE HUNDRED TWENTY AND FIFTY</p>
                        <p>PAISE ONLY</p>
                    </div>
                    <div className="border-b border-black p-[4px] pb-3 pt-2">
                        <p>Certified that the particulars given above are true and correct and the amount</p>
                        <p>indicated represents the price actually charged and that there is no flow of</p>
                        <p>additional consideration or indirectly from the buyer</p>
                    </div>
                    <div className="p-[4px] pt-2">
                        <div className="flex"><span className="w-20">TIN :</span><span>24075201978 DT. 01-07-2002</span></div>
                        <div className="flex mt-3 mb-2"><span className="w-20">C.S.T No -</span><span>C.S.T. NO:-24575201978 DT. 01-04-1998</span></div>
                    </div>
                </td>
                <td className="border-r border-b border-black p-[4px]">Total Assessable value</td>
                <td className="border-b border-black p-[4px] text-right">23,152.50</td>
            </tr>
            
            {/* CALCULATIONS BLOCK - ROW 2-12 */}
            <tr>
                <td className="border-r border-b border-black p-[4px] flex justify-between"><span>FREIGHT CHARGES</span><span className="text-[10px]">RS</span></td>
                <td className="border-b border-black p-[4px] text-right">.00</td>
            </tr>
            <tr>
                <td className="border-r border-b border-black p-[4px] flex justify-between"><span>INSURANCE</span><span className="text-[10px]">RS</span></td>
                <td className="border-b border-black p-[4px] text-right">0.00</td>
            </tr>
            <tr>
                <td className="border-r border-b border-black p-[4px] flex justify-between"><span>PACKING CHARGES [SALES]</span><span className="text-[10px]">RS</span></td>
                <td className="border-b border-black p-[4px] text-right">0.00</td>
            </tr>
            <tr>
                <td className="border-r border-b border-black p-[4px] flex justify-between"><span>INTEGRATED GST 18%</span><span className="text-[10px]">18%</span></td>
                <td className="border-b border-black p-[4px] text-right">4,168.00</td>
            </tr>
            <tr><td className="border-r border-b border-black p-[4px]">&nbsp;</td><td className="border-b border-black p-[4px]">&nbsp;</td></tr>
            <tr><td className="border-r border-b border-black p-[4px]">&nbsp;</td><td className="border-b border-black p-[4px]">&nbsp;</td></tr>
            <tr><td className="border-r border-b border-black p-[4px]">&nbsp;</td><td className="border-b border-black p-[4px]">&nbsp;</td></tr>
            <tr><td className="border-r border-b border-black p-[4px]">&nbsp;</td><td className="border-b border-black p-[4px]">&nbsp;</td></tr>
            <tr>
                <td className="border-r border-b border-black p-[4px]">Total Invoice Value</td>
                <td className="border-b border-black p-[4px] text-right">27,320.50</td>
            </tr>
            <tr>
                <td className="border-r border-b border-black p-[4px]">Less : Advance (if any)</td>
                <td className="border-b border-black p-[4px] text-right">0.00</td>
            </tr>
            <tr>
                <td className="border-r border-b border-black p-[4px]">Total Balance Amount</td>
                <td className="border-b border-black p-[4px] text-right">27,320.50</td>
            </tr>

            {/* FOOTER - TERMS & TRANSPORT */}
            <tr>
                <td colSpan={4} className="border-r border-b border-black p-[4px] align-top">
                    <div className="font-bold mb-1">TERMS &amp; CONDITIONS</div>
                    <div>1. Our Risk &amp; responsibility ceasses delivery Ex-Factory unless otherwise specified.</div>
                </td>
                <td colSpan={2} className="border-b border-black p-[4px] align-top pb-[10px]">
                    <div className="flex"><span className="w-32">Mode of Transport :</span><span>By Road</span></div>
                    <div className="flex"><span className="w-32">L.R.No :</span><span></span></div>
                    <div className="flex"><span className="w-32">Date :</span><span></span></div>
                    <div className="flex"><span className="w-32">Permit No :</span><span></span></div>
                    <div className="flex"><span className="w-32">Vehicle No :</span><span></span></div>
                </td>
            </tr>

            {/* FOOTER - SIGNATURES */}
            <tr>
                <td colSpan={2} className="border-r border-black p-0 h-[60px] align-bottom pb-1 text-center">
                   <div className="w-full h-full flex">
                      <div className="flex-1 flex flex-col justify-end pb-1 border-r border-black">Prepared by</div>
                      <div className="flex-1 flex flex-col justify-end pb-1">Verified by</div>
                   </div>
                </td>
                <td colSpan={2} className="border-r border-black p-0 h-[60px] relative text-center">
                   <div className="absolute top-1 left-2">Pre Authenticated</div>
                   <div className="absolute bottom-1 w-full text-center">Authorized Signatory</div>
                </td>
                <td colSpan={2} className="p-0 h-[60px] relative text-center">
                   <div className="absolute top-1 left-3 font-bold">For &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lineomatic India Private Limited</div>
                   <div className="absolute bottom-1 w-full text-center">Authorized Signatory</div>
                </td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>
  );
}
