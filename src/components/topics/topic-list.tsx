import { db } from "@/db";
import paths from "@/paths";
import { Chip } from "@heroui/chip";
import Link from "next/link";

export default async function TopicList() {
  const topics = await db.topic.findMany();

  return (
    <div className="flex flex-wrap gap-2">
      {topics.map((topic) => {
        return (
          <div key={topic.id}>
            <Link href={paths.topicShow(topic.slug)}>
              <Chip
                color="warning"
                variant="flat"
              >
                {topic.slug}
              </Chip>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
