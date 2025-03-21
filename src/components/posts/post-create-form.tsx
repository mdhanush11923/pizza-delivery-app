"use client";

import {
  Button,
  Form,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";
import { useActionState } from "react";
import * as actions from "@/actions";

interface PostCreateFormProps {
  slug: string
}

export default function PostCreateForm({slug}: PostCreateFormProps) {
  const [formState, action, isPending] = useActionState(actions.createPost.bind(null, slug), {
    errors: {},
  });

  return (
    <Popover placement="left-start">
      <PopoverTrigger>
        <Button color="primary" radius="sm">Create a post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Form
          action={action}
          validationBehavior="aria"
          validationErrors={formState.errors}
          key={JSON.stringify(formState.inputs)}
        >
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-xl">Create a post</h3>
            <Input
              name="title"
              placeholder="Title"
              label="Title"
              labelPlacement="outside"
              defaultValue={formState.inputs?.title || ""}
            />
            <Input
              name="content"
              placeholder="Content"
              label="Content"
              defaultValue={formState.inputs?.content || ""}
              labelPlacement="outside"
            />

            {formState.errors._form ? (
              <div className="rounded p-2 bg-red-200 text-red-950 border border-red-500">
                {formState.errors._form?.join(", ")}
              </div>
            ) : null}

            <Button type="submit" isLoading={isPending}>
              Submit
            </Button>
          </div>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
