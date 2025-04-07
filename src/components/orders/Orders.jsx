"use client";
import React from "react";
import HistoryIcon from "@mui/icons-material/History";
import { useCart } from "../CartData";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Chip,
  Accordion,
  AccordionItem,
} from "@heroui/react";

export default function Orders() {
  const { orders } = useCart();
  const statusColorMap = {
    Delivered: "success",
    Cancelled: "danger",
    Pending: "warning",
  };
  const reversedOrders = [...orders].reverse();
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  return (
    <div className="flex min-h-screen gap-4 justify-center p-5 bg-dark">
      {reversedOrders.length === 0 ? (
        <div className="flex gap-2 items-center">
          <HistoryIcon />
          <h1>No orders history</h1>
        </div>
      ) : (
        <div className="w-full">
          <h1 className="text-center text-3xl lg:text-4xl font-extrabold font-poppins mb-10">
            Order History
          </h1>
          <ul className="space-y-4">
            {reversedOrders.map((order, index) => (
              <li key={index} className="border-b border-gray-200 pb-4">
                <div className="flex gap-5 justify-between">
                  <Table
                    classNames={{
                      wrapper: "w-[240px] sm:w-full",
                    }}
                    aria-label="Example table with dynamic content"
                    color="success"
                    topContent={
                      <div className="flex justify-between">
                        <h2 className="font-semibold">
                          Order #{order.orderId}
                        </h2>
                        <p>{formatDate(order.orderDate)}</p>
                      </div>
                    }
                    bottomContent={
                      <div className="flex justify-between">
                        <h2 className="font-semibold">
                          ₹{order.totalAmount?.toFixed(2) || "N/A"}
                        </h2>
                        <Chip
                          color={statusColorMap[order.status]}
                          size="sm"
                          variant="flat"
                        >
                          {order.status}
                        </Chip>
                        {/* <Accordion>
                          <AccordionItem
                            key="1"
                            aria-label="Accordion 1"
                            title="Accordion 1"
                          >
                          </AccordionItem>
                        </Accordion> */}
                      </div>
                    }
                  >
                    <TableHeader>
                      <TableColumn width={300}>PIZZA NAME</TableColumn>
                      <TableColumn width={150}>SIZE</TableColumn>
                      <TableColumn width={100}>QUANTITY</TableColumn>
                      <TableColumn width={200}>PRICE</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {order.items.map((item, i) => (
                        <TableRow key={i}>
                          <TableCell>{item.pizzaName}</TableCell>
                          <TableCell>{item.size}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>
                            ₹{item.totalPrice?.toFixed(2) || "N/A"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
