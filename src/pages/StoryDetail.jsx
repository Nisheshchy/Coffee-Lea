/** @format */

import { stories } from "../data/stories";

export default function StoryDetail({ id, navigateTo }) {
  const story = stories.find((s) => String(s.id) === String(id));
  if (!story) {
    return (
      <div>
        <p>Story not found.</p>
        <a
          href="#/stories"
          onClick={(e) => {
            e.preventDefault();
            navigateTo("/stories");
          }}
          className="text-sm text-blue-600 underline">
          Back to stories
        </a>
      </div>
    );
  }

  return (
    <article className="space-y-6">
      <button
        onClick={() => navigateTo("/stories")}
        className="text-sm text-[#3b2519] underline">
        ← Back to stories
      </button>

      <h1 className="text-3xl font-bold">{story.title}</h1>
      <img src={story.image} alt={story.title} className="rounded-md" />
      <p className="text-lg">{story.content}</p>
    </article>
  );
}
