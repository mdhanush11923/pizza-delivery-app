"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";
import { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Must be lowercase letters or dashes without spaces",
    }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };

  inputs?: {
    name?: string;
    description?: string;
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in to do this"],
      },
    };
  }

  const rawData = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
  };

  const result = createTopicSchema.safeParse(rawData);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      inputs: rawData,
    };
  }

  let topic: Topic;

  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        errors: {
          _form: [e.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }

  revalidatePath("/");
  redirect(paths.topicShow(topic.slug));
}
