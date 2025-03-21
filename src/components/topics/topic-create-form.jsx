"use client";

import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { Form } from "@heroui/form";
import * as actions from "@/actions";
import { useActionState } from "react";
import { addToast } from "@heroui/react";

export default function TopicCreateForm() {
  const [formState, action, isPending] = useActionState(actions.createTopic, {
    errors: {},
  });

  return (
    <Popover
      backdrop="opaque"
      showArrow
      classNames={{
        base: [
          "before:bg-default-200",
        ],
        content: [
          "py-3 px-4 border-2 rounded-xl border-default-200",
          "bg-white",
          "dark:from-default-100 dark:to-default-50",
        ],
      }}
      placement="left-start"
    >
      <PopoverTrigger>
        <Button fullWidth className="bg-black" color="primary" radius="lg">
          Create a Topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Form
          key={JSON.stringify(formState.inputs)}
          action={action}
          validationBehavior="aria"
          validationErrors={formState.errors}
        >
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="name"
              defaultValue={formState.inputs?.name || ""}
              label="Name"
              labelPlacement="outside"
              placeholder="Topic Name"
              variant="faded"
            />
            <Textarea
              name="description"
              defaultValue={formState.inputs?.description || ""}
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topic"
              variant="faded"
            />
            {formState.errors._form ? (
              <div className="rounded p-2 bg-red-200 text-red-950 border border-red-500">
                {formState.errors._form?.join(", ")}
              </div>
            ) : null}

            <Button
              className="bg-black dark:bg-white"
              color="primary"
              type="submit"
              radius="sm"
              isLoading={isPending}
            >
              Submit
            </Button>
          </div>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
