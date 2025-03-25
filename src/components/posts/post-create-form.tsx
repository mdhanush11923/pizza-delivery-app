"use client";

import {
  Button,
  Form,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@heroui/react";
import { useActionState } from "react";
import * as actions from "@/actions";
import FormButton from "../common/form-button";
import AddIcon from "@mui/icons-material/Add";
interface PostCreateFormProps {
  slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const [formState, action, isPending] = useActionState(
    actions.createPost.bind(null, slug),
    {
      errors: {},
    }
  );

  return (
    <Popover
      backdrop="opaque"
      showArrow
      classNames={{
        base: ["before:bg-default-200"],
        content: [
          "py-3 px-2 border-2 rounded-xl border-default-200",
          "bg-white",
          "dark:from-default-100 dark:to-default-50",
        ],
      }}
      placement="bottom"
    >
      <PopoverTrigger>
        <Button fullWidth className="bg-black" color="primary" radius="lg">
          <AddIcon />
          Create a Post
        </Button>
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
            <Textarea
              name="title"
              placeholder="Title of the post"
              label="Title"
              labelPlacement="outside"
              variant="faded"
              defaultValue={formState.inputs?.title || ""}
              minRows={1}
            />
            <Textarea
              name="content"
              placeholder="Content"
              label="Content"
              defaultValue={formState.inputs?.content || ""}
              variant="faded"
              minRows={1}
              labelPlacement="outside"
            />

            {formState.errors._form ? (
              <div className="rounded p-2 bg-red-200 text-red-950 border border-red-500">
                {formState.errors._form?.join(", ")}
              </div>
            ) : null}

            <FormButton isPending={isPending}>Submit</FormButton>
          </div>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
