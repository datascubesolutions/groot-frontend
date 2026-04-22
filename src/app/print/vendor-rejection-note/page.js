// @ts-nocheck
"use client";

import VendorRejectionNote from "@/components/print/VendorRejectionNote";
import { qcService } from "@/services/qcService";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function PrintContent() {
  const searchParams = useSearchParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrintData = async () => {
      const idsParam = searchParams.get("ids");
      if (!idsParam) {
        setError("No IDs provided in the URL query.");
        setLoading(false);
        return;
      }

      const ids = idsParam.split(",").map((id) => parseInt(id.trim(), 10));

      try {
        setLoading(true);
        const response = await qcService.fetchVendorRejectionNotes(ids, false);
        if (response && response.data && response.data.data) {
          setData(response.data.data);

          // Trigger print dialog automatically when rendering is complete.
          // In a real application, you might want a small delay or button to trigger it manually.
          setTimeout(() => {
            window.print();
          }, 1000);
        } else {
          setError("Invalid response format received from the server.");
        }
      } catch (err) {
        setError("Failed to fetch print data. " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrintData();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="p-8 text-center text-gray-500">Loading document...</div>
    );
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }

  if (!data || data.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No rejection notes found.
      </div>
    );
  }

  return (
    <div className="print-container min-h-screen bg-gray-100 py-8 print:bg-white print:p-0">
      {/* Hide controls when printing */}
      <div className="mx-auto mb-4 flex max-w-4xl justify-between print:hidden">
        <button
          onClick={() => window.print()}
          className="rounded bg-blue-600 px-4 py-2 text-white shadow transition hover:bg-blue-700"
        >
          Print Document
        </button>
      </div>

      <div className="space-y-8 print:space-y-0">
        {data.map((noteData) => (
          <VendorRejectionNote key={noteData.id} data={noteData} />
        ))}
      </div>
    </div>
  );
}

export default function VendorRejectionNotePrintPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-gray-500">
          Loading component...
        </div>
      }
    >
      <PrintContent />
    </Suspense>
  );
}
