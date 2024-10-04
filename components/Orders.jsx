import HistoryIcon from '@mui/icons-material/History';
import React, { useState } from "react";
import { Button } from "@nextui-org/react";

export default function Orders()  {

  return (
    <div className="flex w-full h-screen px-20 py-10 gap-4 justify-center bg-dark">
        <div className='flex gap-2'>
          <HistoryIcon />
          <h1>No orders history</h1>
        </div>
    </div>
  );
}