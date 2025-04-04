"use client";

import { useEffect, useState } from "react";
import {
  addToast,
  Button,
  Card,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { useTheme } from "next-themes";
import { useCart } from "./CartData";
import { useRouter } from "next/navigation";
import { createOrder } from "./PizzaInterfaces";
import { useModalStore } from "@/store/useModalStore";
import { ArrowBigRightDash } from "lucide-react";

export default function CartUi() {
  const { theme } = useTheme();
  const darkMode = theme === "dark";
  const {
    cartCount,
    cartItems,
    clearCart,
    removeItemFromCart,
    cartTotal,
    addNewOrder,
  } = useCart();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen, openModal, closeModal } = useModalStore();
  const router = useRouter();

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const isScriptLoaded = await loadRazorpayScript();

    if (!isScriptLoaded) {
      addToast({
        variant: "destructive",
        title: "Failed to load Razorpay. Please try again later.",
      });
      return;
    }

    if (typeof Razorpay === "undefined") {
      alert("Razorpay is not available. Please try again.");
      return;
    }

    const options = {
      key: "rzp_test_erkUjbE4TD28ds",
      amount: cartTotal * 100,
      currency: "INR",
      name: "PIZzA Delivery",
      description: "Test Transaction",
      handler: function (response) {
        addToast({
          variant: "success",
          title: "Payment successful!",
        });

        const newOrder = createOrder(
          response.razorpay_payment_id,
          "John Doe",
          cartItems,
          new Date(),
          cartTotal
        );
        addNewOrder(newOrder);
        clearCart();
        closeModal();
        router.push("/dashboard/orders");
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "+919999999999",
      },
      notes: {
        address: "note value",
      },
      theme: {
        color: "#4C5D65",
        backdrop_color: "#4C5D65",
      },
      config: {
        display: {
          hide: [{ method: "card" }, { method: "paylater" }],
          preferences: {
            show_default_blocks: true,
          },
        },
      },
    };

    const rzp1 = new Razorpay(options);
    rzp1.open();
  };


  // console.log("Cart items: ", cartItems);

  return (
    <div>
      {cartItems.length > 0 && (
        <Card
          isBlurred
          isPressable
          radius="sm"
          shadow="lg"
          onPress={openModal}
          className="fixed flex gap-5 bottom-5 left-10 border items-center right-10 p-4 text-center z-50"
        >
          <h1 className="text-center flex shadow-sm font-semibold m-0">
            {cartCount} {cartCount == 1 ? "item" : "items"} in cart
          </h1>
        </Card>
      )}

      <Modal
        scrollBehavior="inside"
        backdrop="opaque"
        isOpen={isOpen}
        onClose={closeModal}
        classNames={{
          body: "py-6",
          backdrop: "bg-myhouseblue/50 backdrop-opacity-40",
          base: `border-[#292f46] ${darkMode && "bg-myhouseblue text-white"}`,
          header: `border-b-[1px] border-[#292f46] rounded-t-lg text-white bg-myhouseblue ${
            darkMode && "border-white bg-white text-myhouseblue"
          }`,
          footer: `border-t-[1px] border-[#292f46] ${
            darkMode && "border-white"
          }`,
          closeButton: `hover:bg-white/5 text-white ${
            darkMode && "text-myhouseblue"
          } active:bg-white/10`,
        }}
      >
        <ModalContent>
          {(isOpen) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Cart Items
              </ModalHeader>
              <ModalBody>
                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={`${item.pizzaId}-${item.size}`}
                      className="flex justify-between"
                    >
                      <div>
                        <h4 className="font-semibold font-poppins">
                          {item.pizzaName}
                        </h4>
                        <div className="text-sm font-medium">
                          <p>
                            Size:{" "}
                            <span className="font-normal">{item.size}</span>
                          </p>
                          <p>
                            Price:{" "}
                            <span className="font-bold">
                              ₹{item.totalPrice}
                            </span>{" "}
                            <span className="text-lg font-semibold font-poppins">
                              ×{item.quantity}
                            </span>
                          </p>
                        </div>
                      </div>
                      <Button
                        className="bg-reddanger"
                        size="sm"
                        variant="solid"
                        color="danger"
                        onPress={() =>
                          removeItemFromCart(item.pizzaId, item.size)
                        }
                      >
                        Remove
                      </Button>
                    </div>
                  ))
                )}
              </ModalBody>
              <ModalFooter>
                {cartItems.length > 0 && (
                  <div className="flex justify-between w-full font-extrabold">
                    <p>₹{cartTotal.toFixed(2)}</p>
                  </div>
                )}
                <Button
                  className={darkMode && "text-white"}
                  color="danger"
                  variant="light"
                  onPress={closeModal}
                >
                  Close
                </Button>
                <Button
                  fullWidth
                  className="bg-[#41B06E]"
                  color="primary"
                  onPress={handlePayment}
                  isDisabled={cartItems.length === 0}
                >
                  Checkout
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
